export type AttendanceStatus = 'Present' | 'Absent' | 'Late' | 'Half Day' | 'Leave' | 'None';

export interface DailyAttendanceRecord {
  employeeId: string;
  name: string;
  department: string;
  designation: string;
  status: AttendanceStatus;
  inTime?: string;
  outTime?: string;
  isBiometric: boolean;
  approvalStatus: 'Pending' | 'Approved' | 'Auto-Approved';
}

export interface MonthlyAttendanceRecord {
  employeeId: string;
  name: string;
  department: string;
  totalPresent: number;
  totalAbsent: number;
  totalLate: number;
  totalHalfDay: number;
  totalLeave: number;
  days: {
    [day: number]: AttendanceStatus; // e.g. { 1: 'Present', 2: 'Absent' }
  };
}

export interface FetchDailyParams {
  date: string;
  department?: string;
}

export interface FetchMonthlyParams {
  month: number; // 1-12
  year: number;
  department?: string;
}

export interface DailyResponse {
  success: boolean;
  data: DailyAttendanceRecord[];
}

export interface MonthlyResponse {
  success: boolean;
  data: MonthlyAttendanceRecord[];
}
