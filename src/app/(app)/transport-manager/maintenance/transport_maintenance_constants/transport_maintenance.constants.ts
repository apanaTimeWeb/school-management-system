import type { TransportMaintenance } from '../transport_maintenance_types/transport_maintenance.types';

export const MOCK_MAINTENANCE_RECORDS: TransportMaintenance[] = [
  {
    id: 'MNT-1001',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    type: 'SCHEDULED_SERVICE',
    status: 'COMPLETED',
    serviceDate: '2023-10-15',
    nextServiceDate: '2024-04-15',
    workshopName: 'City Motors Authorized Service',
    mechanicName: 'Ramesh Singh',
    partsCost: 15000,
    labourCost: 3500,
    totalCost: 18500,
    partsReplaced: 'Engine Oil, Oil Filter, Air Filter, Wipers',
    remarks: 'Routine 40,000 km service completed. Next due at 50,000 km.'
  },
  {
    id: 'MNT-1002',
    vehicleId: 'VEH-002',
    vehicleNumber: 'MH-12-CD-5678',
    type: 'BREAKDOWN',
    status: 'IN_PROGRESS',
    serviceDate: new Date().toISOString().split('T')[0],
    nextServiceDate: null,
    workshopName: 'Highway Auto Repair',
    mechanicName: 'Ali Khan',
    partsCost: 22000,
    labourCost: 4000,
    totalCost: 26000,
    partsReplaced: 'Radiator, Coolant Hose',
    remarks: 'Vehicle broke down on Route 2 due to overheating. Radiator replacement ongoing.'
  },
  {
    id: 'MNT-1003',
    vehicleId: 'VEH-003',
    vehicleNumber: 'MH-12-EF-9012',
    type: 'INSPECTION',
    status: 'SCHEDULED',
    serviceDate: '2023-11-20',
    nextServiceDate: '2024-05-20',
    workshopName: 'School Internal Depot',
    mechanicName: 'Depot Staff',
    partsCost: 0,
    labourCost: 0,
    totalCost: 0,
    partsReplaced: null,
    remarks: 'Pre-winter safety inspection. Checking tires, brakes, and heaters.'
  },
  {
    id: 'MNT-1004',
    vehicleId: 'VEH-004',
    vehicleNumber: 'MH-12-GH-3456',
    type: 'REPAIR',
    status: 'OVERDUE',
    serviceDate: '2023-10-01',
    nextServiceDate: null,
    workshopName: 'Global Tyres & Alignment',
    mechanicName: null,
    partsCost: 12000,
    labourCost: 1000,
    totalCost: 13000,
    partsReplaced: '2 Rear Tyres',
    remarks: 'Tyre tread is low, replacement is overdue by 2 weeks.'
  }
];

export const MAINTENANCE_TYPE_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  SCHEDULED_SERVICE: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'Scheduled Service' }, // Blue
  INSPECTION: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Inspection' }, // Emerald
  REPAIR: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'Repair' }, // Amber
  BREAKDOWN: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'Breakdown' }, // Red
};

export const MAINTENANCE_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  COMPLETED: { bg: '#064E3B', text: '#22C55E', label: 'Completed' }, // Emerald
  IN_PROGRESS: { bg: '#1E3A5F', text: '#3B82F6', label: 'In Progress' }, // Blue
  SCHEDULED: { bg: '#451A03', text: '#F59E0B', label: 'Scheduled' }, // Amber
  OVERDUE: { bg: '#450A0A', text: '#EF4444', label: 'Overdue' }, // Red
};
