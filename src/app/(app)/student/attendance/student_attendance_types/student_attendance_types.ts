export type AttendanceStatus = 'Present' | 'Absent' | 'Late' | 'Leave' | 'Holiday' | 'Not_Marked';

export interface DailyAttendanceRecord {
  id: string;
  date: string; // YYYY-MM-DD
  status: AttendanceStatus;
  remarks?: string;
}

export interface SubjectAttendance {
  subjectId: string;
  subjectName: string;
  totalClasses: number;
  attendedClasses: number;
  percentage: number;
}

export interface AttendanceMonthlySummary {
  month: string;
  totalWorkingDays: number;
  present: number;
  absent: number;
  late: number;
  leave: number;
}

export interface StudentAttendanceData {
  overallPercentage: number;
  totalWorkingDays: number;
  totalPresent: number;
  totalAbsent: number;
  totalLate: number;
  totalLeave: number;
  isLowAttendance: boolean; // Triggers alert if overallPercentage < threshold
  calendarRecords: DailyAttendanceRecord[]; // For calendar view
  subjectWise: SubjectAttendance[];
  history: AttendanceMonthlySummary[];
}
