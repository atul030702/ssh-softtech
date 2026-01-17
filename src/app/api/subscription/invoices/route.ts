import { NextRequest } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  successResponse,
  unauthorizedResponse,
  handleApiError,
} from "@/lib/api-response";

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return unauthorizedResponse();
    }

    const subscription = await prisma.userSubscription.findUnique({
      where: { userId: user.id },
    });

    if (!subscription?.razorpaySubscriptionId) {
      return successResponse({
        invoices: [],
        message: "No subscription found",
      });
    }

    const searchParams = request.nextUrl.searchParams;
    const count = parseInt(searchParams.get("count") || "10", 10);
    const skip = parseInt(searchParams.get("skip") || "0", 10);

    try {
      const invoices = await razorpay.invoices.all({
        subscription_id: subscription.razorpaySubscriptionId,
        count,
        skip,
      });

      return successResponse({
        invoices: invoices.items.map((invoice) => ({
          id: invoice.id,
          amount: Number(invoice.amount || 0) / 100,
          currency: invoice.currency,
          status: invoice.status,
          paidAt: invoice.paid_at
            ? new Date(Number(invoice.paid_at) * 1000)
            : null,
          createdAt: new Date(Number(invoice.created_at) * 1000),
          receiptUrl: invoice.short_url,
          receiptNumber: invoice.receipt,
        })),
        total: invoices.count,
      });
    } catch {
      // If Razorpay fetch fails, return what we have in database
      return successResponse({
        invoices: subscription.lastPaymentId
          ? [
              {
                id: subscription.lastPaymentId,
                amount: (subscription.lastPaymentAmount || 0) / 100,
                currency: "USD",
                status: "paid",
                paidAt: subscription.lastPaymentDate,
              },
            ]
          : [],
        message: "Limited invoice data available",
      });
    }
  } catch (error) {
    return handleApiError(error);
  }
}
