export type ExpenseStatus = 'Pending Approval' | 'Approved' | 'Rejected' | 'Paid';

export interface ExpenseRecord {
  id: string; // Expense ID
  category: string;
  vendor: string;
  amount: number;
  expenseDate: string;
  paymentMethod: string;
  billInvoiceRef: string;
  hasAttachment: boolean;
  status: ExpenseStatus;
  requestedBy: string;
  approvalDate?: string;
  approvedBy?: string;
  remarks?: string;
}
