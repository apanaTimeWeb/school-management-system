import { z } from 'zod';

// Define the 10 specific User Types required
export const UserTypeEnum = z.enum([
  'Admin',
  'Principal',
  'Teacher',
  'Student',
  'Parent',
  'Accountant',
  'Office/HR',
  'Librarian',
  'Transport',
  'Hostel'
]);

// Define all possible account statuses
export const UserStatusEnum = z.enum([
  'Active',
  'Inactive',
  'Suspended',
  'Deleted',
  'Locked'
]);

// Profile Schema covering all required fields
export const UserProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().min(10, 'Mobile must be at least 10 digits'),
  profilePhoto: z.string().optional(), // URL or base64
  role: UserTypeEnum,
  branch: z.string().min(1, 'Branch is required'),
  department: z.string().optional(),
  status: UserStatusEnum.default('Active'),
});

export type UserProfileType = z.infer<typeof UserProfileSchema> & { id: string };
