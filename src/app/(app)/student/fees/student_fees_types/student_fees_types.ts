export type FeeStatus = 'Paid' | 'Unpaid' | 'Overdue';

export interface FeeInstallment {
  id: string;
  title: string; // e.g., "Quarter 1 Fee"
  dueDate: string;
  amount: number;
  fine: number;
  concession: number;
  scholarship: number;
  netAmount: number; // amount + fine - concession - scholarship
  status: FeeStatus;
  paidOn?: string;
  receiptNumber?: string;
}

export interface FeeTransaction {
  id: string;
  date: string;
  installmentTitle: string;
  amountPaid: number;
  paymentMethod: 'Online' | 'Cash' | 'Cheque' | 'Bank Transfer';
  transactionId: string;
  receiptNumber: string;
  status: 'Success' | 'Failed' | 'Pending';
}

export interface StudentFeesData {
  totalFee: number;
  totalPaid: number;
  totalPending: number;
  nextDueDate: string | null;
  installments: FeeInstallment[];
  history: FeeTransaction[];
}
