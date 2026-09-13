export interface PrincipalAttendanceOverview {
  overallStudentAttendance: number;
  overallStaffAttendance: number;
  totalStudentsPresent: number;
  totalStudentsAbsent: number;
  totalStudentsLate: number;
  totalStaffPresent: number;
  totalStaffAbsent: number;
  totalStaffLate: number;
  alerts: PrincipalAttendanceAlert[];
}

export interface PrincipalAttendanceAlert {
  id: string;
  type: 'Low Attendance' | 'Mass Absence' | 'Habitual Late';
  message: string;
  severity: 'high' | 'medium';
  date: string;
}

export interface PrincipalStudentAttendanceClass {
  id: string;
  className: string;
  section: string;
  classTeacher: string;
  totalStudents: number;
  present: number;
  absent: number;
  late: number;
  attendancePercentage: number;
}

export interface PrincipalStaffAttendanceRecord {
  id: string;
  staffName: string;
  department: string;
  role: string;
  status: 'Present' | 'Absent' | 'Late' | 'Half Day';
  checkInTime?: string;
  checkOutTime?: string;
}

export interface PrincipalAttendanceCorrectionReq {
  id: string;
  requestedBy: string; // Teacher name
  dateOfRecord: string;
  studentName: string;
  className: string;
  originalStatus: 'Absent' | 'Present' | 'Late';
  requestedStatus: 'Absent' | 'Present' | 'Late';
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}
