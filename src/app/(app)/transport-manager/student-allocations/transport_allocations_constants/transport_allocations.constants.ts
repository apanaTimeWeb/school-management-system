import type { TransportAllocation } from '../transport_allocations_types/transport_allocations.types';

export const MOCK_TRANSPORT_ALLOCATIONS: TransportAllocation[] = [
  {
    id: 'ALLOC-001',
    studentId: 'STU-1001',
    studentName: 'Aarav Sharma',
    classSection: 'Class 5 - A',
    guardianName: 'Rahul Sharma',
    guardianContact: '9876543210',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    stopId: 'STP-001',
    stopName: 'Main Road',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    pickupPoint: 'Main Road Checkpost',
    dropPoint: 'Main Road Checkpost',
    shiftPreference: 'BOTH',
    startDate: '2023-04-01',
    endDate: '2024-03-31',
    status: 'ACTIVE'
  },
  {
    id: 'ALLOC-002',
    studentId: 'STU-1002',
    studentName: 'Priya Patel',
    classSection: 'Class 8 - B',
    guardianName: 'Vikram Patel',
    guardianContact: '9876543211',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    stopId: 'STP-002',
    stopName: 'Railway Colony',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    pickupPoint: 'Colony Gate 2',
    dropPoint: 'Colony Gate 2',
    shiftPreference: 'MORNING_ONLY',
    startDate: '2023-04-01',
    endDate: '2024-03-31',
    status: 'ACTIVE'
  },
  {
    id: 'ALLOC-003',
    studentId: 'STU-1003',
    studentName: 'Rohan Gupta',
    classSection: 'Class 3 - C',
    guardianName: 'Sunil Gupta',
    guardianContact: '9876543212',
    routeId: 'RT-002',
    routeName: 'Route R-02 (North Campus)',
    stopId: 'STP-005',
    stopName: 'Science Block',
    vehicleId: 'VEH-002',
    vehicleNumber: 'MH-12-CD-5678',
    pickupPoint: 'North Gate ATM',
    dropPoint: 'North Gate ATM',
    shiftPreference: 'BOTH',
    startDate: '2023-06-15',
    endDate: '2024-03-31',
    status: 'INACTIVE'
  }
];

export const ALLOCATION_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  ACTIVE: { bg: '#064E3B', text: '#22C55E', label: 'Active' },
  INACTIVE: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Inactive' },
  SUSPENDED: { bg: '#450A0A', text: '#EF4444', label: 'Suspended' },
};

export const SHIFT_PREF_COLORS: Record<string, { text: string, label: string }> = {
  BOTH: { text: '#3B82F6', label: 'Both (Morning & Evening)' },
  MORNING_ONLY: { text: '#EAB308', label: 'Morning Pickup Only' },
  EVENING_ONLY: { text: '#F97316', label: 'Evening Drop Only' },
};
