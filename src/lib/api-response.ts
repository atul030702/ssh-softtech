import { NextResponse } from "next/server";
import { ZodError } from "zod";

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  errors?: Array<{ field: string; message: string }>;
};

export function successResponse<T>(data: T, status = 200): NextResponse {
  return NextResponse.json(
    {
      success: true,
      data,
    } as ApiResponse<T>,
    { status },
  );
}

export function errorResponse(
  message: string,
  status = 400,
  errors?: Array<{ field: string; message: string }>,
): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: message,
      ...(errors && { errors }),
    } as ApiResponse,
    { status },
  );
}

export function handleZodError(error: ZodError): NextResponse {
  const issues = error.issues || [];
  const errors = issues.map((err) => ({
    field: String(err.path.join(".")),
    message: err.message,
  }));

  return errorResponse("Validation failed", 400, errors);
}

export function handleApiError(error: unknown): NextResponse {
  console.error("API Error:", error);

  // Handle Zod validation errors
  if (error instanceof ZodError) {
    return handleZodError(error);
  }

  // Handle JSON parsing errors
  if (error instanceof SyntaxError && error.message.includes("JSON")) {
    return errorResponse("Invalid JSON in request body", 400);
  }

  // Handle Prisma errors
  if (
    error instanceof Error &&
    error.constructor.name === "PrismaClientKnownRequestError"
  ) {
    const prismaError = error as Error & { code?: string };
    if (prismaError.code === "P2002") {
      return errorResponse("A record with this value already exists", 409);
    }
    if (prismaError.code === "P2025") {
      return errorResponse("Record not found", 404);
    }
  }

  // Handle Razorpay errors
  if (error instanceof Error && "statusCode" in error) {
    const razorpayError = error as Error & {
      statusCode?: number;
      error?: { description?: string };
    };
    const message =
      razorpayError.error?.description ||
      error.message ||
      "Payment service error";
    return errorResponse(message, razorpayError.statusCode || 500);
  }

  if (error instanceof Error) {
    const message =
      process.env.NODE_ENV === "development"
        ? error.message
        : "Internal server error";

    return errorResponse(message, 500);
  }

  return errorResponse("An unexpected error occurred", 500);
}

export function unauthorizedResponse(message = "Unauthorized"): NextResponse {
  return errorResponse(message, 401);
}

export function forbiddenResponse(message = "Forbidden"): NextResponse {
  return errorResponse(message, 403);
}

export function notFoundResponse(message = "Resource not found"): NextResponse {
  return errorResponse(message, 404);
}
