import type { FeeRecord } from '../fees_types/fees.types';

export const MOCK_FEES: FeeRecord[] = [
  {
    id: 'FEE-2023-11-001',
    studentName: 'Amit Kumar',
    studentId: 'STU-1024',
    roomNumber: '101',
    feeCategory: 'Room Rent',
    totalDue: 25000,
    paidAmount: 25000,
    balance: 0,
    dueDate: '2023-11-01',
    status: 'PAID',
    description: 'Q3 Room Rent (Oct-Dec)'
  },
  {
    id: 'FEE-2023-11-002',
    studentName: 'Sneha Patel',
    studentId: 'STU-1025',
    roomNumber: '205',
    feeCategory: 'Mess Fee',
    totalDue: 12000,
    paidAmount: 5000,
    balance: 7000,
    dueDate: '2023-11-05',
    status: 'PARTIAL',
    description: 'Q3 Mess Charges'
  },
  {
    id: 'FEE-2023-11-003',
    studentName: 'Rahul Singh',
    studentId: 'STU-0998',
    roomNumber: '101',
    feeCategory: 'Damages',
    totalDue: 1500,
    paidAmount: 0,
    balance: 1500,
    dueDate: '2023-11-15',
    status: 'UNPAID',
    description: 'Broken window pane in Room 101'
  },
  {
    id: 'FEE-2023-11-004',
    studentName: 'Priya Sharma',
    studentId: 'STU-1056',
    roomNumber: '103',
    feeCategory: 'Laundry',
    totalDue: 3000,
    paidAmount: 0,
    balance: 3000,
    dueDate: '2023-11-10',
    status: 'UNPAID',
    description: 'Quarterly Laundry Subscription'
  }
];
