import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser, hasActiveSubscription } from "@/lib/auth";

export function withAuth<T extends unknown[]>(
  handler: (request: NextRequest, ...args: T) => Promise<NextResponse>
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized. Please log in.",
        },
        { status: 401 }
      );
    }

    const requestWithUser = new NextRequest(request);
    requestWithUser.headers.set("x-user-id", user.id);

    return handler(requestWithUser, ...args);
  };
}

export function withSubscription<T extends unknown[]>(
  handler: (request: NextRequest, ...args: T) => Promise<NextResponse>
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized. Please log in.",
        },
        { status: 401 }
      );
    }

    const hasSubscription = await hasActiveSubscription(user.id);

    if (!hasSubscription) {
      return NextResponse.json(
        {
          success: false,
          error: "Active subscription required. Please subscribe to continue.",
        },
        { status: 403 }
      );
    }

    return handler(request, ...args);
  };
}

export function withAuthAndSubscription<T extends unknown[]>(
  handler: (request: NextRequest, ...args: T) => Promise<NextResponse>
) {
  return withAuth(withSubscription(handler));
}
