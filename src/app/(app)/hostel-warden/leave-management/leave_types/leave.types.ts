export type LeaveType = 'Casual Leave' | 'Sick Leave' | 'Earned Leave' | 'Emergency Leave';
export type LeaveStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export type LeaveRoleContext = 'WARDEN_SELF' | 'STAFF_REQUEST';

export interface LeaveRequest {
  id: string;
  applicantName: string;
  applicantRole: string; // "Warden" or "Cleaner", "Guard"
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  reason: string;
  status: LeaveStatus;
  appliedOn: string;
  context: LeaveRoleContext;
  reviewedBy?: string; // e.g. "Admin" if Warden's leave, or "Warden" if staff leave
  remarks?: string;
}
