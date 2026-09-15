export type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';
export type LeaveType = 'Sick Leave' | 'Casual Leave' | 'Emergency' | 'Other';

export interface LeaveRequest {
  id: string;
  leaveType: LeaveType;
  startDate: string; // e.g. YYYY-MM-DD
  endDate: string;
  reason: string;
  hasAttachment: boolean;
  status: LeaveStatus;
  appliedOn: string;
  approverRemarks?: string;
  // Simulating a simple workflow tracking
  workflowStep: 'Class Teacher' | 'Principal' | 'Completed';
}

export interface StudentLeaveData {
  leaveHistory: LeaveRequest[];
}
