export type RefundEligibility = 'Eligible' | 'Not Eligible' | 'Under Review';
export type RefundStatus = 'Pending Approval' | 'Approved' | 'Rejected' | 'Processed';

export interface RefundRecord {
  id: string; // Request ID
  studentName: string;
  admissionNo: string;
  className: string;
  amount: number;
  reason: string;
  eligibility: RefundEligibility;
  status: RefundStatus;
  requestedDate: string;
  approvedBy?: string;
  approvalDate?: string;
  processedDate?: string;
  refundReference?: string; // TXN ID once processed
  remarks?: string;
}
