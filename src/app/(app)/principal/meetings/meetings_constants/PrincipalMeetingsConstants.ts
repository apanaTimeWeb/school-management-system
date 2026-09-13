import { PrincipalMeeting, PrincipalMeetingMinutes } from '../meetings_types/PrincipalMeetings.types';

export const PRINCIPAL_MOCK_MEETINGS: PrincipalMeeting[] = [
  {
    id: 'MTG-2001',
    title: 'Monthly HOD Coordination',
    type: 'HOD',
    date: '2023-11-20',
    time: '10:00 AM',
    duration: '2 Hours',
    location: 'Conference Room A',
    organizer: 'Principal Office',
    status: 'Scheduled',
    agenda: [
      'Review of mid-term syllabus coverage',
      'Discussion on upcoming lab equipment purchases',
      'Teacher performance evaluations'
    ],
    expectedAttendeesCount: 8
  },
  {
    id: 'MTG-2002',
    title: 'General Staff Briefing',
    type: 'Staff',
    date: '2023-11-15',
    time: '03:00 PM',
    duration: '1 Hour',
    location: 'School Auditorium',
    organizer: 'Admin Dept',
    status: 'Completed',
    agenda: [
      'Discipline guidelines for winter term',
      'Annual day duties allocation'
    ],
    expectedAttendeesCount: 45,
    actualAttendeesCount: 42
  },
  {
    id: 'MTG-2003',
    title: 'PTA Executive Committee',
    type: 'Parent',
    date: '2023-11-10',
    time: '11:00 AM',
    duration: '1.5 Hours',
    location: 'Principal Office',
    organizer: 'Principal Office',
    status: 'Completed',
    agenda: [
      'Transport fee revision discussion',
      'Feedback on canteen food quality'
    ],
    expectedAttendeesCount: 12,
    actualAttendeesCount: 12
  }
];

export const PRINCIPAL_MOCK_MINUTES: PrincipalMeetingMinutes[] = [
  {
    id: 'MIN-001',
    meetingId: 'MTG-2002',
    meetingTitle: 'General Staff Briefing',
    date: '2023-11-15',
    recordedBy: 'Mrs. Sharma (Admin)',
    summary: 'The meeting started with a review of current discipline issues. The Principal emphasized strict adherence to the winter uniform code. Duties for the Annual Day were proposed and accepted by the staff. A follow-up meeting for cultural heads is planned next week.',
    actionItems: [
      {
        id: 'ACT-101',
        task: 'Publish Winter Uniform Circular',
        assignedTo: 'Admin Dept',
        dueDate: '2023-11-17',
        status: 'Completed'
      },
      {
        id: 'ACT-102',
        task: 'Finalize Annual Day Sub-Committees',
        assignedTo: 'Mr. Verma (Cultural Head)',
        dueDate: '2023-11-22',
        status: 'In Progress'
      }
    ]
  },
  {
    id: 'MIN-002',
    meetingId: 'MTG-2003',
    meetingTitle: 'PTA Executive Committee',
    date: '2023-11-10',
    recordedBy: 'Principal Office',
    summary: 'Parents raised concerns regarding the 10% hike in transport fees. It was explained that fuel costs have surged. A compromise was reached to improve bus tracking via GPS. Canteen vendor will be given a warning regarding food quality.',
    actionItems: [
      {
        id: 'ACT-201',
        task: 'Issue warning letter to Canteen Vendor',
        assignedTo: 'Admin Dept',
        dueDate: '2023-11-12',
        status: 'Completed'
      },
      {
        id: 'ACT-202',
        task: 'Ensure GPS tracking app is working for all parents',
        assignedTo: 'IT Support',
        dueDate: '2023-11-20',
        status: 'Pending'
      }
    ]
  }
];
