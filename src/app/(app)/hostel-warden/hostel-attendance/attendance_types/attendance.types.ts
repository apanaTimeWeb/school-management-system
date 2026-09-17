export type AttendanceType = 'Morning' | 'Evening' | 'Night';
export type AttendanceStatus = 'Present' | 'Absent' | 'Leave' | 'Outing';

export interface AttendanceRecord {
  id: string;
  date: string;
  type: AttendanceType;
  studentId: string;
  studentName: string;
  roomNumber: string;
  bedNumber: string;
  status: AttendanceStatus;
  isBiometric: boolean;
  lateEntry: boolean;
  lateEntryTime?: string;
  parentAlertSent: boolean;
}

export interface AttendanceSummary {
  date: string;
  type: AttendanceType;
  totalStudents: number;
  present: number;
  absent: number;
  leave: number;
  outing: number;
}
