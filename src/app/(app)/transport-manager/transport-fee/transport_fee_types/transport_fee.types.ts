export type FeeStatus = 'PAID' | 'PARTIAL' | 'OVERDUE' | 'UPCOMING';

export interface TransportPaymentHistory {
  receiptNo: string;
  date: string;
  amountPaid: number;
  paymentMethod: 'CASH' | 'ONLINE' | 'CHEQUE';
  remarks: string | null;
}

export interface TransportFeeRecord {
  id: string; // Internal mapping ID
  studentId: string;
  studentName: string;
  classSection: string;
  
  routeId: string;
  routeName: string;
  pickupPoint: string;
  
  // Financials
  totalFee: number;     // e.g. Yearly or Route-wise base fee
  concession: number;   // e.g. Sibling discount
  fine: number;         // Late fees
  netPayable: number;   // (totalFee - concession) + fine
  
  paidAmount: number;
  outstandingAmount: number;
  
  status: FeeStatus;
  dueDate: string | null; // Next installment due
  
  paymentHistory: TransportPaymentHistory[];
}
