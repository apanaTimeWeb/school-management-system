import { 
  PrincipalFeeSummary, 
  PrincipalClassFeeCollection, 
  PrincipalFeeDefaulter, 
  PrincipalFeeApprovalRequest 
} from '../fees_types/PrincipalFees.types';

export const PRINCIPAL_MOCK_FEE_SUMMARY: PrincipalFeeSummary = {
  totalExpected: 50000000,
  totalCollected: 42000000,
  totalOutstanding: 8000000,
  collectionPercentage: 84,
};

export const PRINCIPAL_MOCK_CLASS_COLLECTIONS: PrincipalClassFeeCollection[] = [
  { classId: 'C-01', className: 'Class 10', expected: 5000000, collected: 4500000, outstanding: 500000, percentage: 90 },
  { classId: 'C-02', className: 'Class 9', expected: 4800000, collected: 4000000, outstanding: 800000, percentage: 83 },
  { classId: 'C-03', className: 'Class 8', expected: 4500000, collected: 3600000, outstanding: 900000, percentage: 80 },
  { classId: 'C-04', className: 'Class 12', expected: 6000000, collected: 5800000, outstanding: 200000, percentage: 96 },
];

export const PRINCIPAL_MOCK_DEFAULTERS: PrincipalFeeDefaulter[] = [
  {
    id: 'DEF-001',
    studentId: 'STU-1122',
    studentName: 'Rahul Verma',
    classAndSection: '9-A',
    amountDue: 45000,
    dueDate: '2023-09-15',
    monthsPending: 3,
    contactNumber: '+91 9876543210'
  },
  {
    id: 'DEF-002',
    studentId: 'STU-1145',
    studentName: 'Neha Gupta',
    classAndSection: '8-B',
    amountDue: 15000,
    dueDate: '2023-10-15',
    monthsPending: 2,
    contactNumber: '+91 9876543211'
  },
  {
    id: 'DEF-003',
    studentId: 'STU-1300',
    studentName: 'Aditya Singh',
    classAndSection: '10-C',
    amountDue: 60000,
    dueDate: '2023-08-15',
    monthsPending: 4,
    contactNumber: '+91 9876543212'
  }
];

export const PRINCIPAL_MOCK_FEE_REQUESTS: PrincipalFeeApprovalRequest[] = [
  {
    id: 'REQ-FEE-001',
    studentId: 'STU-1199',
    studentName: 'Amit Desai',
    classAndSection: '11-Science',
    type: 'Concession',
    amountRequested: 20000,
    reason: 'Single parent facing financial hardship due to medical emergency.',
    dateSubmitted: '2023-11-20',
    status: 'Pending',
    urgency: 'High'
  },
  {
    id: 'REQ-FEE-002',
    studentId: 'STU-0988',
    studentName: 'Sneha Patil',
    classAndSection: '12-Commerce',
    type: 'Scholarship',
    amountRequested: 50000,
    reason: 'Merit scholarship for topping the district in Class 11 final exams.',
    dateSubmitted: '2023-11-18',
    status: 'Pending',
    urgency: 'Normal'
  },
  {
    id: 'REQ-FEE-003',
    studentId: 'STU-0877',
    studentName: 'Karan Sharma',
    classAndSection: '1-A',
    type: 'Refund',
    amountRequested: 10000,
    reason: 'Excess admission fee paid by mistake during online transaction.',
    dateSubmitted: '2023-11-21',
    status: 'Pending',
    urgency: 'High'
  },
  {
    id: 'REQ-FEE-004',
    studentId: 'STU-0555',
    studentName: 'Priya Verma',
    classAndSection: '5-B',
    type: 'Concession',
    amountRequested: 15000,
    reason: 'Staff child concession (Mother is working as primary teacher).',
    dateSubmitted: '2023-11-15',
    status: 'Approved',
    urgency: 'Normal'
  }
];
