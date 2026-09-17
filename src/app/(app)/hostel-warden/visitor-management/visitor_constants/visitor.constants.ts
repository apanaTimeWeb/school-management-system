import type { VisitorRecord } from '../visitor_types/visitor.types';

export const MOCK_VISITORS: VisitorRecord[] = [
  {
    id: 'VIS-2023-001',
    visitorName: 'Rajesh Kumar',
    relation: 'Father',
    studentName: 'Amit Kumar',
    studentId: 'STU-1024',
    roomNumber: '101',
    purpose: 'Dropping off winter clothes and snacks.',
    checkInTime: '2023-11-20T10:15:00Z',
    checkOutTime: '2023-11-20T11:45:00Z',
    idProofType: 'Aadhar Card',
    idProofNumber: 'XXXX-XXXX-1234',
    status: 'CHECKED_OUT'
  },
  {
    id: 'VIS-2023-002',
    visitorName: 'Meena Sharma',
    relation: 'Mother',
    studentName: 'Priya Sharma',
    studentId: 'STU-1056',
    roomNumber: '103',
    purpose: 'Regular weekend visit.',
    checkInTime: '2023-11-21T09:30:00Z',
    idProofType: 'Driving License',
    idProofNumber: 'DL-XXXX-5678',
    status: 'CHECKED_IN'
  },
  {
    id: 'VIS-2023-003',
    visitorName: 'Suresh Patel',
    relation: 'Uncle',
    studentName: 'Sneha Patel',
    studentId: 'STU-1025',
    roomNumber: '205',
    purpose: 'Local guardian visit, brought medicines.',
    checkInTime: '2023-11-21T11:00:00Z',
    idProofType: 'PAN Card',
    idProofNumber: 'ABCDE1234F',
    status: 'CHECKED_IN'
  }
];
