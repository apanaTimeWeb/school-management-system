import { z } from 'zod';

export const SchoolSchema = z.object({
  schoolCode: z.string().min(1, 'School Code is required'),
  schoolName: z.string().min(1, 'School Name is required'),
  logo: z.any().optional(), // Added Logo field
  principalName: z.string().min(1, 'Principal Name is required'),
  address: z.string().min(1, 'Address is required'),
  contact: z.string().min(10, 'Contact must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
  affiliationDetails: z.string().optional(),
  registrationDetails: z.string().optional(),
  schoolTimings: z.string().min(1, 'School Timings are required'),
  workingDays: z.string().min(1, 'Working Days are required'),
  timeZone: z.string().default('Asia/Kolkata'),
  currency: z.string().default('INR'),
  defaultLanguage: z.string().default('English'),
  isActive: z.boolean().default(true),
});

export type School = z.infer<typeof SchoolSchema> & { id: string };

export const BranchSchema = z.object({
  schoolId: z.string().min(1, 'School ID is required'),
  branchCode: z.string().min(1, 'Branch Code is required'),
  branchName: z.string().min(1, 'Branch Name is required'),
  address: z.string().min(1, 'Address is required'),
  contact: z.string().min(10, 'Contact must be at least 10 digits'),
  branchHead: z.string().min(1, 'Branch Head Name is required'),
  facilities: z.string().optional(), // Added Facilities field (comma separated for now)
  branchSettings: z.string().optional(), // Added Branch-specific settings field
  isActive: z.boolean().default(true),
});

export type Branch = z.infer<typeof BranchSchema> & { id: string };
