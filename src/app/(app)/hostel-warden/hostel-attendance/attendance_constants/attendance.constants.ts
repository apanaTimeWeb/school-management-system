import type { AttendanceRecord, AttendanceSummary } from '../attendance_types/attendance.types';

export const MOCK_ATTENDANCE_SUMMARY: AttendanceSummary = {
  date: new Date().toISOString().split('T')[0],
  type: 'Night',
  totalStudents: 150,
  present: 135,
  absent: 3,
  leave: 8,
  outing: 4
};

export const MOCK_ATTENDANCE_RECORDS: AttendanceRecord[] = [
  {
    id: 'ATT-001',
    date: new Date().toISOString().split('T')[0],
    type: 'Night',
    studentId: 'STU-1024',
    studentName: 'Amit Kumar',
    roomNumber: '101',
    bedNumber: 'A',
    status: 'Present',
    isBiometric: true,
    lateEntry: false,
    parentAlertSent: false
  },
  {
    id: 'ATT-002',
    date: new Date().toISOString().split('T')[0],
    type: 'Night',
    studentId: 'STU-1025',
    studentName: 'Sneha Patel',
    roomNumber: '205',
    bedNumber: 'B',
    status: 'Absent',
    isBiometric: false,
    lateEntry: false,
    parentAlertSent: true
  },
  {
    id: 'ATT-003',
    date: new Date().toISOString().split('T')[0],
    type: 'Night',
    studentId: 'STU-1055',
    studentName: 'Sanjay Dutt',
    roomNumber: '102',
    bedNumber: 'A',
    status: 'Present',
    isBiometric: true,
    lateEntry: true,
    lateEntryTime: '22:15',
    parentAlertSent: false
  },
  {
    id: 'ATT-004',
    date: new Date().toISOString().split('T')[0],
    type: 'Night',
    studentId: 'STU-1056',
    studentName: 'Priya Sharma',
    roomNumber: '103',
    bedNumber: 'C',
    status: 'Leave',
    isBiometric: false,
    lateEntry: false,
    parentAlertSent: false
  },
  {
    id: 'ATT-005',
    date: new Date().toISOString().split('T')[0],
    type: 'Night',
    studentId: 'STU-1059',
    studentName: 'Varun Dhawan',
    roomNumber: '305',
    bedNumber: 'D',
    status: 'Outing',
    isBiometric: false,
    lateEntry: false,
    parentAlertSent: false
  }
];
