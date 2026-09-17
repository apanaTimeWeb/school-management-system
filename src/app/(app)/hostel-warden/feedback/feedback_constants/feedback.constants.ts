import type { HostelFeedback } from '../feedback_types/feedback.types';

export const MOCK_FEEDBACK: HostelFeedback[] = [
  {
    id: 'FB-2023-001',
    category: 'Food',
    isAnonymous: false,
    studentName: 'Amit Kumar',
    studentId: 'STU-1024',
    roomNumber: '101',
    dateSubmitted: '2023-11-20T08:30:00Z',
    subject: 'Request for better breakfast variety',
    description: 'We have been getting Poha very frequently for breakfast. It would be great if Idli or Upma could be added to the rotation.',
    status: 'ACTION_TAKEN',
    wardenResponse: 'Discussed with Mess Committee. Idli added to Wednesday menu starting next week.',
    actionTakenDate: '2023-11-21T10:00:00Z'
  },
  {
    id: 'FB-2023-002',
    category: 'Cleanliness',
    isAnonymous: true,
    dateSubmitted: '2023-11-21T09:15:00Z',
    subject: 'Corridor cleaning issue in Block A',
    description: 'The second-floor corridor of Block A hasn\'t been mopped properly for the last two days. It\'s very dusty.',
    status: 'NEW'
  },
  {
    id: 'FB-2023-003',
    category: 'Security',
    isAnonymous: false,
    studentName: 'Sneha Patel',
    studentId: 'STU-1025',
    roomNumber: '205',
    dateSubmitted: '2023-11-19T20:00:00Z',
    subject: 'Main gate guard behavior',
    description: 'The night guard at the main gate was very rude when I was returning from the library at 9:30 PM.',
    status: 'REVIEWED',
    wardenResponse: 'Noted. I will review the CCTV footage and speak to the security agency.'
  }
];
