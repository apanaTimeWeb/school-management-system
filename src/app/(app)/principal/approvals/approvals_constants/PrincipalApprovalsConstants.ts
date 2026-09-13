import { PrincipalApprovalCategory, PrincipalApprovalSummary, PrincipalApprovalRequest } from '../approvals_types/PrincipalApprovals.types';

export const PRINCIPAL_APPROVAL_CATEGORIES: PrincipalApprovalSummary[] = [
  { category: 'Leave', pendingCount: 12, iconName: 'CalendarOff', colorClass: 'text-warning' },
  { category: 'Admission', pendingCount: 5, iconName: 'UserPlus', colorClass: 'text-primary' },
  { category: 'Fee Concession', pendingCount: 3, iconName: 'IndianRupee', colorClass: 'text-success' },
  { category: 'TC', pendingCount: 2, iconName: 'FileText', colorClass: 'text-danger' },
  { category: 'Purchase/Expense', pendingCount: 4, iconName: 'ShoppingCart', colorClass: 'text-info' },
  { category: 'Discipline Action', pendingCount: 1, iconName: 'Scale', colorClass: 'text-danger' },
  { category: 'Event', pendingCount: 2, iconName: 'Ticket', colorClass: 'text-warning' },
  { category: 'Marks/Result', pendingCount: 0, iconName: 'BarChart2', colorClass: 'text-success' },
  { category: 'Attendance Correction', pendingCount: 7, iconName: 'CalendarCheck', colorClass: 'text-info' },
  { category: 'Student Transfer', pendingCount: 0, iconName: 'Repeat', colorClass: 'text-primary' },
  { category: 'Certificate', pendingCount: 8, iconName: 'Award', colorClass: 'text-warning' },
  { category: 'Refund', pendingCount: 1, iconName: 'CreditCard', colorClass: 'text-danger' },
];

export const PRINCIPAL_MOCK_APPROVAL_REQUESTS: PrincipalApprovalRequest[] = [
  {
    id: 'REQ-001',
    category: 'Leave',
    title: 'Medical Leave - 3 Days',
    requestedBy: 'Mr. Rakesh Singh (Math Teacher)',
    dateRequested: '2023-11-20',
    description: 'Requesting 3 days medical leave from 21st Nov to 23rd Nov due to viral fever. Medical certificate attached.',
    attachments: ['medical_cert_rakesh.pdf'],
    status: 'Pending',
    priority: 'High'
  },
  {
    id: 'REQ-002',
    category: 'Fee Concession',
    title: 'Sibling Discount Request',
    requestedBy: 'Mr. Amit Verma (Parent of Rohan, 10-A)',
    dateRequested: '2023-11-19',
    description: 'Requesting standard 10% sibling concession for second child admitted in Class 5.',
    amount: '₹ 4,500',
    status: 'Pending',
    priority: 'Medium'
  },
  {
    id: 'REQ-003',
    category: 'TC',
    title: 'Transfer Certificate - Relocation',
    requestedBy: 'Mrs. Sunita Rao (Parent of Anjali, 8-B)',
    dateRequested: '2023-11-18',
    description: 'Family relocating to Mumbai. All dues cleared. Library no-dues certificate attached.',
    attachments: ['no_dues_library.pdf', 'fee_clearance.pdf'],
    status: 'Pending',
    priority: 'High'
  },
  {
    id: 'REQ-004',
    category: 'Purchase/Expense',
    title: 'Science Lab Chemicals',
    requestedBy: 'Mrs. Geeta Sharma (HOD Science)',
    dateRequested: '2023-11-20',
    description: 'Monthly replenishment of reagents and acids for Class 11 and 12 Chemistry Lab.',
    amount: '₹ 12,500',
    status: 'Pending',
    priority: 'Medium'
  },
  {
    id: 'REQ-005',
    category: 'Discipline Action',
    title: 'Suspension Recommendation',
    requestedBy: 'Mr. Anil Kumar (Discipline Incharge)',
    dateRequested: '2023-11-21',
    description: 'Recommend 2-day suspension for Karan Singh (10-C) for involvement in physical altercation on school premises.',
    status: 'Pending',
    priority: 'High'
  }
];
