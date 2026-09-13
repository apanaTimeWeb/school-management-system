import { PrincipalNotice, PrincipalCommunicationHistory } from '../communication_types/PrincipalCommunication.types';

export const PRINCIPAL_MOCK_NOTICES: PrincipalNotice[] = [
  {
    id: 'NOT-1001',
    title: 'Upcoming Half-Yearly Examinations Schedule',
    content: 'The Half-Yearly examinations will commence from 5th December. The detailed date sheet has been published on the notice board and portal. All teachers are requested to complete the syllabus by 25th November.',
    type: 'Notice',
    targetAudience: 'All',
    datePosted: '2023-11-10',
    priority: 'High',
    postedBy: 'Principal Office',
    attachments: 1
  },
  {
    id: 'NOT-1002',
    title: 'Winter Vacation Announcement',
    content: 'The school will remain closed for winter vacation from 25th December to 5th January. Classes will resume on 6th January. Wishing everyone a Merry Christmas and a Happy New Year!',
    type: 'Announcement',
    targetAudience: 'All',
    datePosted: '2023-11-15',
    priority: 'Normal',
    postedBy: 'Administration'
  },
  {
    id: 'NOT-1003',
    title: 'Urgent Staff Meeting regarding Annual Day',
    content: 'All teaching staff must attend a mandatory meeting today at 3:00 PM in the auditorium to discuss the Annual Day preparations and duty allocations.',
    type: 'Notice',
    targetAudience: 'Teachers',
    datePosted: '2023-11-18',
    priority: 'Urgent',
    postedBy: 'Principal Office'
  }
];

export const PRINCIPAL_MOCK_HISTORY: PrincipalCommunicationHistory[] = [
  {
    id: 'HIS-001',
    subject: 'Fee Reminder - Q3',
    messagePreview: 'Dear Parent, please ensure the Q3 tuition fee is paid before the 15th of this month to avoid late charges...',
    sentDate: '2023-11-10',
    sentTime: '10:00 AM',
    sender: 'Accounts Department',
    recipients: 'All Parents',
    channels: ['SMS', 'Email', 'WhatsApp'],
    status: 'Sent',
    deliveryRate: 98
  },
  {
    id: 'HIS-002',
    subject: 'Unexpected Holiday Declared',
    messagePreview: 'Due to severe weather conditions, the school will remain closed tomorrow for all students and staff...',
    sentDate: '2023-11-12',
    sentTime: '08:00 PM',
    sender: 'Principal Office',
    recipients: 'All',
    channels: ['SMS', 'WhatsApp', 'Push'],
    status: 'Sent',
    deliveryRate: 100
  },
  {
    id: 'HIS-003',
    subject: 'Science Project Submission',
    messagePreview: 'Reminder for Class 10 students: The deadline for submitting the Science Project is tomorrow...',
    sentDate: '2023-11-15',
    sentTime: '02:30 PM',
    sender: 'Mr. Vivek Singh',
    recipients: 'Class 10-A Students',
    channels: ['Email', 'Push'],
    status: 'Sent',
    deliveryRate: 95
  }
];
