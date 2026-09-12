import { z } from 'zod';

export const MODULES = [
  'Dashboard', 'Students', 'Parents', 'Academics', 'Attendance', 
  'Examination', 'Fees', 'Accounts', 'HR', 'Library', 
  'Transport', 'Hostel', 'Inventory', 'Communication', 
  'Reports', 'Settings'
] as const;

export const ACTIONS = [
  'View', 'Create', 'Edit', 'Delete', 'Approve', 
  'Reject', 'Verify', 'Publish', 'Unpublish', 'Print', 
  'Download', 'Export', 'Import', 'Cancel', 'Refund', 
  'Assign', 'Transfer'
] as const;

export const DATA_SCOPES = [
  'All Schools', 'Own School', 'Branch', 'Department', 
  'Class', 'Section', 'Subject', 'Own Records'
] as const;

export const PermissionEntrySchema = z.object({
  moduleId: z.enum(MODULES),
  actionId: z.enum(ACTIONS),
  isGranted: z.boolean(),
  dataScope: z.enum(DATA_SCOPES).optional(),
});

export type PermissionEntryType = z.infer<typeof PermissionEntrySchema>;

// The full permission matrix for a role
export const RolePermissionsSchema = z.object({
  roleId: z.string().min(1, 'Role ID is required'),
  permissions: z.array(PermissionEntrySchema),
});

export type RolePermissionsType = z.infer<typeof RolePermissionsSchema>;
