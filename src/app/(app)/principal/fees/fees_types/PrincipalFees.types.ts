export interface PrincipalFeeSummary {
  totalExpected: number;
  totalCollected: number;
  totalOutstanding: number;
  collectionPercentage: number;
}

export interface PrincipalClassFeeCollection {
  classId: string;
  className: string;
  expected: number;
  collected: number;
  outstanding: number;
  percentage: number;
}

export interface PrincipalFeeDefaulter {
  id: string;
  studentId: string;
  studentName: string;
  classAndSection: string;
  amountDue: number;
  dueDate: string;
  monthsPending: number;
  contactNumber: string;
}

export type PrincipalFeeRequestType = 'Concession' | 'Scholarship' | 'Refund';
export type PrincipalFeeRequestStatus = 'Pending' | 'Approved' | 'Rejected';

export interface PrincipalFeeApprovalRequest {
  id: string;
  studentId: string;
  studentName: string;
  classAndSection: string;
  type: PrincipalFeeRequestType;
  amountRequested: number;
  reason: string;
  dateSubmitted: string;
  status: PrincipalFeeRequestStatus;
  urgency: 'Normal' | 'High';
}
