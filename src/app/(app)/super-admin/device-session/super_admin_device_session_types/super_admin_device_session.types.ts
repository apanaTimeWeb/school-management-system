import { z } from 'zod';

export const DeviceSessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  userName: z.string(),
  deviceType: z.string(), // Device type
  browser: z.string(),    // Browser
  os: z.string(),         // OS
  ip: z.string(),         // IP
  lastActivity: z.string(), // Last activity
  loginTime: z.string(),    // Login time
  logoutTime: z.string().nullable(), // Logout time
  isBlocked: z.boolean().default(false),
  isActive: z.boolean().default(true),
});

export type DeviceSessionType = z.infer<typeof DeviceSessionSchema>;
