import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { RAZORPAY_STATUS_MAP } from "@/lib/razorpay";

type SubscriptionStatus =
  | "ACTIVE"
  | "CANCELLED"
  | "EXPIRED"
  | "PENDING"
  | "PAUSED";

export const dynamic = "force-dynamic";

function verifyWebhookSignature(
  body: string,
  signature: string,
  secret: string
): boolean {
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get("x-razorpay-signature");
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!signature || !webhookSecret) {
      console.error("Missing webhook signature or secret");
      return NextResponse.json(
        { error: "Missing signature or secret" },
        { status: 400 }
      );
    }

    const rawBody = await request.text();

    const isValid = verifyWebhookSignature(rawBody, signature, webhookSecret);

    if (!isValid) {
      console.error("Invalid webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    console.log("Razorpay webhook event:", event.event);

    switch (event.event) {
      case "subscription.authenticated":
        await handleSubscriptionAuthenticated(event);
        break;

      case "subscription.activated":
        await handleSubscriptionActivated(event);
        break;

      case "subscription.charged":
        await handleSubscriptionCharged(event);
        break;

      case "subscription.pending":
        await handleSubscriptionPending(event);
        break;

      case "subscription.halted":
        await handleSubscriptionHalted(event);
        break;

      case "subscription.cancelled":
        await handleSubscriptionCancelled(event);
        break;

      case "subscription.completed":
        await handleSubscriptionCompleted(event);
        break;

      case "subscription.paused":
        await handleSubscriptionPaused(event);
        break;

      case "subscription.resumed":
        await handleSubscriptionResumed(event);
        break;

      case "payment.captured":
        console.log("Payment captured:", event.payload?.payment?.entity?.id);
        break;

      case "payment.failed":
        console.error("Payment failed:", event.payload?.payment?.entity?.id);
        break;

      default:
        console.log("Unhandled webhook event:", event.event);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);

    return NextResponse.json({ received: true, error: "Processing error" });
  }
}

async function handleSubscriptionAuthenticated(event: Record<string, unknown>) {
  const subscription = (event.payload as Record<string, unknown>)
    ?.subscription as Record<string, unknown>;
  const entity = subscription?.entity as Record<string, { userId?: string }>;
  const subscriptionId = entity?.id as string;
  const notes = entity?.notes as { userId?: string };

  if (!subscriptionId) return;

  await updateSubscriptionStatus(subscriptionId, "PENDING", {
    userId: notes?.userId,
  });
}

async function handleSubscriptionActivated(event: Record<string, unknown>) {
  const subscription = (event.payload as Record<string, unknown>)
    ?.subscription as Record<string, unknown>;
  const entity = subscription?.entity as Record<string, unknown>;
  const subscriptionId = entity?.id as string;
  const currentStart = entity?.current_start as number;
  const currentEnd = entity?.current_end as number;

  if (!subscriptionId) return;

  await updateSubscriptionStatus(subscriptionId, "ACTIVE", {
    currentPeriodStart: currentStart
      ? new Date(currentStart * 1000)
      : undefined,
    currentPeriodEnd: currentEnd ? new Date(currentEnd * 1000) : undefined,
  });
}

async function handleSubscriptionCharged(event: Record<string, unknown>) {
  const subscription = (event.payload as Record<string, unknown>)
    ?.subscription as Record<string, unknown>;
  const payment = (event.payload as Record<string, unknown>)?.payment as Record<
    string,
    unknown
  >;
  const subEntity = subscription?.entity as Record<string, unknown>;
  const payEntity = payment?.entity as Record<string, unknown>;

  const subscriptionId = subEntity?.id as string;
  const currentStart = subEntity?.current_start as number;
  const currentEnd = subEntity?.current_end as number;
  const paymentId = payEntity?.id as string;
  const amount = payEntity?.amount as number;

  if (!subscriptionId) return;

  await updateSubscriptionStatus(subscriptionId, "ACTIVE", {
    currentPeriodStart: currentStart
      ? new Date(currentStart * 1000)
      : undefined,
    currentPeriodEnd: currentEnd ? new Date(currentEnd * 1000) : undefined,
    lastPaymentId: paymentId,
    lastPaymentDate: new Date(),
    lastPaymentAmount: amount,
  });
}

async function handleSubscriptionPending(event: Record<string, unknown>) {
  const subscription = (event.payload as Record<string, unknown>)
    ?.subscription as Record<string, unknown>;
  const entity = subscription?.entity as Record<string, unknown>;
  const subscriptionId = entity?.id as string;

  if (!subscriptionId) return;

  await updateSubscriptionStatus(subscriptionId, "PENDING");
}

async function handleSubscriptionHalted(event: Record<string, unknown>) {
  const subscription = (event.payload as Record<string, unknown>)
    ?.subscription as Record<string, unknown>;
  const entity = subscription?.entity as Record<string, unknown>;
  const subscriptionId = entity?.id as string;

  if (!subscriptionId) return;

  await updateSubscriptionStatus(subscriptionId, "PAUSED");
}

async function handleSubscriptionCancelled(event: Record<string, unknown>) {
  const subscription = (event.payload as Record<string, unknown>)
    ?.subscription as Record<string, unknown>;
  const entity = subscription?.entity as Record<string, unknown>;
  const subscriptionId = entity?.id as string;

  if (!subscriptionId) return;

  await updateSubscriptionStatus(subscriptionId, "CANCELLED");
}

async function handleSubscriptionCompleted(event: Record<string, unknown>) {
  const subscription = (event.payload as Record<string, unknown>)
    ?.subscription as Record<string, unknown>;
  const entity = subscription?.entity as Record<string, unknown>;
  const subscriptionId = entity?.id as string;

  if (!subscriptionId) return;

  await updateSubscriptionStatus(subscriptionId, "EXPIRED");
}

// Handle subscription paused
async function handleSubscriptionPaused(event: Record<string, unknown>) {
  const subscription = (event.payload as Record<string, unknown>)
    ?.subscription as Record<string, unknown>;
  const entity = subscription?.entity as Record<string, unknown>;
  const subscriptionId = entity?.id as string;

  if (!subscriptionId) return;

  await updateSubscriptionStatus(subscriptionId, "PAUSED");
}

async function handleSubscriptionResumed(event: Record<string, unknown>) {
  const subscription = (event.payload as Record<string, unknown>)
    ?.subscription as Record<string, unknown>;
  const entity = subscription?.entity as Record<string, unknown>;
  const subscriptionId = entity?.id as string;

  if (!subscriptionId) return;

  await updateSubscriptionStatus(subscriptionId, "ACTIVE");
}

async function updateSubscriptionStatus(
  razorpaySubscriptionId: string,
  status: keyof typeof RAZORPAY_STATUS_MAP | SubscriptionStatus,
  additionalData?: {
    userId?: string;
    currentPeriodStart?: Date;
    currentPeriodEnd?: Date;
    lastPaymentId?: string;
    lastPaymentDate?: Date;
    lastPaymentAmount?: number;
  }
) {
  const mappedStatus =
    status in RAZORPAY_STATUS_MAP
      ? (RAZORPAY_STATUS_MAP[
          status as keyof typeof RAZORPAY_STATUS_MAP
        ] as SubscriptionStatus)
      : (status as SubscriptionStatus);

  try {
    await prisma.userSubscription.updateMany({
      where: { razorpaySubscriptionId },
      data: {
        status: mappedStatus,
        ...(additionalData?.currentPeriodStart && {
          currentPeriodStart: additionalData.currentPeriodStart,
        }),
        ...(additionalData?.currentPeriodEnd && {
          currentPeriodEnd: additionalData.currentPeriodEnd,
        }),
        ...(additionalData?.lastPaymentId && {
          lastPaymentId: additionalData.lastPaymentId,
        }),
        ...(additionalData?.lastPaymentDate && {
          lastPaymentDate: additionalData.lastPaymentDate,
        }),
        ...(additionalData?.lastPaymentAmount && {
          lastPaymentAmount: additionalData.lastPaymentAmount,
        }),
      },
    });

    console.log(
      `Updated subscription ${razorpaySubscriptionId} to status ${mappedStatus}`
    );
  } catch (error) {
    console.error(
      `Failed to update subscription ${razorpaySubscriptionId}:`,
      error
    );
  }
}
