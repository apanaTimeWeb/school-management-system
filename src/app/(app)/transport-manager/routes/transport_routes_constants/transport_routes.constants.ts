import type { TransportRoute } from '../transport_routes_types/transport_routes.types';

export const MOCK_TRANSPORT_ROUTES: TransportRoute[] = [
  {
    id: 'RT-001',
    routeCode: 'RTA-01',
    routeName: 'City Center Express',
    startingPoint: 'Main Depot',
    endingPoint: 'Central Square',
    routeDistanceKm: 15.5,
    estimatedDurationMins: 45,
    status: 'ACTIVE',
    assignedVehicleId: 'VEH-001',
    assignedVehicleNumber: 'MH-12-AB-1234',
    assignedDriverId: 'DRV-101',
    assignedDriverName: 'Rajesh Kumar',
    assignedConductorId: 'CND-201',
    assignedConductorName: 'Sanjay Verma',
    totalStops: 12,
    studentsAssigned: 45
  },
  {
    id: 'RT-002',
    routeCode: 'RTB-02',
    routeName: 'North Campus Loop',
    startingPoint: 'North Gate',
    endingPoint: 'Science Block',
    routeDistanceKm: 22.0,
    estimatedDurationMins: 60,
    status: 'ACTIVE',
    assignedVehicleId: 'VEH-002',
    assignedVehicleNumber: 'MH-12-CD-5678',
    assignedDriverId: 'DRV-102',
    assignedDriverName: 'Suresh Patil',
    assignedConductorId: null,
    assignedConductorName: null,
    totalStops: 18,
    studentsAssigned: 50
  },
  {
    id: 'RT-003',
    routeCode: 'RTC-03',
    routeName: 'South Township Route',
    startingPoint: 'Main Depot',
    endingPoint: 'South Residential',
    routeDistanceKm: 30.5,
    estimatedDurationMins: 75,
    status: 'TEMPORARY_SUSPENDED',
    assignedVehicleId: null,
    assignedVehicleNumber: null,
    assignedDriverId: null,
    assignedDriverName: null,
    assignedConductorId: null,
    assignedConductorName: null,
    totalStops: 24,
    studentsAssigned: 35
  },
  {
    id: 'RT-004',
    routeCode: 'RTD-04',
    routeName: 'West Highway Shuttle',
    startingPoint: 'West Gate',
    endingPoint: 'Industrial Area',
    routeDistanceKm: 18.2,
    estimatedDurationMins: 40,
    status: 'UNDER_MAINTENANCE',
    assignedVehicleId: 'VEH-003',
    assignedVehicleNumber: 'MH-12-EF-9012',
    assignedDriverId: 'DRV-104',
    assignedDriverName: 'Prakash M',
    assignedConductorId: 'CND-202',
    assignedConductorName: 'Anil Desai',
    totalStops: 10,
    studentsAssigned: 28
  }
];

export const ROUTE_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  ACTIVE: { bg: '#064E3B', text: '#22C55E', label: 'Active' },
  INACTIVE: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Inactive' },
  TEMPORARY_SUSPENDED: { bg: '#451A03', text: '#F59E0B', label: 'Suspended' },
  UNDER_MAINTENANCE: { bg: '#450A0A', text: '#EF4444', label: 'Route Maintenance' },
};
