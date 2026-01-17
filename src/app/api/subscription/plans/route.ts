import { NextRequest } from "next/server";
import { razorpay, SUBSCRIPTION_CONFIG } from "@/lib/razorpay";
import { getCurrentUser } from "@/lib/auth";
import { createPlanSchema } from "@/lib/validations/subscription";
import {
  successResponse,
  errorResponse,
  unauthorizedResponse,
  handleApiError,
} from "@/lib/api-response";

// GET /api/subscription/plans - Get available subscription plans
export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return unauthorizedResponse();
    }

    // Return the configured plan details
    const planId = process.env.RAZORPAY_PLAN_ID;

    if (!planId) {
      return errorResponse("No subscription plan configured", 500);
    }

    try {
      // Fetch plan details from Razorpay
      const plan = await razorpay.plans.fetch(planId);

      return successResponse({
        plan: {
          id: plan.id,
          name: SUBSCRIPTION_CONFIG.planName,
          description: SUBSCRIPTION_CONFIG.description,
          amount: Number(plan.item.amount) / 100, // Convert to main currency unit
          currency: plan.item.currency,
          interval: plan.interval,
          period: plan.period,
        },
      });
    } catch {
      // Return configured details if Razorpay fetch fails
      return successResponse({
        plan: {
          id: planId,
          name: SUBSCRIPTION_CONFIG.planName,
          description: SUBSCRIPTION_CONFIG.description,
          amount: SUBSCRIPTION_CONFIG.amount / 100,
          currency: SUBSCRIPTION_CONFIG.currency,
          interval: SUBSCRIPTION_CONFIG.interval,
          period: SUBSCRIPTION_CONFIG.period,
        },
      });
    }
  } catch (error) {
    return handleApiError(error);
  }
}

// POST /api/subscription/plans - Create a new plan (admin only)
// This is typically done once via Razorpay dashboard, but provided for completeness
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return unauthorizedResponse();
    }

    // TODO: Add admin check here
    // if (!user.isAdmin) {
    //   return forbiddenResponse("Only admins can create plans");
    // }

    const body = await request.json();
    const validatedData = createPlanSchema.parse(body);

    const {
      name = SUBSCRIPTION_CONFIG.planName,
      description = SUBSCRIPTION_CONFIG.description,
      amount = SUBSCRIPTION_CONFIG.amount,
      currency = SUBSCRIPTION_CONFIG.currency,
      interval = SUBSCRIPTION_CONFIG.interval,
      period = SUBSCRIPTION_CONFIG.period,
    } = validatedData;

    // Create plan in Razorpay
    const plan = await razorpay.plans.create({
      period,
      interval,
      item: {
        name,
        description,
        amount: amount, // Already in smallest unit
        currency,
      },
    });

    return successResponse(
      {
        plan: {
          id: plan.id,
          name: plan.item.name,
          description: plan.item.description,
          amount: Number(plan.item.amount) / 100,
          currency: plan.item.currency,
          interval: plan.interval,
          period: plan.period,
        },
        message:
          "Plan created successfully. Add this plan ID to your environment variables.",
        planId: plan.id,
      },
      201,
    );
  } catch (error) {
    return handleApiError(error);
  }
}
