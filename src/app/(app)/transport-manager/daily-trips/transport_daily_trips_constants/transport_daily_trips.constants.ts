import type { DailyTrip } from '../transport_daily_trips_types/transport_daily_trips.types';

export const MOCK_DAILY_TRIPS: DailyTrip[] = [
  {
    id: 'TRP-1001',
    tripDate: new Date().toISOString().split('T')[0],
    tripType: 'MORNING_PICKUP',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    driverName: 'Rajesh Kumar',
    conductorName: 'Sanjay Verma',
    plannedStartTime: '06:45 AM',
    plannedEndTime: '08:15 AM',
    actualStartTime: '06:50 AM',
    actualEndTime: '08:10 AM',
    status: 'COMPLETED',
    studentsBoarded: 42,
    totalCapacity: 45,
    currentLocation: 'School Campus'
  },
  {
    id: 'TRP-1002',
    tripDate: new Date().toISOString().split('T')[0],
    tripType: 'MORNING_PICKUP',
    routeId: 'RT-002',
    routeName: 'Route R-02 (North Campus)',
    vehicleId: 'VEH-002',
    vehicleNumber: 'MH-12-CD-5678',
    driverName: 'Suresh Patil',
    conductorName: null,
    plannedStartTime: '07:00 AM',
    plannedEndTime: '08:30 AM',
    actualStartTime: '07:05 AM',
    actualEndTime: null,
    status: 'IN_TRANSIT',
    studentsBoarded: 35,
    totalCapacity: 50,
    currentLocation: 'Science Block Gate'
  },
  {
    id: 'TRP-1003',
    tripDate: new Date().toISOString().split('T')[0],
    tripType: 'AFTERNOON_DROP',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    driverName: 'Rajesh Kumar',
    conductorName: 'Sanjay Verma',
    plannedStartTime: '03:15 PM',
    plannedEndTime: '04:45 PM',
    actualStartTime: null,
    actualEndTime: null,
    status: 'SCHEDULED',
    studentsBoarded: 0,
    totalCapacity: 45,
    currentLocation: null
  },
  {
    id: 'TRP-1004',
    tripDate: new Date().toISOString().split('T')[0],
    tripType: 'AFTERNOON_DROP',
    routeId: 'RT-003',
    routeName: 'Route R-03 (South Route)',
    vehicleId: 'VEH-003',
    vehicleNumber: 'MH-12-EF-9012',
    driverName: 'Prakash M',
    conductorName: 'Anil Desai',
    plannedStartTime: '03:15 PM',
    plannedEndTime: '05:00 PM',
    actualStartTime: null,
    actualEndTime: null,
    status: 'DELAYED',
    studentsBoarded: 0,
    totalCapacity: 30,
    currentLocation: 'Maintenance Depot'
  },
  {
    id: 'TRP-1005',
    tripDate: new Date().toISOString().split('T')[0],
    tripType: 'SPECIAL_PICKUP',
    routeId: 'RT-SPC',
    routeName: 'Stadium Event',
    vehicleId: 'VEH-004',
    vehicleNumber: 'MH-12-GH-3456',
    driverName: 'Amit Singh',
    conductorName: null,
    plannedStartTime: '10:00 AM',
    plannedEndTime: '11:00 AM',
    actualStartTime: null,
    actualEndTime: null,
    status: 'CANCELLED',
    studentsBoarded: 0,
    totalCapacity: 25,
    currentLocation: null
  }
];

export const TRIP_TYPE_LABELS: Record<string, string> = {
  MORNING_PICKUP: 'Morning Trip',
  AFTERNOON_DROP: 'Afternoon Trip',
  SPECIAL_PICKUP: 'Pickup Trip',
  SPECIAL_DROP: 'Drop Trip',
};

export const TRIP_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  SCHEDULED: { bg: '#1E3A5F', text: '#3B82F6', label: 'Scheduled' }, // Blue
  STARTED: { bg: '#451A03', text: '#F59E0B', label: 'Started' }, // Amber
  IN_TRANSIT: { bg: '#064E3B', text: '#22C55E', label: 'In Transit' }, // Green
  COMPLETED: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Completed' }, // Gray
  CANCELLED: { bg: '#450A0A', text: '#EF4444', label: 'Cancelled' }, // Red
  DELAYED: { bg: '#701A75', text: '#D946EF', label: 'Delayed' }, // Purple
};
