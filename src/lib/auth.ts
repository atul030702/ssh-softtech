import { createClient } from "@/auth/server";
import { prisma } from "./prisma";

export async function getCurrentUser() {
  try {
    const { auth } = await createClient();
    const {
      data: { user },
    } = await auth.getUser();

    if (!user) {
      return null;
    }

    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
        subscription: {
          select: {
            id: true,
            status: true,
            currentPeriodEnd: true,
            razorpaySubscriptionId: true,
          },
        },
      },
    });

    if (!dbUser) {
      const newUser = await prisma.user.create({
        data: {
          id: user.id,
          email: user.email!,
          name:
            user.user_metadata?.full_name || user.user_metadata?.name || null,
          image: user.user_metadata?.avatar_url || null,
          emailVerified: user.email_confirmed_at
            ? new Date(user.email_confirmed_at)
            : null,
        },
        select: {
          id: true,
          email: true,
          name: true,
          image: true,
          createdAt: true,
          subscription: {
            select: {
              id: true,
              status: true,
              currentPeriodEnd: true,
              razorpaySubscriptionId: true,
            },
          },
        },
      });
      return newUser;
    }

    return dbUser;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export async function hasActiveSubscription(userId: string): Promise<boolean> {
  const subscription = await prisma.userSubscription.findUnique({
    where: { userId },
  });

  if (!subscription) return false;

  return (
    subscription.status === "ACTIVE" &&
    subscription.currentPeriodEnd !== null &&
    subscription.currentPeriodEnd > new Date()
  );
}
