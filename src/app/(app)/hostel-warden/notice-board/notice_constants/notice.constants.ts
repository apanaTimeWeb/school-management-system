import type { HostelNotice } from '../notice_types/notice.types';

export const MOCK_NOTICES: HostelNotice[] = [
  {
    id: 'NTC-2023-001',
    title: 'Water Supply Interruption',
    content: 'The water supply will be cut off from 2:00 PM to 4:00 PM today due to overhead tank cleaning. Please store water as needed.',
    category: 'Maintenance',
    datePosted: '2023-11-21T09:00:00Z',
    postedBy: 'Chief Warden',
    targetAudience: 'All Hostels',
    isBroadcasted: true,
    validUntil: '2023-11-21T18:00:00Z'
  },
  {
    id: 'NTC-2023-002',
    title: 'Diwali Celebration & Dinner',
    content: 'Special Diwali Dinner will be served in the main mess on Sunday at 8:00 PM. All students are invited to join the cultural program following the dinner in the common lawn.',
    category: 'Event',
    datePosted: '2023-11-18T10:30:00Z',
    postedBy: 'Mess Committee',
    targetAudience: 'All Hostels',
    isBroadcasted: false,
    validUntil: '2023-11-25T00:00:00Z'
  },
  {
    id: 'NTC-2023-003',
    title: 'Wi-Fi Maintenance in Block B',
    content: 'Wi-Fi routers on the 2nd Floor of Block B will be upgraded tomorrow. Expect intermittent disconnections between 10 AM and 1 PM.',
    category: 'Maintenance',
    datePosted: '2023-11-20T14:15:00Z',
    postedBy: 'IT Department',
    targetAudience: 'Specific Floor',
    targetDetail: 'Block B - 2nd Floor',
    isBroadcasted: false,
    validUntil: '2023-11-22T00:00:00Z'
  },
  {
    id: 'NTC-2023-004',
    title: 'Strict Curfew Timing Reminder',
    content: 'This is an urgent reminder that the hostel gate closes exactly at 10:00 PM. Any student arriving late without a prior approved gate pass will face disciplinary action.',
    category: 'Urgent Alert',
    datePosted: '2023-11-15T08:00:00Z',
    postedBy: 'Discipline Committee',
    targetAudience: 'All Hostels',
    isBroadcasted: true
  }
];
