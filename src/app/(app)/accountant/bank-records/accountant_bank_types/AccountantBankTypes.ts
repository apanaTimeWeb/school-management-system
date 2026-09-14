export type BankTransactionType = 'Cheque' | 'Bank Transfer (NEFT/RTGS)' | 'UPI' | 'Direct Deposit';
export type BankTransactionStatus = 'Pending Clearance' | 'Cleared' | 'Bounced' | 'Reconciled';

export interface BankTransactionRecord {
  id: string; // Internal Txn ID
  date: string;
  type: BankTransactionType;
  bankName: string; // e.g. HDFC Bank
  referenceNo: string; // Cheque No or UTR
  payer: string; // Student or Vendor name
  amount: number;
  status: BankTransactionStatus;
  clearanceDate?: string; // Date when it was cleared or bounced
  remarks?: string;
}
