"use server";

import { createClient } from "@/auth/server";
import { handleError } from "@/utils/handleError";
import { prisma } from "@/lib/prisma";

export const loginAction = async (email: string, password: string) => {
  try {
    const { auth } = await createClient();

    const { data, error } = await auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (data?.user) {
      await syncUserToDatabaseInternal(data.user);
    }

    return { user: data?.user, errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const signUpAction = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    const { auth } = await createClient();

    const { data, error } = await auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) throw error;

    const userId = data.user?.id;
    if (!userId) throw new Error("Error signing up");

    // add user to database
    await prisma.user.create({
      data: {
        id: userId,
        email,
        name,
      },
    });

    return {
      message: `We have sent a verification link to ${data.user?.email}. Please check your inbox and click the link to verify your account.`,
      errorMessage: null,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const signInWithGoogle = async (): Promise<{
  errorMessage: string | null;
  redirectUrl: string | null;
}> => {
  const authCallbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`;

  try {
    const { auth } = await createClient();

    const { data, error } = await auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: authCallbackUrl,
      },
    });

    if (error) throw error;

    return {
      errorMessage: null,
      redirectUrl: data?.url,
    };
  } catch (error) {
    console.error(error);
    return {
      errorMessage:
        error instanceof Error ? error.message : "An unknown error occurred",
      redirectUrl: null,
    };
  }
};

export const logOutAction = async () => {
  try {
    const { auth } = await createClient();

    const { error } = await auth.signOut();
    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

const syncUserToDatabaseInternal = async (user: {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
    name?: string;
    avatar_url?: string;
  };
  email_confirmed_at?: string;
}) => {
  const existingUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        id: user.id,
        email: user.email!,
        name: user.user_metadata?.full_name || user.user_metadata?.name || null,
        image: user.user_metadata?.avatar_url || null,
        emailVerified: user.email_confirmed_at
          ? new Date(user.email_confirmed_at)
          : null,
      },
    });
  }
};

// Call this after OAuth callback (e.g., in /auth/callback route)
export const syncUserToDatabase = async () => {
  try {
    const { auth } = await createClient();
    const {
      data: { user },
    } = await auth.getUser();

    if (!user) {
      return { errorMessage: "Not authenticated" };
    }

    await syncUserToDatabaseInternal(user);

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};
