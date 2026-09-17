import type { GatePassRequest } from '../outing_types/outing.types';

export const MOCK_GATE_PASSES: GatePassRequest[] = [
  {
    id: 'GP-1001',
    studentName: 'Amit Kumar',
    studentId: 'STU-1024',
    roomNumber: '101',
    outingType: 'Local Outing',
    reason: 'Going to the local market for stationery.',
    requestedExitTime: '2023-11-20T16:00:00Z',
    expectedReturnTime: '2023-11-20T19:00:00Z',
    guardianApprovalRequired: false,
    guardianApprovalStatus: 'NA',
    wardenApprovalStatus: 'PENDING',
    status: 'PENDING_WARDEN',
    isOvernight: false
  },
  {
    id: 'GP-1002',
    studentName: 'Sneha Patel',
    studentId: 'STU-1025',
    roomNumber: '205',
    outingType: 'Home Visit',
    reason: 'Attending cousin\'s wedding in hometown.',
    requestedExitTime: '2023-11-21T08:00:00Z',
    expectedReturnTime: '2023-11-23T18:00:00Z',
    guardianApprovalRequired: true,
    guardianApprovalStatus: 'APPROVED',
    wardenApprovalStatus: 'APPROVED',
    status: 'APPROVED',
    isOvernight: true
  },
  {
    id: 'GP-1003',
    studentName: 'Rahul Singh',
    studentId: 'STU-0998',
    roomNumber: '101',
    outingType: 'Medical Emergency',
    reason: 'Dental appointment at City Hospital.',
    requestedExitTime: '2023-11-20T10:00:00Z',
    expectedReturnTime: '2023-11-20T14:00:00Z',
    actualExitTime: '2023-11-20T10:15:00Z',
    guardianApprovalRequired: true,
    guardianApprovalStatus: 'PENDING',
    wardenApprovalStatus: 'APPROVED',
    status: 'ACTIVE_OUT',
    isOvernight: false
  },
  {
    id: 'GP-1004',
    studentName: 'Priya Sharma',
    studentId: 'STU-1056',
    roomNumber: '103',
    outingType: 'Local Outing',
    reason: 'Study group at Central Library.',
    requestedExitTime: '2023-11-19T14:00:00Z',
    expectedReturnTime: '2023-11-19T18:00:00Z',
    actualExitTime: '2023-11-19T14:10:00Z',
    actualReturnTime: '2023-11-19T19:30:00Z', // Returned late
    guardianApprovalRequired: false,
    guardianApprovalStatus: 'NA',
    wardenApprovalStatus: 'APPROVED',
    status: 'LATE',
    isOvernight: false
  },
  {
    id: 'GP-1005',
    studentName: 'Sanjay Dutt',
    studentId: 'STU-1055',
    roomNumber: '102',
    outingType: 'Overnight Leave Pass',
    reason: 'Participating in inter-state sports tournament.',
    requestedExitTime: '2023-11-18T06:00:00Z',
    expectedReturnTime: '2023-11-19T20:00:00Z',
    actualExitTime: '2023-11-18T06:05:00Z',
    actualReturnTime: '2023-11-19T19:45:00Z',
    guardianApprovalRequired: true,
    guardianApprovalStatus: 'APPROVED',
    wardenApprovalStatus: 'APPROVED',
    status: 'RETURNED',
    isOvernight: true
  }
];
