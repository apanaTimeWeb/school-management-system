import type { TransportDriver } from '../transport_drivers_types/transport_drivers.types';

export const MOCK_TRANSPORT_DRIVERS: TransportDriver[] = [
  {
    id: 'DRV-101',
    employeeId: 'EMP-T-001',
    name: 'Rajesh Kumar',
    contact: '9876543210',
    emergencyContact: '9876543299',
    licenseNumber: 'MH1220101234567',
    licenseType: 'HMV',
    licenseExpiry: '2026-05-15',
    experienceYears: 8,
    status: 'ACTIVE',
    assignedVehicleId: 'VEH-001',
    assignedVehicleNumber: 'MH-12-AB-1234',
    assignedRouteId: 'RT-01',
    assignedRouteName: 'Route A - City Center',
    documentsComplete: true,
    avatarUrl: null
  },
  {
    id: 'DRV-102',
    employeeId: 'EMP-T-002',
    name: 'Suresh Patil',
    contact: '9876543211',
    emergencyContact: '9876543288',
    licenseNumber: 'MH1220159876543',
    licenseType: 'HMV',
    licenseExpiry: '2024-11-20',
    experienceYears: 12,
    status: 'ACTIVE',
    assignedVehicleId: 'VEH-002',
    assignedVehicleNumber: 'MH-12-CD-5678',
    assignedRouteId: 'RT-02',
    assignedRouteName: 'Route B - North Campus',
    documentsComplete: false,
    avatarUrl: null
  },
  {
    id: 'DRV-103',
    employeeId: 'EMP-T-003',
    name: 'Amit Singh',
    contact: '9876543212',
    emergencyContact: '9876543277',
    licenseNumber: 'MH1420185544332',
    licenseType: 'TRANS',
    licenseExpiry: '2025-01-10',
    experienceYears: 5,
    status: 'ON_LEAVE',
    assignedVehicleId: null,
    assignedVehicleNumber: null,
    assignedRouteId: null,
    assignedRouteName: null,
    documentsComplete: true,
    avatarUrl: null
  },
  {
    id: 'DRV-104',
    employeeId: 'EMP-T-004',
    name: 'Prakash M',
    contact: '9876543213',
    emergencyContact: '9876543266',
    licenseNumber: 'MH1220124433221',
    licenseType: 'LMV',
    licenseExpiry: '2022-08-15', // Expired mock
    experienceYears: 10,
    status: 'SUSPENDED',
    assignedVehicleId: null,
    assignedVehicleNumber: null,
    assignedRouteId: null,
    assignedRouteName: null,
    documentsComplete: true,
    avatarUrl: null
  }
];

export const DRIVER_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  ACTIVE: { bg: '#064E3B', text: '#22C55E', label: 'Active' },
  ON_LEAVE: { bg: '#1E3A5F', text: '#3B82F6', label: 'On Leave' },
  SUSPENDED: { bg: '#450A0A', text: '#EF4444', label: 'Suspended' },
  INACTIVE: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Inactive' },
};
