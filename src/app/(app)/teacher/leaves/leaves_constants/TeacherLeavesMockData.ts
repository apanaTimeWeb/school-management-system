import { LeaveData } from '../leaves_store/useTeacherLeavesStore';

export const TEACHER_LEAVES_MOCK: LeaveData[] = [
  {
    id: 'LV-001',
    type: 'Sick Leave',
    fromDate: '2023-11-25',
    toDate: '2023-11-26',
    reason: 'Suffering from viral fever. Doctor advised 2 days of rest.',
    status: 'Pending',
    appliedOn: '2023-11-24',
    attachment: 'medical_cert.pdf'
  },
  {
    id: 'LV-002',
    type: 'Casual Leave',
    fromDate: '2023-10-15',
    toDate: '2023-10-15',
    reason: 'Attending a family function out of station.',
    status: 'Approved',
    appliedOn: '2023-10-10',
    adminRemarks: 'Approved. Please ensure class cover is arranged.'
  },
  {
    id: 'LV-003',
    type: 'Earned Leave',
    fromDate: '2023-09-01',
    toDate: '2023-09-05',
    reason: 'Personal trip.',
    status: 'Approved',
    appliedOn: '2023-08-20'
  },
  {
    id: 'LV-004',
    type: 'Casual Leave',
    fromDate: '2023-08-10',
    toDate: '2023-08-11',
    reason: 'Urgent personal work.',
    status: 'Rejected',
    appliedOn: '2023-08-08',
    adminRemarks: 'Leave cannot be granted during mid-term exam week.'
  }
];
