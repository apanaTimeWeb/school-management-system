export type OnlinePaymentStatus = 'Successful' | 'Failed' | 'Pending' | 'Cancelled' | 'Refunded';
export type ReconciliationStatus = 'Reconciled' | 'Mismatch' | 'Pending';

export interface OnlinePaymentRecord {
  id: string; // Internal Transaction ID
  gatewayTransactionId: string; // Razorpay/Stripe ID
  paymentReference: string; // Order ID or Invoice Ref
  studentName: string;
  admissionNo: string;
  amount: number;
  date: string;
  method: 'UPI' | 'Card' | 'NetBanking';
  status: OnlinePaymentStatus;
  reconciliationStatus: ReconciliationStatus;
  failureReason?: string; // If failed or cancelled
}
