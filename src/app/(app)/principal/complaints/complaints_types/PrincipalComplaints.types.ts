export type PrincipalComplaintSource = 'Student' | 'Parent' | 'Staff';
export type PrincipalComplaintPriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type PrincipalComplaintStatus = 'New' | 'In Progress' | 'Resolved' | 'Escalated' | 'Closed';

export interface PrincipalComplaint {
  id: string;
  source: PrincipalComplaintSource;
  submittedBy: string; // Name of student/parent/staff
  subject: string;
  description: string;
  dateSubmitted: string;
  priority: PrincipalComplaintPriority;
  status: PrincipalComplaintStatus;
  assignedTo?: string;
  resolution?: string;
  escalationNotes?: string;
  historyLog: {
    date: string;
    action: string;
    by: string;
  }[];
}
