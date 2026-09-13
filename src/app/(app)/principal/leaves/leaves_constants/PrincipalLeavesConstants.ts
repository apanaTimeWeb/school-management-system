import { PrincipalLeaveRequest, PrincipalLeaveBalance } from '../leaves_types/PrincipalLeaves.types';

export const PRINCIPAL_MOCK_LEAVE_REQUESTS: PrincipalLeaveRequest[] = [
  {
    id: 'LV-1001',
    applicantName: 'Dr. Ramesh Sharma',
    applicantId: 'EMP-1021',
    applicantType: 'Teacher',
    departmentOrClass: 'Science Dept',
    leaveType: 'Casual Leave',
    startDate: '2023-11-15',
    endDate: '2023-11-16',
    totalDays: 2,
    reason: 'Family function in hometown.',
    status: 'Pending',
    appliedOn: '2023-11-10'
  },
  {
    id: 'LV-1002',
    applicantName: 'Aryan Kumar',
    applicantId: 'STU-9921',
    applicantType: 'Student',
    departmentOrClass: '10-A',
    leaveType: 'Sick Leave',
    startDate: '2023-11-12',
    endDate: '2023-11-14',
    totalDays: 3,
    reason: 'Suffering from viral fever.',
    status: 'Pending',
    appliedOn: '2023-11-11'
  },
  {
    id: 'LV-1003',
    applicantName: 'Suresh Verma',
    applicantId: 'STF-501',
    applicantType: 'Staff',
    departmentOrClass: 'Admin',
    leaveType: 'Emergency',
    startDate: '2023-11-05',
    endDate: '2023-11-05',
    totalDays: 1,
    reason: 'Personal emergency at home.',
    status: 'Approved',
    appliedOn: '2023-11-04',
    approvedBy: 'Principal'
  },
  {
    id: 'LV-1004',
    applicantName: 'Mrs. Anjali Gupta',
    applicantId: 'EMP-1045',
    applicantType: 'Teacher',
    departmentOrClass: 'Maths Dept',
    leaveType: 'Casual Leave',
    startDate: '2023-10-20',
    endDate: '2023-10-22',
    totalDays: 3,
    reason: 'Attending a seminar out of station.',
    status: 'Rejected',
    appliedOn: '2023-10-15',
    approvedBy: 'Principal'
  }
];

export const PRINCIPAL_MOCK_LEAVE_BALANCES: PrincipalLeaveBalance[] = [
  { id: 'BAL-1', staffName: 'Dr. Ramesh Sharma', staffId: 'EMP-1021', role: 'Teacher', totalLeaves: 15, leavesTaken: 5, leavesRemaining: 10 },
  { id: 'BAL-2', staffName: 'Mrs. Anjali Gupta', staffId: 'EMP-1045', role: 'Teacher', totalLeaves: 15, leavesTaken: 12, leavesRemaining: 3 },
  { id: 'BAL-3', staffName: 'Suresh Verma', staffId: 'STF-501', role: 'Staff', totalLeaves: 12, leavesTaken: 1, leavesRemaining: 11 },
];
