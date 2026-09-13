import { PrincipalComplaint } from '../complaints_types/PrincipalComplaints.types';

export const PRINCIPAL_MOCK_COMPLAINTS: PrincipalComplaint[] = [
  {
    id: 'CMP-1001',
    source: 'Parent',
    submittedBy: 'Ramesh Singh (F/O Rahul 9-A)',
    subject: 'School Bus frequently late by 20 minutes',
    description: 'The school bus on Route 4 is consistently late for the past week. Children are waiting on the road for too long. Please look into this issue immediately.',
    dateSubmitted: '2023-11-20',
    priority: 'High',
    status: 'In Progress',
    assignedTo: 'Transport Manager',
    historyLog: [
      { date: '2023-11-20 08:30 AM', action: 'Complaint Submitted', by: 'Parent Portal' },
      { date: '2023-11-20 10:00 AM', action: 'Assigned to Transport Manager', by: 'Principal Office' }
    ]
  },
  {
    id: 'CMP-1002',
    source: 'Student',
    submittedBy: 'Neha Sharma (11-B)',
    subject: 'Water cooler on 2nd floor not working',
    description: 'The drinking water cooler near the physics lab is not dispensing cold water. It has been like this for three days.',
    dateSubmitted: '2023-11-21',
    priority: 'Medium',
    status: 'New',
    historyLog: [
      { date: '2023-11-21 11:15 AM', action: 'Complaint Submitted', by: 'Student Portal' }
    ]
  },
  {
    id: 'CMP-1003',
    source: 'Staff',
    submittedBy: 'Mr. Verma (Math Dept)',
    subject: 'Smartboard touch issue in Class 10-C',
    description: 'The smartboard touch is very unresponsive on the left side, making it hard to write equations.',
    dateSubmitted: '2023-11-18',
    priority: 'Critical',
    status: 'Escalated',
    assignedTo: 'IT Department',
    escalationNotes: 'Vendor needs to be called as it seems to be a hardware failure.',
    historyLog: [
      { date: '2023-11-18 09:00 AM', action: 'Complaint Submitted', by: 'Staff Portal' },
      { date: '2023-11-18 09:30 AM', action: 'Assigned to IT Department', by: 'Admin' },
      { date: '2023-11-19 12:00 PM', action: 'Escalated to Vendor Management', by: 'IT Head' }
    ]
  },
  {
    id: 'CMP-1004',
    source: 'Parent',
    submittedBy: 'Anita Desai (M/O Rohan 5-B)',
    subject: 'Issue with canteen food quality',
    description: 'Found the snacks served yesterday were stale. Requesting strict quality checks.',
    dateSubmitted: '2023-11-10',
    priority: 'High',
    status: 'Resolved',
    assignedTo: 'Admin Dept',
    resolution: 'Warning letter issued to the canteen vendor. Quality check committee formed.',
    historyLog: [
      { date: '2023-11-10 02:00 PM', action: 'Complaint Submitted', by: 'Parent Portal' },
      { date: '2023-11-11 10:00 AM', action: 'Resolved', by: 'Principal' }
    ]
  }
];
