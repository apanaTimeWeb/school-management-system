import { z } from 'zod';

export const FinancialYearSchema = z.object({
  fyName: z.string().min(1, 'Financial Year Name is required (e.g. FY 2026-27)'),
  startDate: z.string().min(1, 'Start Date is required'),
  endDate: z.string().min(1, 'End Date is required'),
  status: z.enum(['Active', 'Closed', 'Locked']).default('Active'),
});

export type FinancialYear = z.infer<typeof FinancialYearSchema> & { id: string };
