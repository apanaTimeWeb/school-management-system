export interface PrincipalLeaveRequest {
  id: string;
  applicantName: string;
  applicantId: string;
  applicantType: 'Student' | 'Teacher' | 'Staff';
  departmentOrClass: string;
  leaveType: 'Sick Leave' | 'Casual Leave' | 'Maternity Leave' | 'Emergency' | 'Other';
  startDate: string;
  endDate: string;
  totalDays: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedOn: string;
  approvedBy?: string;
}

export interface PrincipalLeaveBalance {
  id: string;
  staffName: string;
  staffId: string;
  role: 'Teacher' | 'Staff';
  totalLeaves: number;
  leavesTaken: number;
  leavesRemaining: number;
}
