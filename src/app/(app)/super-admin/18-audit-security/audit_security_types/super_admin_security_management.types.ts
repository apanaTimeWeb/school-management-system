import { z } from 'zod';

export const SecurityConfigSchema = z.object({
  // Login Security
  minPasswordLength: z.number().min(6).max(32).default(8),
  passwordComplexity: z.boolean().default(true),
  passwordExpiryDays: z.number().min(0).default(90), // 0 means never
  failedLoginAttempts: z.number().min(0).default(5),
  accountLockDurationMins: z.number().min(0).default(30),
  sessionTimeoutMins: z.number().min(5).default(60),
  concurrentLoginControl: z.boolean().default(false), // true = prevent concurrent
  rememberDevice: z.boolean().default(true),
  loginNotification: z.boolean().default(true),

  // 2FA
  twoFactorEnabled: z.boolean().default(false),
  useOtp: z.boolean().default(false),
  useAuthenticator: z.boolean().default(false),
  enableBackupCodes: z.boolean().default(false),

  // Access Control
  ipRestrictionEnabled: z.boolean().default(false),
  allowedIps: z.string().optional(),
  allowedCountries: z.string().optional(), // Comma separated ISO codes
  deviceRestrictionEnabled: z.boolean().default(false),
  browserSessionControl: z.boolean().default(true),
});

export type SecurityConfigType = z.infer<typeof SecurityConfigSchema>;
