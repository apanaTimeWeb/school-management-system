export type PaymentType = 'Full' | 'Partial' | 'Installment' | 'Advance';
export type PaymentCategory = 'Offline' | 'Online';
export type OfflineMethod = 'Cash' | 'Cheque' | 'Demand Draft';
export type OnlineMethod = 'UPI' | 'Card' | 'Bank Transfer';

export interface StudentSearchRecord {
  id: string;
  studentName: string;
  admissionNo: string;
  className: string;
  totalPending: number;
  installmentsPending: number;
}
