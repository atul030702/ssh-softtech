import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { razorpay } from "@/lib/razorpay";
import { getCurrentUser } from "@/lib/auth";
import {
  createSubscriptionSchema,
  cancelSubscriptionSchema,
} from "@/lib/validations/subscription";
import {
  successResponse,
  errorResponse,
  unauthorizedResponse,
  handleApiError,
} from "@/lib/api-response";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return unauthorizedResponse();
    }

    const subscription = await prisma.userSubscription.findUnique({
      where: { userId: user.id },
    });

    if (!subscription) {
      return successResponse({
        subscription: null,
        hasActiveSubscription: false,
      });
    }

    const hasActiveSubscription =
      subscription.status === "ACTIVE" &&
      subscription.currentPeriodEnd !== null &&
      subscription.currentPeriodEnd > new Date();

    return successResponse({
      subscription,
      hasActiveSubscription,
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return unauthorizedResponse();
    }

    const body = await request.json();
    createSubscriptionSchema.parse(body);

    // Check if user already has an active subscription
    const existingSubscription = await prisma.userSubscription.findUnique({
      where: { userId: user.id },
    });

    if (existingSubscription?.status === "ACTIVE") {
      return errorResponse("User already has an active subscription", 400);
    }

    // Ensure user has an email
    if (!user.email) {
      return errorResponse("User email is required for subscription", 400);
    }

    // Get or create Razorpay customer
    let razorpayCustomerId = existingSubscription?.razorpayCustomerId;

    if (!razorpayCustomerId) {
      const customer = await razorpay.customers.create({
        name: user.name || "Customer",
        email: user.email,
        notes: {
          userId: user.id,
        },
      });
      razorpayCustomerId = customer.id;
    }

    const planId = process.env.RAZORPAY_PLAN_ID;

    if (!planId) {
      return errorResponse(
        "Subscription plan not configured. Please contact support.",
        500,
      );
    }

    // Create Razorpay subscription
    const razorpaySubscription = await razorpay.subscriptions.create({
      plan_id: planId,
      customer_notify: 1,
      total_count: 12, // 12 months
      notes: {
        userId: user.id,
      },
    });

    const subscription = await prisma.userSubscription.upsert({
      where: { userId: user.id },
      create: {
        userId: user.id,
        razorpayCustomerId,
        razorpaySubscriptionId: razorpaySubscription.id,
        razorpayPlanId: planId,
        status: "PENDING",
      },
      update: {
        razorpayCustomerId,
        razorpaySubscriptionId: razorpaySubscription.id,
        razorpayPlanId: planId,
        status: "PENDING",
      },
    });

    return successResponse(
      {
        subscription,
        razorpay: {
          subscriptionId: razorpaySubscription.id,
          shortUrl: razorpaySubscription.short_url,
          keyId: process.env.RAZORPAY_KEY_ID,
        },
        message: "Subscription created. Complete payment to activate.",
      },
      201,
    );
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return unauthorizedResponse();
    }

    const subscription = await prisma.userSubscription.findUnique({
      where: { userId: user.id },
    });

    if (!subscription) {
      return errorResponse("No subscription found", 404);
    }

    if (!subscription.razorpaySubscriptionId) {
      return errorResponse("Invalid subscription", 400);
    }

    // Parse and validate request body (optional - defaults will be used if empty)
    let cancelAtPeriodEnd = true;
    try {
      const body = await request.json();
      const validated = cancelSubscriptionSchema.parse(body);
      cancelAtPeriodEnd = validated.cancelAtPeriodEnd;
    } catch (error) {
      // If body is empty or invalid JSON, use defaults
      if (!(error instanceof SyntaxError)) {
        return handleApiError(error);
      }
    }

    if (cancelAtPeriodEnd) {
      // Cancel at end of billing period
      await razorpay.subscriptions.update(subscription.razorpaySubscriptionId, {
        cancel_at_cycle_end: 1,
      } as Parameters<typeof razorpay.subscriptions.update>[1]);

      await prisma.userSubscription.update({
        where: { userId: user.id },
        data: {
          cancelAtPeriodEnd: true,
        },
      });

      return successResponse({
        message:
          "Subscription will be cancelled at the end of the billing period",
        cancelAt: subscription.currentPeriodEnd,
      });
    } else {
      // Cancel immediately
      await razorpay.subscriptions.cancel(subscription.razorpaySubscriptionId);

      await prisma.userSubscription.update({
        where: { userId: user.id },
        data: {
          status: "CANCELLED",
          cancelAtPeriodEnd: false,
        },
      });

      return successResponse({
        message: "Subscription cancelled immediately",
      });
    }
  } catch (error) {
    return handleApiError(error);
  }
}
