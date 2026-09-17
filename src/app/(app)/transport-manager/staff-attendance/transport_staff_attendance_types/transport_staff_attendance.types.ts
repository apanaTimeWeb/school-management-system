export type StaffRole = 'DRIVER' | 'CONDUCTOR';
export type StaffAttendanceStatus = 'PRESENT' | 'ABSENT' | 'ON_LEAVE' | 'HALF_DAY';
export type StaffShift = 'MORNING_ONLY' | 'EVENING_ONLY' | 'FULL_DAY';

export interface TransportStaffAttendance {
  id: string;
  date: string;
  staffId: string;
  staffName: string;
  role: StaffRole;
  contactNumber: string;
  
  status: StaffAttendanceStatus;
  shift: StaffShift;
  
  checkInTime: string | null;
  checkOutTime: string | null;
  
  assignedVehicle: string | null; // e.g. "MH-12-AB-1234"
  leaveReason: string | null;
  remarks: string | null;
}

export interface TransportStaffAttendanceFormData {
  date: string;
  staffId: string;
  staffName: string;
  role: StaffRole;
  status: StaffAttendanceStatus;
  shift: StaffShift;
  checkInTime: string;
  checkOutTime: string;
  leaveReason: string;
  remarks: string;
}
