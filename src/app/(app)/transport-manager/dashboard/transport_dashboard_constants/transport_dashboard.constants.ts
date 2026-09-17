import type {
  TransportKPIs,
  TransportTrip,
  TransportMaintenanceAlert,
  TransportDriverStatus,
  TransportFeeSummary,
  TransportEmergencyAlert,
  TransportActivity
} from '../transport_dashboard_types/transport_dashboard.types';

export const TRANSPORT_DASHBOARD_KPIS: TransportKPIs = {
  totalVehicles: 45,
  activeVehicles: 38,
  inactiveVehicles: 2,
  maintenanceVehicles: 5,
  totalRoutes: 24,
  activeRoutes: 22,
  totalStops: 156,
  assignedStudents: 1240
};

export const TRANSPORT_DASHBOARD_TRIPS: TransportTrip[] = [
  {
    id: 'TRP-001',
    routeName: 'Route A - City Center',
    vehicleNumber: 'MH-12-AB-1234',
    driverName: 'Rajesh Kumar',
    status: 'IN_PROGRESS',
    startTime: '07:00 AM',
    endTime: null,
    totalStudents: 45,
    presentStudents: 42
  },
  {
    id: 'TRP-002',
    routeName: 'Route B - North Campus',
    vehicleNumber: 'MH-12-CD-5678',
    driverName: 'Suresh Patil',
    status: 'COMPLETED',
    startTime: '06:30 AM',
    endTime: '08:15 AM',
    totalStudents: 50,
    presentStudents: 48
  },
  {
    id: 'TRP-003',
    routeName: 'Route C - South Block',
    vehicleNumber: 'MH-12-EF-9012',
    driverName: 'Amit Singh',
    status: 'PENDING',
    startTime: '02:00 PM',
    endTime: null,
    totalStudents: 38,
    presentStudents: 0
  },
  {
    id: 'TRP-004',
    routeName: 'Route D - East Wing',
    vehicleNumber: 'MH-12-GH-3456',
    driverName: 'Prakash M',
    status: 'DELAYED',
    startTime: '07:15 AM',
    endTime: null,
    totalStudents: 40,
    presentStudents: 38
  }
];

export const TRANSPORT_MAINTENANCE_ALERTS: TransportMaintenanceAlert[] = [
  {
    id: 'MNT-001',
    vehicleNumber: 'MH-12-AB-1234',
    alertType: 'INSURANCE_EXPIRY',
    dueDate: '2024-05-15',
    severity: 'HIGH',
    description: 'Vehicle Insurance expires in 3 days.'
  },
  {
    id: 'MNT-002',
    vehicleNumber: 'MH-12-CD-5678',
    alertType: 'MAINTENANCE_DUE',
    dueDate: '2024-05-20',
    severity: 'MEDIUM',
    description: 'Scheduled oil change and brake inspection.'
  },
  {
    id: 'MNT-003',
    vehicleNumber: 'MH-12-EF-9012',
    alertType: 'PERMIT_EXPIRY',
    dueDate: '2024-06-01',
    severity: 'LOW',
    description: 'State transport permit renewal due.'
  }
];

export const TRANSPORT_DRIVER_STATUS: TransportDriverStatus[] = [
  { id: 'DRV-101', name: 'Rajesh Kumar', status: 'ON_DUTY', vehicleNumber: 'MH-12-AB-1234', phone: '9876543210' },
  { id: 'DRV-102', name: 'Suresh Patil', status: 'ON_DUTY', vehicleNumber: 'MH-12-CD-5678', phone: '9876543211' },
  { id: 'DRV-103', name: 'Amit Singh', status: 'OFF_DUTY', vehicleNumber: null, phone: '9876543212' },
  { id: 'DRV-104', name: 'Prakash M', status: 'ON_LEAVE', vehicleNumber: null, phone: '9876543213' }
];

export const TRANSPORT_FEE_SUMMARY: TransportFeeSummary[] = [
  { month: 'Jan', collected: 120000, pending: 15000, total: 135000 },
  { month: 'Feb', collected: 115000, pending: 20000, total: 135000 },
  { month: 'Mar', collected: 125000, pending: 10000, total: 135000 },
  { month: 'Apr', collected: 130000, pending: 5000, total: 135000 },
  { month: 'May', collected: 90000, pending: 45000, total: 135000 }
];

export const TRANSPORT_EMERGENCY_ALERTS: TransportEmergencyAlert[] = [
  {
    id: 'EMG-001',
    vehicleNumber: 'MH-12-GH-3456',
    driverName: 'Prakash M',
    route: 'Route D - East Wing',
    message: 'Bus broke down near Highway junction. Need replacement vehicle.',
    time: '07:30 AM',
    status: 'UNRESOLVED'
  }
];

export const TRANSPORT_RECENT_ACTIVITIES: TransportActivity[] = [
  { id: 'ACT-001', title: 'Route Added', description: 'New route "West End" added to active routes.', time: '10:00 AM', type: 'SUCCESS' },
  { id: 'ACT-002', title: 'Driver Assigned', description: 'Amit Singh assigned to Route C.', time: '09:15 AM', type: 'INFO' },
  { id: 'ACT-003', title: 'Maintenance Completed', description: 'MH-12-XX-1111 completed full service.', time: '08:30 AM', type: 'SUCCESS' },
  { id: 'ACT-004', title: 'Late Arrival', description: 'Route D arrived 15 mins late due to traffic.', time: '08:00 AM', type: 'WARNING' }
];
