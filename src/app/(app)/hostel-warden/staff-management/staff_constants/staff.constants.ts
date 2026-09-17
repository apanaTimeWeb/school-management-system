import type { HostelStaff } from '../staff_types/staff.types';

export const MOCK_STAFF: HostelStaff[] = [
  {
    id: 'STF-001',
    name: 'Ramesh Kumar',
    role: 'Electrician',
    shift: 'Morning',
    contactNumber: '+91 9876543210',
    assignedArea: 'Block A & B (All Floors)',
    status: 'ACTIVE',
    todayAttendance: 'Present',
    complaintsCount: 0
  },
  {
    id: 'STF-002',
    name: 'Suresh Patel',
    role: 'Guard',
    shift: 'Night',
    contactNumber: '+91 9876543211',
    assignedArea: 'Main Gate & Perimeter',
    status: 'ACTIVE',
    todayAttendance: 'Present',
    complaintsCount: 1
  },
  {
    id: 'STF-003',
    name: 'Sunita Devi',
    role: 'Cleaner',
    shift: 'Morning',
    contactNumber: '+91 9876543212',
    assignedArea: 'Block A - Ground Floor',
    status: 'ACTIVE',
    todayAttendance: 'Absent',
    complaintsCount: 3
  },
  {
    id: 'STF-004',
    name: 'Rajinder Singh',
    role: 'Mess Staff',
    shift: 'Afternoon',
    contactNumber: '+91 9876543213',
    assignedArea: 'Main Dining Hall',
    status: 'ACTIVE',
    todayAttendance: 'Present',
    complaintsCount: 0
  },
  {
    id: 'STF-005',
    name: 'Kishore',
    role: 'Plumber',
    shift: 'Morning',
    contactNumber: '+91 9876543214',
    assignedArea: 'Block B (All Floors)',
    status: 'INACTIVE',
    todayAttendance: 'Leave',
    complaintsCount: 0
  }
];
