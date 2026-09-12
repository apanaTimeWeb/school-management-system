import { z } from 'zod';

export const AuditLogSchema = z.object({
  id: z.string(),
  user: z.string(),
  role: z.string(),
  action: z.string(),
  module: z.string(),
  recordId: z.string(),
  date: z.string(),
  time: z.string(),
  ip: z.string(),
  device: z.string(),
  oldValue: z.string().nullable(),
  newValue: z.string().nullable(),
});

export type AuditLogType = z.infer<typeof AuditLogSchema>;
