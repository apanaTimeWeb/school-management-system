export type ConcessionType = 'Scholarship' | 'Discount' | 'Staff Concession' | 'Other';
export type ConcessionStatus = 'Pending Approval' | 'Approved' | 'Rejected';

export interface ConcessionRecord {
  id: string; // Request ID
  studentName: string;
  admissionNo: string;
  className: string;
  concessionType: ConcessionType;
  amount: number;
  requestedBy: string;
  requestedDate: string;
  reason: string;
  status: ConcessionStatus;
  approvedBy?: string;
  approvalDate?: string;
  remarks?: string;
}
