import type { TransportAttendance } from '../transport_attendance_types/transport_attendance.types';

export const MOCK_TRANSPORT_ATTENDANCE: TransportAttendance[] = [
  {
    id: 'ATT-101',
    tripId: 'TRP-1001',
    date: new Date().toISOString().split('T')[0],
    studentId: 'STU-2051',
    studentName: 'Rohan Sharma',
    classSection: 'Class 4 - B',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    stopName: 'Main Road Checkpost',
    status: 'PRESENT',
    boardTime: '06:55 AM',
    dropTime: '07:40 AM',
    authorizedPickupBy: 'School Staff',
    remarks: 'Dropped safely inside campus.',
    notificationSent: true
  },
  {
    id: 'ATT-102',
    tripId: 'TRP-1001',
    date: new Date().toISOString().split('T')[0],
    studentId: 'STU-1092',
    studentName: 'Neha Gupta',
    classSection: 'Class 9 - A',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    stopName: 'Market Square',
    status: 'MISSED_BUS',
    boardTime: null,
    dropTime: null,
    authorizedPickupBy: null,
    remarks: 'Student did not arrive at stop on time. Bus waited 2 mins.',
    notificationSent: true
  },
  {
    id: 'ATT-103',
    tripId: 'TRP-1002',
    date: new Date().toISOString().split('T')[0],
    studentId: 'STU-3321',
    studentName: 'Aarav Patel',
    classSection: 'Class 2 - C',
    routeId: 'RT-002',
    routeName: 'Route R-02 (North Campus)',
    stopName: 'Science Block Gate',
    status: 'PRESENT',
    boardTime: '07:10 AM',
    dropTime: '07:55 AM',
    authorizedPickupBy: 'Rahul Patel (Father)',
    remarks: null,
    notificationSent: true
  },
  {
    id: 'ATT-104',
    tripId: 'TRP-1002',
    date: new Date().toISOString().split('T')[0],
    studentId: 'STU-4410',
    studentName: 'Priya Desai',
    classSection: 'Class 11 - Sci',
    routeId: 'RT-002',
    routeName: 'Route R-02 (North Campus)',
    stopName: 'Library Stop',
    status: 'ABSENT',
    boardTime: null,
    dropTime: null,
    authorizedPickupBy: null,
    remarks: 'Parent marked absent via app.',
    notificationSent: false
  },
  {
    id: 'ATT-105',
    tripId: 'TRP-1003',
    date: new Date().toISOString().split('T')[0],
    studentId: 'STU-2051',
    studentName: 'Rohan Sharma',
    classSection: 'Class 4 - B',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    stopName: 'Main Road Checkpost',
    status: 'NOT_BOARDED',
    boardTime: null,
    dropTime: null,
    authorizedPickupBy: null,
    remarks: 'Boarding pending for afternoon trip.',
    notificationSent: false
  }
];

export const ATTENDANCE_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  PRESENT: { bg: '#064E3B', text: '#22C55E', label: 'Present' }, // Emerald
  ABSENT: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Absent' }, // Gray
  MISSED_BUS: { bg: '#451A03', text: '#F59E0B', label: 'Missed Bus' }, // Amber
  NOT_BOARDED: { bg: '#1E3A5F', text: '#3B82F6', label: 'Not Boarded' }, // Blue
};
