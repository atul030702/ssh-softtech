import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { updateUserSchema } from "@/lib/validations/user";
import {
  successResponse,
  unauthorizedResponse,
  handleApiError,
} from "@/lib/api-response";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return unauthorizedResponse();
    }

    return successResponse({ user });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return unauthorizedResponse();
    }

    const body = await request.json();
    const validatedData = updateUserSchema.parse(body);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: validatedData,
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return successResponse({
      user: updatedUser,
      message: "Profile updated successfully",
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return unauthorizedResponse();
    }

    await prisma.user.delete({
      where: { id: user.id },
    });

    return successResponse({
      message: "Account deleted successfully",
    });
  } catch (error) {
    return handleApiError(error);
  }
}
