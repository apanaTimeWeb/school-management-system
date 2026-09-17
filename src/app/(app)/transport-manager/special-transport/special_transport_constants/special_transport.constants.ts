import type { SpecialTransportRecord } from '../special_transport_types/special_transport.types';

export const MOCK_SPECIAL_TRIPS: SpecialTransportRecord[] = [
  {
    id: 'ST-1001',
    tripName: 'Annual Science City Tour',
    tripType: 'EDUCATIONAL_TOUR',
    status: 'SCHEDULED',
    destination: 'Science City, Downtown',
    routeDetails: 'School -> Highway 4 -> Science City',
    scheduleDate: '2023-11-15',
    departureTime: '08:30',
    returnTime: '15:30',
    assignedVehicle: 'VEH-002 (Tata Magic)',
    assignedDriver: 'Rakesh Kumar',
    assignedConductor: 'Suresh Singh',
    studentCount: 45,
    accompanyingStaff: 'Mr. Sharma (Science Dept)',
    permissionStatus: 'APPROVED',
    emergencyContact: '+91 98765 43210'
  },
  {
    id: 'ST-1002',
    tripName: 'Inter-School Football Final',
    tripType: 'SPORTS_EVENT',
    status: 'IN_TRANSIT',
    destination: 'City Sports Complex',
    routeDetails: 'School -> Ring Road -> Sports Complex',
    scheduleDate: new Date().toISOString().split('T')[0], // Today
    departureTime: '07:00',
    returnTime: '14:00',
    assignedVehicle: 'VEH-005 (Force Traveller)',
    assignedDriver: 'Amit Patel',
    assignedConductor: 'Vijay',
    studentCount: 18,
    accompanyingStaff: 'Coach Verma',
    permissionStatus: 'APPROVED',
    emergencyContact: '+91 99887 76655'
  },
  {
    id: 'ST-1003',
    tripName: 'Board Exam Center Drop',
    tripType: 'EXAM_CENTER',
    status: 'COMPLETED',
    destination: 'Kendriya Vidyalaya, Sector 4',
    routeDetails: 'Direct route via Main Ave',
    scheduleDate: '2023-10-05',
    departureTime: '08:00',
    returnTime: '13:30',
    assignedVehicle: 'VEH-001 (Bus)',
    assignedDriver: 'Manoj Tiwari',
    assignedConductor: 'Rahul',
    studentCount: 50,
    accompanyingStaff: 'Mrs. Gupta',
    permissionStatus: 'APPROVED',
    emergencyContact: '+91 91234 56789'
  },
  {
    id: 'ST-1004',
    tripName: 'Class 5 Picnic',
    tripType: 'PICNIC',
    status: 'SCHEDULED',
    destination: 'Wonderland Theme Park',
    routeDetails: 'Expressway Route',
    scheduleDate: '2023-12-10',
    departureTime: '07:30',
    returnTime: '17:00',
    assignedVehicle: 'VEH-003, VEH-004',
    assignedDriver: 'TBD',
    assignedConductor: 'TBD',
    studentCount: 85,
    accompanyingStaff: '4 Class Teachers',
    permissionStatus: 'PARTIAL', // Still waiting on some slips
    emergencyContact: '+91 99999 00000'
  }
];

export const TRIP_TYPE_CONFIGS: Record<string, { bg: string, text: string, label: string }> = {
  PICNIC: { bg: 'rgba(244,63,94,0.1)', text: '#E11D48', label: 'Picnic' }, // Rose
  SPORTS_EVENT: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'Sports Event' }, // Amber
  COMPETITION: { bg: 'rgba(168,85,247,0.1)', text: '#A855F7', label: 'Competition' }, // Purple
  EXAM_CENTER: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'Exam Center' }, // Blue
  EDUCATIONAL_TOUR: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Educational Tour' }, // Emerald
  FIELD_TRIP: { bg: 'rgba(14,165,233,0.1)', text: '#0284C7', label: 'Field Trip' }, // Sky
  SPECIAL_PICKUP_DROP: { bg: 'rgba(99,102,241,0.1)', text: '#4338CA', label: 'Special Request' } // Indigo
};

export const TRIP_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  SCHEDULED: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'Scheduled' },
  IN_TRANSIT: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'In Transit' },
  COMPLETED: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Completed' },
  CANCELLED: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'Cancelled' },
};
