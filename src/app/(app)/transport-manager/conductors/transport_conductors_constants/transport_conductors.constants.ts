import type { TransportConductor } from '../transport_conductors_types/transport_conductors.types';

export const MOCK_TRANSPORT_CONDUCTORS: TransportConductor[] = [
  {
    id: 'CND-201',
    employeeId: 'EMP-T-201',
    name: 'Sanjay Verma',
    contact: '9876500001',
    emergencyContact: '9876500011',
    shift: 'SPLIT',
    status: 'ACTIVE',
    assignedVehicleId: 'VEH-001',
    assignedVehicleNumber: 'MH-12-AB-1234',
    assignedRouteId: 'RT-01',
    assignedRouteName: 'Route A - City Center',
    documentsComplete: true,
    todaysAttendance: 'PRESENT',
    avatarUrl: null
  },
  {
    id: 'CND-202',
    employeeId: 'EMP-T-202',
    name: 'Anil Desai',
    contact: '9876500002',
    emergencyContact: '9876500022',
    shift: 'MORNING',
    status: 'ACTIVE',
    assignedVehicleId: 'VEH-002',
    assignedVehicleNumber: 'MH-12-CD-5678',
    assignedRouteId: 'RT-02',
    assignedRouteName: 'Route B - North Campus',
    documentsComplete: false,
    todaysAttendance: 'LATE',
    avatarUrl: null
  },
  {
    id: 'CND-203',
    employeeId: 'EMP-T-203',
    name: 'Pramod Kumar',
    contact: '9876500003',
    emergencyContact: '9876500033',
    shift: 'EVENING',
    status: 'ON_LEAVE',
    assignedVehicleId: null,
    assignedVehicleNumber: null,
    assignedRouteId: null,
    assignedRouteName: null,
    documentsComplete: true,
    todaysAttendance: 'ABSENT',
    avatarUrl: null
  },
  {
    id: 'CND-204',
    employeeId: 'EMP-T-204',
    name: 'Vishal Singh',
    contact: '9876500004',
    emergencyContact: '9876500044',
    shift: 'SPLIT',
    status: 'SUSPENDED',
    assignedVehicleId: null,
    assignedVehicleNumber: null,
    assignedRouteId: null,
    assignedRouteName: null,
    documentsComplete: true,
    todaysAttendance: null,
    avatarUrl: null
  }
];

export const CONDUCTOR_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  ACTIVE: { bg: '#064E3B', text: '#22C55E', label: 'Active' },
  ON_LEAVE: { bg: '#1E3A5F', text: '#3B82F6', label: 'On Leave' },
  SUSPENDED: { bg: '#450A0A', text: '#EF4444', label: 'Suspended' },
  INACTIVE: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Inactive' },
};

export const ATTENDANCE_COLORS: Record<string, { text: string, label: string, iconColor: string }> = {
  PRESENT: { text: '#22C55E', label: 'Present', iconColor: 'text-emerald-500' },
  ABSENT: { text: '#EF4444', label: 'Absent', iconColor: 'text-red-500' },
  HALF_DAY: { text: '#F59E0B', label: 'Half Day', iconColor: 'text-amber-500' },
  LATE: { text: '#F59E0B', label: 'Late', iconColor: 'text-amber-500' },
};
