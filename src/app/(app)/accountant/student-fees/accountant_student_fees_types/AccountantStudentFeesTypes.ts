export interface StudentFeeSummary {
  id: string;
  studentName: string;
  admissionNo: string;
  className: string;
  totalFees: number;
  paidAmount: number;
  pendingAmount: number;
  overdueAmount: number;
  status: 'Clear' | 'Pending' | 'Overdue';
}

export interface FeeStructureItem {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  isInstallment: boolean;
}

export interface FeePaymentRecord {
  id: string;
  receiptNo: string;
  amount: number;
  date: string;
  method: 'Cash' | 'UPI' | 'Card' | 'Bank';
  status: 'Successful' | 'Failed' | 'Refunded';
}

export interface DiscountRecord {
  id: string;
  type: 'Discount' | 'Scholarship' | 'Concession';
  name: string;
  amount: number;
  approvedBy: string;
  date: string;
}

export interface FineRecord {
  id: string;
  reason: string;
  amount: number;
  dateApplied: string;
  status: 'Paid' | 'Pending' | 'Waived';
}
