import { z } from 'zod';

export const GeneralSettingsSchema = z.object({
  // Basic Info
  schoolName: z.string().min(1, "School name is required"),
  address: z.string(),
  phone: z.string(),
  email: z.string().email("Invalid email format"),
  website: z.string().url("Invalid URL format").or(z.literal('')),
  
  // Branding (URLs or base64 usually, here we keep it as string for type simplicity)
  logo: z.any().optional(),
  favicon: z.any().optional(),

  // Localization
  timezone: z.string(),
  dateFormat: z.string(),
  timeFormat: z.string(),
  currency: z.string(),
  numberFormat: z.string(),
  defaultLanguage: z.string(),

  // Academic & Financial
  academicSession: z.string(),
  financialYear: z.string(),
});

export type GeneralSettingsType = z.infer<typeof GeneralSettingsSchema>;
