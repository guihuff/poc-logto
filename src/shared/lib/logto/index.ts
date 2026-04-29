import { z } from "zod";

const envSchema = z.object({
  LOGTO_ENDPOINT: z.string().url(),
  LOGTO_APP_ID: z.string().min(1),
  LOGTO_APP_SECRET: z.string().min(1),
  LOGTO_BASE_URL: z.string().url(),
  LOGTO_COOKIE_SECRET: z.string().min(1),
});

const env = envSchema.parse(process.env);

export const logtoConfig = {
  endpoint: env.LOGTO_ENDPOINT,
  appId: env.LOGTO_APP_ID,
  appSecret: env.LOGTO_APP_SECRET,
  baseUrl: env.LOGTO_BASE_URL,
  cookieSecret: env.LOGTO_COOKIE_SECRET,
  cookieSecure: process.env.NODE_ENV === "production",
};
