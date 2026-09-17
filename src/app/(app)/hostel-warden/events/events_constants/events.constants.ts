import type { HostelEvent } from '../events_types/events.types';

export const MOCK_EVENTS: HostelEvent[] = [
  {
    id: 'EVT-2023-001',
    title: 'Hostel Fresher\'s Night 2023',
    category: 'Cultural',
    date: '2023-11-25',
    time: '18:00',
    venue: 'Main Courtyard',
    description: 'Welcome party for the first-year students with music, dance, and dinner.',
    totalParticipants: 250,
    budgetAllocated: 50000,
    budgetSpent: 15000,
    status: 'UPCOMING'
  },
  {
    id: 'EVT-2023-002',
    title: 'Inter-Block Table Tennis Tournament',
    category: 'Sports',
    date: '2023-11-20',
    time: '16:00',
    venue: 'Block B Sports Room',
    description: 'Knockout table tennis tournament between blocks A, B, and C.',
    totalParticipants: 32,
    budgetAllocated: 5000,
    budgetSpent: 5000,
    status: 'COMPLETED'
  },
  {
    id: 'EVT-2023-003',
    title: 'Diwali Celebration',
    category: 'Festival',
    date: '2023-11-12',
    time: '19:00',
    venue: 'All Blocks',
    description: 'Diyas lighting, rangoli making, and special festive dinner.',
    totalParticipants: 400,
    budgetAllocated: 75000,
    budgetSpent: 72500,
    status: 'COMPLETED'
  }
];
