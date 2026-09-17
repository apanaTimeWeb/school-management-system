export type StaffRole = 'Cleaner' | 'Guard' | 'Mess Staff' | 'Electrician' | 'Plumber' | 'Other';
export type StaffShift = 'Morning' | 'Afternoon' | 'Night';
export type AttendanceStatus = 'Present' | 'Absent' | 'Leave';

export interface HostelStaff {
  id: string;
  name: string;
  role: StaffRole;
  shift: StaffShift;
  contactNumber: string;
  assignedArea: string; // e.g. "Block A - Ground Floor"
  status: 'ACTIVE' | 'INACTIVE';
  todayAttendance: AttendanceStatus;
  complaintsCount: number;
}
