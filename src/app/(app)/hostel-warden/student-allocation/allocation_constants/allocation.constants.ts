import type { StudentAllocation } from '../allocation_types/allocation.types';

export const MOCK_ALLOCATIONS: StudentAllocation[] = [
  {
    id: 'ALLOC-001',
    studentId: 'STU-1024',
    studentName: 'Amit Kumar',
    class: '10th Science',
    hostelName: 'Main Boys Hostel',
    building: 'Block A - Aryabhatta',
    floor: 'Ground Floor',
    roomNumber: '101',
    bedNumber: 'Bed A',
    joiningDate: '2023-04-01',
    allocationDate: '2023-03-25',
    expectedExitDate: '2024-03-31',
    guardianName: 'Rajesh Kumar',
    guardianContact: '+91 9876543210',
    status: 'ACTIVE',
    history: [
      { date: '2023-03-25', action: 'Allocated', details: 'Room 101, Bed A assigned.' },
      { date: '2023-04-01', action: 'Check-In', details: 'Student arrived at hostel.' }
    ]
  },
  {
    id: 'ALLOC-002',
    studentId: 'STU-1025',
    studentName: 'Sneha Patel',
    class: '12th Commerce',
    hostelName: 'Girls Hostel',
    building: 'Block B - Sarojini',
    floor: 'First Floor',
    roomNumber: '205',
    bedNumber: 'Bed B',
    joiningDate: '2022-04-01',
    allocationDate: '2022-03-20',
    guardianName: 'Vikram Patel',
    guardianContact: '+91 9876543211',
    status: 'ACTIVE',
    history: [
      { date: '2022-03-20', action: 'Allocated', details: 'Room 205, Bed B assigned.' },
      { date: '2022-04-01', action: 'Check-In', details: 'Student arrived at hostel.' }
    ]
  },
  {
    id: 'ALLOC-003',
    studentId: 'STU-0998',
    studentName: 'Rahul Singh',
    class: '12th Science',
    hostelName: 'Main Boys Hostel',
    building: 'Block A - Aryabhatta',
    floor: 'Ground Floor',
    roomNumber: '101',
    bedNumber: 'Bed B',
    joiningDate: '2021-04-01',
    allocationDate: '2021-03-25',
    guardianName: 'Sanjay Singh',
    guardianContact: '+91 9876543212',
    status: 'VACATED',
    history: [
      { date: '2021-03-25', action: 'Allocated', details: 'Room 101, Bed B assigned.' },
      { date: '2023-03-31', action: 'Check-Out', details: 'Student graduated and vacated.' }
    ]
  }
];
