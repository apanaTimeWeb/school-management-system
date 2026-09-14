export type ReconCategory = 'Gateway' | 'Bank' | 'Cash';
export type ReconStatus = 'Matched' | 'Unmatched' | 'Duplicate' | 'Pending';

export interface ReconRecord {
  id: string; // ERP ID
  date: string;
  category: ReconCategory;
  erpAmount: number;
  sourceAmount: number; // e.g., amount in Bank Statement or Razorpay Dashboard
  variance: number; // sourceAmount - erpAmount
  sourceReference: string; // UTR, Gateway Txn ID
  payer: string;
  status: ReconStatus;
  reconciledBy?: string;
  reconciledAt?: string;
  remarks?: string;
}

export interface ReconSummary {
  matchedCount: number;
  unmatchedCount: number;
  duplicateCount: number;
  totalVolume: number;
}
