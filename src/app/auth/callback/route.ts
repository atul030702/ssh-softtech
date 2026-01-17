import { createClient } from "@/auth/server";
import { syncUserToDatabase } from "@/actions/users";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const { auth } = await createClient();
    const { error } = await auth.exchangeCodeForSession(code);

    if (!error) {
      // Sync user to database after successful OAuth (ignore errors - user will be synced on next API call)
      try {
        await syncUserToDatabase();
      } catch (syncError) {
        console.error("Failed to sync user to database:", syncError);
        // Continue with redirect - user will be synced on next getCurrentUser call
      }

      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";

      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_callback_error`);
}
