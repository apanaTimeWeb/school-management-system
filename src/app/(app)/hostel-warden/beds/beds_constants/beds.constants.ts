import type { Bed, RoomBedGroup } from '../beds_types/beds.types';

export const MOCK_BEDS: Bed[] = [
  // Room 101 Beds
  {
    id: 'BED-101-A',
    bedNumber: 'Bed A',
    roomId: 'RM-101',
    roomNumber: '101',
    building: 'Block A - Aryabhatta',
    studentId: 'STU-001',
    studentName: 'Amit Kumar',
    bedStatus: 'Occupied',
    assignmentDate: '2023-04-01',
    bedCondition: 'Good'
  },
  {
    id: 'BED-101-B',
    bedNumber: 'Bed B',
    roomId: 'RM-101',
    roomNumber: '101',
    building: 'Block A - Aryabhatta',
    studentId: 'STU-002',
    studentName: 'Rahul Singh',
    bedStatus: 'Occupied',
    assignmentDate: '2023-04-05',
    bedCondition: 'Good'
  },
  {
    id: 'BED-101-C',
    bedNumber: 'Bed C',
    roomId: 'RM-101',
    roomNumber: '101',
    building: 'Block A - Aryabhatta',
    studentId: 'STU-003',
    studentName: 'Vikram Mehta',
    bedStatus: 'Occupied',
    assignmentDate: '2023-04-10',
    bedCondition: 'Needs Repair'
  },
  {
    id: 'BED-101-D',
    bedNumber: 'Bed D',
    roomId: 'RM-101',
    roomNumber: '101',
    building: 'Block A - Aryabhatta',
    studentId: 'STU-004',
    studentName: 'Rohan Das',
    bedStatus: 'Occupied',
    assignmentDate: '2023-05-15',
    bedCondition: 'Good'
  },
  // Room 102 Beds
  {
    id: 'BED-102-A',
    bedNumber: 'Bed A',
    roomId: 'RM-102',
    roomNumber: '102',
    building: 'Block A - Aryabhatta',
    bedStatus: 'Available',
    vacatedDate: '2023-10-15',
    bedCondition: 'Good'
  },
  {
    id: 'BED-102-B',
    bedNumber: 'Bed B',
    roomId: 'RM-102',
    roomNumber: '102',
    building: 'Block A - Aryabhatta',
    studentId: 'STU-005',
    studentName: 'Saurabh Jain',
    bedStatus: 'Occupied',
    assignmentDate: '2023-06-01',
    bedCondition: 'Good'
  },
  {
    id: 'BED-102-C',
    bedNumber: 'Bed C',
    roomId: 'RM-102',
    roomNumber: '102',
    building: 'Block A - Aryabhatta',
    bedStatus: 'Maintenance',
    bedCondition: 'Damaged'
  },
  {
    id: 'BED-102-D',
    bedNumber: 'Bed D',
    roomId: 'RM-102',
    roomNumber: '102',
    building: 'Block A - Aryabhatta',
    studentId: 'STU-006',
    studentName: 'Ajay Verma',
    bedStatus: 'Occupied',
    assignmentDate: '2023-07-20',
    bedCondition: 'Good'
  }
];

// Helper to group beds by room for UI rendering
export const MOCK_ROOM_BED_GROUPS: RoomBedGroup[] = [
  {
    roomId: 'RM-101',
    roomNumber: '101',
    building: 'Block A - Aryabhatta',
    beds: MOCK_BEDS.filter(b => b.roomId === 'RM-101')
  },
  {
    roomId: 'RM-102',
    roomNumber: '102',
    building: 'Block A - Aryabhatta',
    beds: MOCK_BEDS.filter(b => b.roomId === 'RM-102')
  }
];
