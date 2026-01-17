import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 60;

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "anonymous";
  return `ratelimit:${ip}`;
}

function isRateLimited(key: string): { limited: boolean; remaining: number } {
  const now = Date.now();
  const data = rateLimitMap.get(key);

  if (!data || data.resetTime < now) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { limited: false, remaining: MAX_REQUESTS - 1 };
  }

  if (data.count >= MAX_REQUESTS) {
    return { limited: true, remaining: 0 };
  }

  data.count++;
  return { limited: false, remaining: MAX_REQUESTS - data.count };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/webhooks")) {
    return NextResponse.next();
  }

  const rateLimitKey = getRateLimitKey(request);
  const { limited, remaining } = isRateLimited(rateLimitKey);

  if (limited) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please try again later.",
      },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": MAX_REQUESTS.toString(),
          "X-RateLimit-Remaining": "0",
          "Retry-After": "60",
        },
      }
    );
  }

  const response = NextResponse.next();
  response.headers.set("X-RateLimit-Limit", MAX_REQUESTS.toString());
  response.headers.set("X-RateLimit-Remaining", remaining.toString());

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: ["/api/:path*"],
};
