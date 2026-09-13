export type PrincipalApprovalCategory = 
  | 'Admission' 
  | 'Leave' 
  | 'Marks/Result' 
  | 'Attendance Correction' 
  | 'Student Transfer' 
  | 'TC' 
  | 'Certificate' 
  | 'Discipline Action' 
  | 'Event' 
  | 'Fee Concession' 
  | 'Refund' 
  | 'Purchase/Expense';

export type PrincipalApprovalStatus = 'Pending' | 'Approved' | 'Rejected';

export interface PrincipalApprovalRequest {
  id: string;
  category: PrincipalApprovalCategory;
  title: string;
  requestedBy: string; // Name and Role
  dateRequested: string;
  description: string;
  amount?: string; // Used for Fee Concession, Refund, Purchase
  attachments?: string[]; // E.g., 'Medical_Certificate.pdf'
  status: PrincipalApprovalStatus;
  priority: 'High' | 'Medium' | 'Low';
}

export interface PrincipalApprovalSummary {
  category: PrincipalApprovalCategory;
  pendingCount: number;
  iconName: string;
  colorClass: string;
}
