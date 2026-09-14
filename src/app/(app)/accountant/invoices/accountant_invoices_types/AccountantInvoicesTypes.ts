export type InvoiceStatus = 'Paid' | 'Unpaid' | 'Overdue' | 'Cancelled';

export interface FeeLineItem {
  id: string;
  description: string;
  amount: number;
}

export interface InvoiceRecord {
  id: string;
  invoiceNo: string;
  studentId: string;
  studentName: string;
  className: string;
  issueDate: string;
  dueDate: string;
  feeDetails: FeeLineItem[];
  subTotal: number;
  taxAmount: number; // e.g. 18% GST if applicable, often 0 for schools
  totalAmount: number;
  status: InvoiceStatus;
  notes?: string;
}
