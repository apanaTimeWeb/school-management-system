import type { MaintenanceComplaint } from '../maintenance_types/maintenance.types';

export const MOCK_COMPLAINTS: MaintenanceComplaint[] = [
  {
    id: 'MNT-2023-001',
    category: 'Electrical',
    locationType: 'Room',
    locationDetail: 'Room 101',
    description: 'Ceiling fan is making a loud noise and spinning very slowly.',
    priority: 'Medium',
    status: 'In Progress',
    loggedBy: 'Student: Amit Kumar',
    loggedDate: '2023-11-20T09:30:00Z',
    assignedTo: 'Ramesh (Electrician)'
  },
  {
    id: 'MNT-2023-002',
    category: 'Plumbing',
    locationType: 'Washroom',
    locationDetail: 'Room 102 Attached Washroom',
    description: 'Tap is continuously leaking, causing water wastage.',
    priority: 'High',
    status: 'Pending',
    loggedBy: 'Warden',
    loggedDate: '2023-11-21T08:15:00Z'
  },
  {
    id: 'MNT-2023-003',
    category: 'IT/Wi-Fi',
    locationType: 'Floor',
    locationDetail: 'First Floor - Block A',
    description: 'Wi-Fi router is completely dead, no lights blinking.',
    priority: 'Urgent',
    status: 'Pending',
    loggedBy: 'Student: Sneha Patel',
    loggedDate: '2023-11-21T10:00:00Z'
  },
  {
    id: 'MNT-2023-004',
    category: 'Carpentry',
    locationType: 'Room',
    locationDetail: 'Room 205',
    description: 'Cupboard door hinge is broken.',
    priority: 'Low',
    status: 'Resolved',
    loggedBy: 'Student: Rahul Singh',
    loggedDate: '2023-11-15T14:20:00Z',
    assignedTo: 'Suresh (Carpenter)',
    resolutionDate: '2023-11-16T11:00:00Z',
    remarks: 'Hinge replaced with a heavy-duty one.'
  },
  {
    id: 'MNT-2023-005',
    category: 'Cleaning',
    locationType: 'Common Area',
    locationDetail: 'Ground Floor Lounge',
    description: 'Sofa covers need deep cleaning.',
    priority: 'Low',
    status: 'Resolved',
    loggedBy: 'Warden',
    loggedDate: '2023-11-10T09:00:00Z',
    assignedTo: 'Housekeeping Team',
    resolutionDate: '2023-11-11T16:00:00Z',
    remarks: 'Dry cleaned successfully.'
  }
];
