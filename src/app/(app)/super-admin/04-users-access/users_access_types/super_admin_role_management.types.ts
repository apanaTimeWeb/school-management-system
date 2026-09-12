import { z } from 'zod';

export const RoleSchema = z.object({
  roleName: z.string().min(1, 'Role Name is required'),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type RoleType = z.infer<typeof RoleSchema> & { id: string };
