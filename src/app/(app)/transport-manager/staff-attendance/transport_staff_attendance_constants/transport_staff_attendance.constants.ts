import type { TransportStaffAttendance } from '../transport_staff_attendance_types/transport_staff_attendance.types';

export const MOCK_STAFF_ATTENDANCE: TransportStaffAttendance[] = [
  {
    id: 'S-ATT-1001',
    date: new Date().toISOString().split('T')[0],
    staffId: 'EMP-T-101',
    staffName: 'Rajesh Kumar',
    role: 'DRIVER',
    contactNumber: '9876543210',
    status: 'PRESENT',
    shift: 'FULL_DAY',
    checkInTime: '06:00 AM',
    checkOutTime: null,
    assignedVehicle: 'MH-12-AB-1234',
    leaveReason: null,
    remarks: 'Arrived on time.'
  },
  {
    id: 'S-ATT-1002',
    date: new Date().toISOString().split('T')[0],
    staffId: 'EMP-T-102',
    staffName: 'Sanjay Verma',
    role: 'CONDUCTOR',
    contactNumber: '9876543211',
    status: 'PRESENT',
    shift: 'FULL_DAY',
    checkInTime: '06:15 AM',
    checkOutTime: null,
    assignedVehicle: 'MH-12-AB-1234',
    leaveReason: null,
    remarks: null
  },
  {
    id: 'S-ATT-1003',
    date: new Date().toISOString().split('T')[0],
    staffId: 'EMP-T-103',
    staffName: 'Suresh Patil',
    role: 'DRIVER',
    contactNumber: '9876543222',
    status: 'HALF_DAY',
    shift: 'MORNING_ONLY',
    checkInTime: '06:30 AM',
    checkOutTime: '01:00 PM',
    assignedVehicle: 'MH-12-CD-5678',
    leaveReason: 'Personal emergency in the afternoon.',
    remarks: 'Approved by Transport Admin.'
  },
  {
    id: 'S-ATT-1004',
    date: new Date().toISOString().split('T')[0],
    staffId: 'EMP-T-104',
    staffName: 'Anil Desai',
    role: 'CONDUCTOR',
    contactNumber: '9876543333',
    status: 'ON_LEAVE',
    shift: 'FULL_DAY',
    checkInTime: null,
    checkOutTime: null,
    assignedVehicle: 'MH-12-EF-9012',
    leaveReason: 'Sick leave (Fever)',
    remarks: 'Substitute conductor assigned to Vehicle MH-12-EF-9012.'
  },
  {
    id: 'S-ATT-1005',
    date: new Date().toISOString().split('T')[0],
    staffId: 'EMP-T-105',
    staffName: 'Prakash M',
    role: 'DRIVER',
    contactNumber: '9876543444',
    status: 'ABSENT',
    shift: 'FULL_DAY',
    checkInTime: null,
    checkOutTime: null,
    assignedVehicle: 'MH-12-GH-3456',
    leaveReason: null,
    remarks: 'No show. Uninformed.'
  }
];

export const STAFF_ATTENDANCE_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  PRESENT: { bg: '#064E3B', text: '#22C55E', label: 'Present' }, // Emerald
  ABSENT: { bg: '#450A0A', text: '#EF4444', label: 'Absent' }, // Red
  ON_LEAVE: { bg: '#451A03', text: '#F59E0B', label: 'On Leave' }, // Amber
  HALF_DAY: { bg: '#1E3A5F', text: '#3B82F6', label: 'Half Day' }, // Blue
};

export const SHIFT_LABELS: Record<string, string> = {
  FULL_DAY: 'Full Day (Morning + Evening)',
  MORNING_ONLY: 'Morning Shift Only',
  EVENING_ONLY: 'Evening Shift Only'
};
