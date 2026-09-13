import { PrincipalParentRecord, PrincipalParentCommunication, PrincipalParentMeeting } from '../parents_types/PrincipalParents.types';

export const PRINCIPAL_MOCK_PARENTS: PrincipalParentRecord[] = [
  {
    id: 'PRT-1001',
    fatherName: 'Rajesh Verma',
    motherName: 'Sunita Verma',
    primaryContactName: 'Rajesh Verma',
    contactNumber: '+91-9876543210',
    email: 'rajesh.v@example.com',
    occupation: 'Software Engineer',
    address: 'B-102, Shanti Vihar, New Delhi',
    children: [
      { studentId: 'STU-4521', studentName: 'Rahul Verma', classAndSection: '9-B' }
    ],
    isImportantCase: true // For discipline issues in previous module
  },
  {
    id: 'PRT-1002',
    fatherName: 'Amit Patel',
    motherName: 'Sneha Patel',
    primaryContactName: 'Amit Patel',
    contactNumber: '+91-9988776655',
    email: 'amit.p@example.com',
    occupation: 'Businessman',
    address: '44-C, Civil Lines, Mumbai',
    children: [
      { studentId: 'STU-3329', studentName: 'Sneha Patel', classAndSection: '11-A' },
      { studentId: 'STU-3330', studentName: 'Rohan Patel', classAndSection: '8-C' }
    ]
  },
  {
    id: 'PRT-1003',
    fatherName: 'Vikas Sharma',
    motherName: 'Priya Sharma',
    primaryContactName: 'Priya Sharma',
    contactNumber: '+91-9898989898',
    email: 'priya.s@example.com',
    occupation: 'Teacher',
    address: 'Flat 502, Green Park, Bangalore',
    children: [
      { studentId: 'STU-1123', studentName: 'Arjun Sharma', classAndSection: '10-A' }
    ]
  }
];

export const PRINCIPAL_MOCK_COMMUNICATIONS: PrincipalParentCommunication[] = [
  {
    id: 'COM-001',
    parentId: 'PRT-1002',
    parentName: 'Amit Patel',
    type: 'Complaint',
    subject: 'Issue with School Bus Timing',
    message: 'The bus is consistently late by 20 minutes for the past week.',
    date: '2023-11-16',
    status: 'Unread'
  },
  {
    id: 'COM-002',
    parentId: 'PRT-1001',
    parentName: 'Rajesh Verma',
    type: 'Feedback',
    subject: 'Appreciation for Annual Day',
    message: 'The annual function was brilliantly organized. Kudos to the team!',
    date: '2023-11-10',
    status: 'Read'
  }
];

export const PRINCIPAL_MOCK_MEETINGS: PrincipalParentMeeting[] = [
  {
    id: 'MTG-01',
    parentId: 'PRT-1001',
    parentName: 'Rajesh Verma',
    studentName: 'Rahul Verma',
    meetingDate: '2023-11-23',
    meetingTime: '10:00 AM',
    reason: 'Disciplinary hearing for classroom misbehavior.',
    status: 'Scheduled'
  },
  {
    id: 'MTG-02',
    parentId: 'PRT-1003',
    parentName: 'Priya Sharma',
    studentName: 'Arjun Sharma',
    meetingDate: '2023-11-05',
    meetingTime: '11:30 AM',
    reason: 'Discussion regarding poor academic performance in Half-Yearly exams.',
    status: 'Completed',
    notes: 'Parents agreed to arrange a home tutor for Mathematics.'
  }
];
