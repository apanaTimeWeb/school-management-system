import { ReportDefinition } from "../accountant_reports_types/AccountantReportsTypes";

export const REPORTS_LIST: ReportDefinition[] = [
  // Collection Reports
  { id: 'daily_collection', title: 'Daily Collection', category: 'Collection', description: 'Summary of day-wise collections across all modes.', iconType: 'daily', requiresDateRange: true },
  { id: 'monthly_collection', title: 'Monthly Collection', category: 'Collection', description: 'Month-over-month collection analytics and trends.', iconType: 'monthly', requiresDateRange: true },
  { id: 'annual_collection', title: 'Annual Collection', category: 'Collection', description: 'Fiscal year total collections and comparisons.', iconType: 'annual', requiresDateRange: true },
  { id: 'fee_collection', title: 'Fee Collection Head-wise', category: 'Collection', description: 'Breakdown of collections by specific fee heads.', iconType: 'fee', requiresDateRange: true },
  { id: 'payment_method', title: 'Payment Method Report', category: 'Collection', description: 'Distribution of payments by Cash, Online, Bank.', iconType: 'method', requiresDateRange: true },
  { id: 'income_summary', title: 'Income Summary', category: 'Collection', description: 'Total revenue including miscellaneous incomes.', iconType: 'income', requiresDateRange: true },

  // Dues & Defaulters
  { id: 'outstanding', title: 'Outstanding Dues', category: 'Dues & Defaulters', description: 'Detailed list of students with pending fee balances.', iconType: 'outstanding', requiresDateRange: false },
  { id: 'defaulters', title: 'Defaulters List', category: 'Dues & Defaulters', description: 'Students whose payments are overdue beyond deadline.', iconType: 'defaulter', requiresDateRange: false },
  { id: 'fine', title: 'Fine Collection Report', category: 'Dues & Defaulters', description: 'Summary of late fee and penalty fines collected.', iconType: 'fine', requiresDateRange: true },

  // Deductions & Expenses
  { id: 'expense', title: 'Expense Report', category: 'Deductions & Expenses', description: 'Detailed ledger of daily school expenditures.', iconType: 'expense', requiresDateRange: true },
  { id: 'refund', title: 'Refunds Processed', category: 'Deductions & Expenses', description: 'Log of fee refunds issued to students/parents.', iconType: 'refund', requiresDateRange: true },
  { id: 'concession', title: 'Concessions Granted', category: 'Deductions & Expenses', description: 'Report on discounts and fee waivers provided.', iconType: 'concession', requiresDateRange: true },
  { id: 'scholarship', title: 'Scholarship Allocations', category: 'Deductions & Expenses', description: 'Summary of merit/sports scholarships applied.', iconType: 'scholarship', requiresDateRange: true },

  // Banking & Reconciliation
  { id: 'cash', title: 'Cash Book Report', category: 'Banking & Reconciliation', description: 'Physical cash inflows, outflows, and daily balances.', iconType: 'cash', requiresDateRange: true },
  { id: 'bank', title: 'Bank Transactions', category: 'Banking & Reconciliation', description: 'Log of Cheques, NEFT, and IMPS clearances.', iconType: 'bank', requiresDateRange: true },
  { id: 'reconciliation', title: 'Reconciliation History', category: 'Banking & Reconciliation', description: 'Log of gateway and bank statement matches.', iconType: 'reconciliation', requiresDateRange: true },
];

export const MOCK_REPORT_PREVIEW_DATA = [
  { sn: 1, date: '2024-04-18', ref: 'REC-001', particulars: 'Tuition Fee Collection', amount: 125000, status: 'Completed' },
  { sn: 2, date: '2024-04-18', ref: 'REC-002', particulars: 'Transport Fee', amount: 45000, status: 'Completed' },
  { sn: 3, date: '2024-04-18', ref: 'REC-003', particulars: 'Late Fine', amount: 2500, status: 'Completed' },
  { sn: 4, date: '2024-04-19', ref: 'REC-004', particulars: 'Tuition Fee Collection', amount: 80000, status: 'Completed' },
  { sn: 5, date: '2024-04-19', ref: 'REC-005', particulars: 'Hostel Fee', amount: 30000, status: 'Completed' },
];
