import {
  PrincipalAttendanceOverview,
  PrincipalStudentAttendanceClass,
  PrincipalStaffAttendanceRecord,
  PrincipalAttendanceCorrectionReq
} from '../attendance_types/PrincipalAttendance.types';

export const PRINCIPAL_MOCK_ATTENDANCE_OVERVIEW: PrincipalAttendanceOverview = {
  overallStudentAttendance: 92.5,
  overallStaffAttendance: 95.0,
  totalStudentsPresent: 1850,
  totalStudentsAbsent: 120,
  totalStudentsLate: 30,
  totalStaffPresent: 142,
  totalStaffAbsent: 5,
  totalStaffLate: 3,
  alerts: [
    { id: 'AL-1', type: 'Low Attendance', message: 'Class 9-B attendance dropped below 80% today.', severity: 'high', date: 'Today' },
    { id: 'AL-2', type: 'Habitual Late', message: '3 staff members arrived late more than twice this week.', severity: 'medium', date: 'Yesterday' }
  ]
};

export const PRINCIPAL_MOCK_STUDENT_ATTENDANCE: PrincipalStudentAttendanceClass[] = [
  { id: 'CLS-10A', className: 'Class 10', section: 'A', classTeacher: 'Mr. Arvind Kumar', totalStudents: 40, present: 38, absent: 1, late: 1, attendancePercentage: 95.0 },
  { id: 'CLS-10B', className: 'Class 10', section: 'B', classTeacher: 'Ms. Sunita Rao', totalStudents: 40, present: 39, absent: 1, late: 0, attendancePercentage: 97.5 },
  { id: 'CLS-9A', className: 'Class 9', section: 'A', classTeacher: 'Ms. Rekha', totalStudents: 35, present: 25, absent: 8, late: 2, attendancePercentage: 71.4 },
];

export const PRINCIPAL_MOCK_STAFF_ATTENDANCE: PrincipalStaffAttendanceRecord[] = [
  { id: 'STF-1', staffName: 'Dr. R. Sharma', department: 'Science', role: 'HOD', status: 'Present', checkInTime: '07:45 AM' },
  { id: 'STF-2', staffName: 'Mr. V. Raman', department: 'Math', role: 'Senior Teacher', status: 'Absent' },
  { id: 'STF-3', staffName: 'Ms. Anita Desai', department: 'Languages', role: 'HOD', status: 'Late', checkInTime: '08:30 AM' },
];

export const PRINCIPAL_MOCK_CORRECTION_REQS: PrincipalAttendanceCorrectionReq[] = [
  {
    id: 'REQ-1',
    requestedBy: 'Mr. Arvind Kumar',
    dateOfRecord: '2024-10-14',
    studentName: 'Rahul Verma',
    className: 'Class 10-A',
    originalStatus: 'Absent',
    requestedStatus: 'Present',
    reason: 'Student arrived late after attendance was taken.',
    status: 'Pending'
  },
  {
    id: 'REQ-2',
    requestedBy: 'Ms. Sunita Rao',
    dateOfRecord: '2024-10-14',
    studentName: 'Neha Singh',
    className: 'Class 10-B',
    originalStatus: 'Absent',
    requestedStatus: 'Late',
    reason: 'Medical reason, arrived in second period.',
    status: 'Pending'
  }
];
