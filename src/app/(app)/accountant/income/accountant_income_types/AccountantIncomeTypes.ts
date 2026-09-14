export type IncomeCategory = 
  | 'Admission Fees'
  | 'Tuition Fees'
  | 'Transport Fees'
  | 'Hostel Fees'
  | 'Library Fine'
  | 'Examination Fees'
  | 'Other School Receipts'
  | 'Miscellaneous Income';

export type IncomeStatus = 'Realized' | 'Pending Clearance' | 'Bounced' | 'Refunded';

export interface IncomeRecord {
  id: string; // Receipt ID e.g., REC-2024-001
  category: IncomeCategory;
  source: string; // Student Name or Third Party
  referenceNo?: string; // Admission No or invoice ref
  amount: number;
  paymentMethod: string;
  transactionId?: string;
  incomeDate: string;
  status: IncomeStatus;
  receivedBy: string;
  remarks?: string;
}
