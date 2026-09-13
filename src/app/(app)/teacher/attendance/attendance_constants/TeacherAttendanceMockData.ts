export const TEACHER_ATTENDANCE_CLASSES = [
  { id: 'CLS-10A', name: 'Class 10 A', type: 'Daily (Homeroom)', strength: 40, status: 'Pending' },
  { id: 'CLS-9B', name: 'Class 9 B', type: 'Period-wise (Math)', strength: 38, status: 'Submitted' },
];

export const TEACHER_ATTENDANCE_STUDENTS = [
  { id: 'STU-01', rollNo: 1, name: 'Aarav Sharma', status: 'Present', attendancePercentage: 95 },
  { id: 'STU-02', rollNo: 2, name: 'Aditi Verma', status: 'Present', attendancePercentage: 92 },
  { id: 'STU-03', rollNo: 3, name: 'Kabir Das', status: 'Absent', attendancePercentage: 68 }, // Low attendance alert
  { id: 'STU-04', rollNo: 4, name: 'Neha Gupta', status: 'Late', attendancePercentage: 88 },
  { id: 'STU-05', rollNo: 5, name: 'Rahul Singh', status: 'Leave', attendancePercentage: 72 }, // Warning
];

export const TEACHER_ATTENDANCE_HISTORY = [
  { id: 'HIST-01', date: '2023-10-15', class: 'Class 10 A', type: 'Daily', present: 36, absent: 2, late: 1, leave: 1, submittedAt: '08:15 AM' },
  { id: 'HIST-02', date: '2023-10-14', class: 'Class 10 A', type: 'Daily', present: 38, absent: 1, late: 0, leave: 1, submittedAt: '08:10 AM' },
  { id: 'HIST-03', date: '2023-10-15', class: 'Class 9 B', type: 'Period-wise', present: 35, absent: 3, late: 0, leave: 0, submittedAt: '10:45 AM' },
];

export const LOW_ATTENDANCE_ALERTS = [
  { studentId: 'STU-03', name: 'Kabir Das', class: 'Class 10 A', percentage: 68, threshold: 75 },
  { studentId: 'STU-05', name: 'Rahul Singh', class: 'Class 10 A', percentage: 72, threshold: 75 },
];
