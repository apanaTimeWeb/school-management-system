export type ReportCategory = 'Collection' | 'Dues & Defaulters' | 'Deductions & Expenses' | 'Banking & Reconciliation';

export interface ReportDefinition {
  id: string;
  title: string;
  category: ReportCategory;
  description: string;
  iconType: string;
  requiresDateRange: boolean;
  requiresStatusFilter?: boolean;
}
