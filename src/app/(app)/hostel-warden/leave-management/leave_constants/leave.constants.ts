import type { LeaveRequest } from '../leave_types/leave.types';

export const MOCK_LEAVES: LeaveRequest[] = [
  {
    id: 'LV-2023-001',
    applicantName: 'Vikram Singh',
    applicantRole: 'Warden',
    leaveType: 'Casual Leave',
    startDate: '2023-11-25',
    endDate: '2023-11-27',
    reason: 'Attending a family function out of station.',
    status: 'PENDING',
    appliedOn: '2023-11-20',
    context: 'WARDEN_SELF'
  },
  {
    id: 'LV-2023-002',
    applicantName: 'Sunita Devi',
    applicantRole: 'Cleaner',
    leaveType: 'Sick Leave',
    startDate: '2023-11-21',
    endDate: '2023-11-22',
    reason: 'Suffering from high fever.',
    status: 'APPROVED',
    appliedOn: '2023-11-20',
    context: 'STAFF_REQUEST',
    reviewedBy: 'Warden',
    remarks: 'Approved. Get well soon.'
  },
  {
    id: 'LV-2023-003',
    applicantName: 'Ramesh Kumar',
    applicantRole: 'Electrician',
    leaveType: 'Casual Leave',
    startDate: '2023-11-28',
    endDate: '2023-11-30',
    reason: 'Village visit for agricultural work.',
    status: 'PENDING',
    appliedOn: '2023-11-21',
    context: 'STAFF_REQUEST'
  }
];
