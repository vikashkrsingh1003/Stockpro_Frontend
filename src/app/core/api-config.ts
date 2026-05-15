import { ENV } from "./generated-env";

const numberFromEnv = (value: string, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const API_BASE_URL = ENV.API_BASE_URL;
export const RAZORPAY_CHECKOUT_SCRIPT_URL = ENV.RAZORPAY_CHECKOUT_SCRIPT_URL;
export const RAZORPAY_MAX_AMOUNT_INR = numberFromEnv(ENV.RAZORPAY_MAX_AMOUNT_INR, 500000);
