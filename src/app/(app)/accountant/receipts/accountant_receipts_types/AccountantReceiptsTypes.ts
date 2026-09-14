export type ReceiptStatus = 'Valid' | 'Voided';

export interface ReceiptRecord {
  id: string; // The Receipt Number (Auto Generated typically)
  studentName: string;
  admissionNo: string;
  className: string;
  date: string;
  amount: number;
  paymentMethod: 'Cash' | 'UPI' | 'Card' | 'Bank Transfer';
  transactionRef: string;
  status: ReceiptStatus;
  voidReason?: string;
  voidedBy?: string;
}
