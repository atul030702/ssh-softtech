import { z } from "zod";

export const createSubscriptionSchema = z.object({
  couponCode: z.string().optional(),
});

export const cancelSubscriptionSchema = z.object({
  cancelAtPeriodEnd: z.boolean().default(true),
  reason: z.string().optional(),
});

export const createPlanSchema = z.object({
  name: z.string().min(1, "Plan name is required").optional(),
  description: z.string().optional(),
  amount: z.number().positive("Amount must be positive").optional(),
  currency: z.string().length(3, "Currency must be a 3-letter code").optional(),
  interval: z
    .number()
    .int()
    .positive("Interval must be a positive integer")
    .optional(),
  period: z.enum(["daily", "weekly", "monthly", "yearly"]).optional(),
});

export const razorpaySubscriptionWebhookSchema = z.object({
  entity: z.literal("event"),
  event: z.string(),
  payload: z.object({
    subscription: z.object({
      entity: z.object({
        id: z.string(),
        plan_id: z.string(),
        customer_id: z.string(),
        status: z.string(),
        current_start: z.number().optional(),
        current_end: z.number().optional(),
        ended_at: z.number().optional().nullable(),
        quantity: z.number().optional(),
        notes: z.record(z.string(), z.string()).optional(),
        charge_at: z.number().optional(),
        offer_id: z.string().optional().nullable(),
        short_url: z.string().optional(),
        has_scheduled_changes: z.boolean().optional(),
        change_scheduled_at: z.number().optional().nullable(),
        source: z.string().optional(),
        payment_method: z.string().optional(),
        created_at: z.number().optional(),
        expire_by: z.number().optional().nullable(),
        customer_notify: z.number().optional(),
        total_count: z.number().optional(),
        paid_count: z.number().optional(),
        remaining_count: z.number().optional(),
      }),
    }),
    payment: z
      .object({
        entity: z.object({
          id: z.string(),
          amount: z.number(),
          currency: z.string(),
          status: z.string(),
          method: z.string().optional(),
          captured: z.boolean().optional(),
          created_at: z.number().optional(),
        }),
      })
      .optional(),
  }),
  created_at: z.number(),
});

export type CreateSubscriptionInput = z.infer<typeof createSubscriptionSchema>;
export type CancelSubscriptionInput = z.infer<typeof cancelSubscriptionSchema>;
export type RazorpaySubscriptionWebhook = z.infer<
  typeof razorpaySubscriptionWebhookSchema
>;
