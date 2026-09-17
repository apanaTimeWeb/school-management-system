import type { Hostel } from '../management_types/hostel_management.types';

export const MOCK_HOSTELS: Hostel[] = [
  {
    id: 'HST-01',
    hostelName: 'Main Boys Hostel',
    hostelType: 'BOYS',
    building: 'Block A - Aryabhatta',
    capacity: 200,
    wardenName: 'Ravi Kumar',
    contact: '+91 9876543210',
    floorCount: 3,
    roomCount: 50,
    status: 'ACTIVE',
    rules: [
      'No entry after 9:00 PM.',
      'Study hours strictly from 7:00 PM to 9:00 PM.',
      'Visitors allowed only on Sundays 10:00 AM - 4:00 PM.',
      'No loud music after 10:00 PM.'
    ],
    facilities: ['Wi-Fi 24x7', 'RO Water', 'Hot Water', 'Common TV Room', 'Indoor Games'],
    floors: [
      { id: 'F1', name: 'Floor 1', roomCount: 16 },
      { id: 'F2', name: 'Floor 2', roomCount: 17 },
      { id: 'F3', name: 'Floor 3', roomCount: 17 }
    ]
  },
  {
    id: 'HST-02',
    hostelName: 'Girls Hostel',
    hostelType: 'GIRLS',
    building: 'Block B - Sarojini',
    capacity: 150,
    wardenName: 'Meena Sharma',
    contact: '+91 9876543211',
    floorCount: 2,
    roomCount: 40,
    status: 'ACTIVE',
    rules: [
      'No entry after 8:00 PM.',
      'Study hours strictly from 7:00 PM to 9:00 PM.',
      'Visitors allowed only in Visitor Lounge.',
      'Prior permission required for night out.'
    ],
    facilities: ['Wi-Fi 24x7', 'RO Water', 'Hot Water', 'Reading Room', 'Gym'],
    floors: [
      { id: 'F1', name: 'Floor 1', roomCount: 20 },
      { id: 'F2', name: 'Floor 2', roomCount: 20 }
    ]
  },
  {
    id: 'HST-03',
    hostelName: 'Senior Boys Hostel',
    hostelType: 'BOYS',
    building: 'Block C - Kalam',
    capacity: 100,
    wardenName: 'Suresh Menon',
    contact: '+91 9876543212',
    floorCount: 2,
    roomCount: 25,
    status: 'MAINTENANCE',
    rules: [
      'No entry after 10:00 PM.',
      'Laptops allowed for study purposes.',
      'Self-cleaning of rooms mandatory on weekends.'
    ],
    facilities: ['Wi-Fi 24x7', 'AC Rooms available', 'Attached washrooms', 'Microwave in pantry'],
    floors: [
      { id: 'F1', name: 'Floor 1', roomCount: 12 },
      { id: 'F2', name: 'Floor 2', roomCount: 13 }
    ]
  }
];
