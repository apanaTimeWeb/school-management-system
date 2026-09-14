export interface TransactionRecord {
  id: string;
  studentName: string;
  className: string;
  amount: number;
  method: 'Cash' | 'UPI' | 'Card' | 'Bank';
  status: 'Paid' | 'Failed' | 'Pending';
  time: string;
}

export interface DefaulterRecord {
  id: string;
  studentName: string;
  className: string;
  pendingAmount: number;
  dueDate: string;
  guardianPhone: string;
}

export interface PendingApproval {
  id: string;
  studentName: string;
  type: 'Refund' | 'Concession';
  amount: number;
  reason: string;
  requestedDate: string;
}

export interface DashboardKPIs {
  todaysCollection: number;
  monthlyCollection: number;
  totalOutstanding: number;
  overdueFees: number;
  trends: {
    today: number; // percentage diff
    monthly: number;
    outstanding: number;
    overdue: number;
  };
}
