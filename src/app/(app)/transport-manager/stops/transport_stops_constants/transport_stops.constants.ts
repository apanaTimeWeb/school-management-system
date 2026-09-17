import type { TransportStop } from '../transport_stops_types/transport_stops.types';

export const MOCK_TRANSPORT_STOPS: TransportStop[] = [
  {
    id: 'STP-001',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    stopName: 'Main Road',
    location: 'Near Highway Signal, Sec 1',
    sequence: 1,
    pickupTime: '07:00 AM',
    dropTime: '03:45 PM',
    status: 'ACTIVE',
    assignedStudents: 12
  },
  {
    id: 'STP-002',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    stopName: 'Railway Colony',
    location: 'Opposite Colony Gate 2',
    sequence: 2,
    pickupTime: '07:15 AM',
    dropTime: '03:30 PM',
    status: 'ACTIVE',
    assignedStudents: 8
  },
  {
    id: 'STP-003',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    stopName: 'Market Square',
    location: 'Behind Supermarket',
    sequence: 3,
    pickupTime: '07:30 AM',
    dropTime: '03:15 PM',
    status: 'TEMPORARY_CLOSURE',
    assignedStudents: 15
  },
  {
    id: 'STP-004',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    stopName: 'School Campus',
    location: 'Main Gate Drop Zone',
    sequence: 4,
    pickupTime: '08:00 AM',
    dropTime: '03:00 PM',
    status: 'ACTIVE',
    assignedStudents: 0 // Destination
  },
  {
    id: 'STP-005',
    routeId: 'RT-002',
    routeName: 'Route R-02 (North Campus)',
    stopName: 'Science Block',
    location: 'North Gate Entrance',
    sequence: 1,
    pickupTime: '07:10 AM',
    dropTime: '04:00 PM',
    status: 'ACTIVE',
    assignedStudents: 22
  }
];

export const STOP_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  ACTIVE: { bg: '#064E3B', text: '#22C55E', label: 'Active' },
  INACTIVE: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Inactive' },
  TEMPORARY_CLOSURE: { bg: '#450A0A', text: '#EF4444', label: 'Temp Closure' },
};
