import Razorpay from "razorpay";

if (!process.env.RAZORPAY_KEY_ID) {
  throw new Error("Missing RAZORPAY_KEY_ID environment variable");
}

if (!process.env.RAZORPAY_KEY_SECRET) {
  throw new Error("Missing RAZORPAY_KEY_SECRET environment variable");
}

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const SUBSCRIPTION_CONFIG = {

  amount: 1000,
  currency: "USD",
  interval: 1,
  period: "monthly" as const,
  planName: "Monthly Subscription",
  description: "$10/month subscription plan",
};

export const RAZORPAY_STATUS_MAP = {
  created: "PENDING",
  authenticated: "PENDING",
  active: "ACTIVE",
  pending: "PENDING",
  halted: "PAUSED",
  cancelled: "CANCELLED",
  completed: "EXPIRED",
  expired: "EXPIRED",
  paused: "PAUSED",
} as const;
