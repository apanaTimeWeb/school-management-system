import { z } from 'zod';

// The exact 13 activity types required by the user
export const ACTIVITY_TYPES = [
  'Login',
  'Logout',
  'Failed login',
  'Password change',
  'Permission change',
  'Record creation',
  'Record update',
  'Record deletion',
  'Export',
  'Import',
  'Backup',
  'Restore',
  'Configuration changes'
] as const;

export const SystemActivityLogSchema = z.object({
  id: z.string(),
  timestamp: z.string(),
  user: z.string(),
  role: z.string(),
  activityType: z.enum(ACTIVITY_TYPES),
  details: z.string(),
  ip: z.string(),
});

export type SystemActivityLogType = z.infer<typeof SystemActivityLogSchema>;
