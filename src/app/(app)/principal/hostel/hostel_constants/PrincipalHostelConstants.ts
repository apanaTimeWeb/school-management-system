import { PrincipalHostelRoom, PrincipalHostelStudent, PrincipalHostelIncident } from '../hostel_types/PrincipalHostel.types';

export const PRINCIPAL_MOCK_HOSTEL_ROOMS: PrincipalHostelRoom[] = [
  {
    id: 'RM-A-101',
    roomNumber: '101',
    block: 'Block A (Boys)',
    floor: 1,
    capacity: 4,
    occupied: 4,
    status: 'Full',
    wardenName: 'Mr. Rakesh Singh'
  },
  {
    id: 'RM-A-102',
    roomNumber: '102',
    block: 'Block A (Boys)',
    floor: 1,
    capacity: 4,
    occupied: 2,
    status: 'Available',
    wardenName: 'Mr. Rakesh Singh'
  },
  {
    id: 'RM-B-205',
    roomNumber: '205',
    block: 'Block B (Girls)',
    floor: 2,
    capacity: 3,
    occupied: 3,
    status: 'Full',
    wardenName: 'Mrs. Geeta Sharma'
  },
  {
    id: 'RM-C-301',
    roomNumber: '301',
    block: 'Block C (Boys)',
    floor: 3,
    capacity: 2,
    occupied: 0,
    status: 'Maintenance',
    wardenName: 'Mr. Anil Kumar'
  }
];

export const PRINCIPAL_MOCK_HOSTEL_STUDENTS: PrincipalHostelStudent[] = [
  {
    id: 'HST-001',
    studentId: 'STU-1122',
    studentName: 'Aarav Sharma',
    classAndSection: '10-A',
    roomNumber: '101',
    block: 'Block A (Boys)',
    todayAttendance: 'Present'
  },
  {
    id: 'HST-002',
    studentId: 'STU-1300',
    studentName: 'Rohan Verma',
    classAndSection: '12-B',
    roomNumber: '102',
    block: 'Block A (Boys)',
    todayAttendance: 'Out Pass',
    outPassReturnTime: '20:00 PM'
  },
  {
    id: 'HST-003',
    studentId: 'STU-0988',
    studentName: 'Sneha Patil',
    classAndSection: '11-C',
    roomNumber: '205',
    block: 'Block B (Girls)',
    todayAttendance: 'On Leave'
  }
];

export const PRINCIPAL_MOCK_HOSTEL_INCIDENTS: PrincipalHostelIncident[] = [
  {
    id: 'HI-001',
    title: 'AC Not Cooling',
    date: '2023-11-20',
    block: 'Block A (Boys)',
    roomNumber: '102',
    reportedBy: 'Aarav Sharma',
    category: 'Maintenance',
    description: 'The air conditioner in room 102 has stopped working since last night.',
    status: 'Open'
  },
  {
    id: 'HI-002',
    title: 'Late Night Disturbance',
    date: '2023-11-18',
    block: 'Block B (Girls)',
    roomNumber: '205',
    reportedBy: 'Mrs. Geeta Sharma (Warden)',
    category: 'Discipline',
    description: 'Students were found playing loud music after 11 PM curfews.',
    status: 'Resolved',
    resolutionNote: 'Warning issued to the students. Confiscated speakers for 1 week.'
  }
];
