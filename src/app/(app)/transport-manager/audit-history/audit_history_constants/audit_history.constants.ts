import type { AuditRecord } from '../audit_history_types/audit_history.types';

export const MOCK_AUDIT_LOGS: AuditRecord[] = [
  {
    id: 'AUD-000001',
    entityType: 'ROUTE',
    actionType: 'UPDATE',
    entityId: 'RTE-101',
    entityName: 'Route R-01 (North Campus)',
    description: 'Modified route timing and added 2 new stops.',
    performedByUserId: 'USR-899',
    performedByUserName: 'Rajesh Verma',
    performedByUserRole: 'Transport Manager',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    ipAddress: '192.168.1.105',
    device: 'Chrome / Windows 11',
    oldValues: {
      pickupTime: '07:30',
      stopsCount: 12
    },
    newValues: {
      pickupTime: '07:15',
      stopsCount: 14
    }
  },
  {
    id: 'AUD-000002',
    entityType: 'STUDENT_ASSIGNMENT',
    actionType: 'CREATE',
    entityId: 'STU-9821',
    entityName: 'Aarav Patel (Class 5-A)',
    description: 'Assigned student to Route R-05, Stop: Green Park.',
    performedByUserId: 'USR-902',
    performedByUserName: 'Meera Sharma',
    performedByUserRole: 'Transport Admin',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    ipAddress: '192.168.1.112',
    device: 'Safari / macOS',
    oldValues: null,
    newValues: {
      routeId: 'R-05',
      stopName: 'Green Park',
      monthlyFee: '₹1200'
    }
  },
  {
    id: 'AUD-000003',
    entityType: 'VEHICLE',
    actionType: 'STATUS_CHANGE',
    entityId: 'VEH-003',
    entityName: 'MH-12-CD-5678 (Tata Magic)',
    description: 'Changed vehicle status from ACTIVE to IN_MAINTENANCE.',
    performedByUserId: 'USR-899',
    performedByUserName: 'Rajesh Verma',
    performedByUserRole: 'Transport Manager',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    ipAddress: '192.168.1.105',
    device: 'Chrome / Windows 11',
    oldValues: {
      status: 'ACTIVE'
    },
    newValues: {
      status: 'IN_MAINTENANCE',
      reason: 'Scheduled brake pad replacement'
    }
  },
  {
    id: 'AUD-000004',
    entityType: 'TRANSPORT_FEE',
    actionType: 'UPDATE',
    entityId: 'FEE-SLAB-2',
    entityName: 'Zone B Transport Fee',
    description: 'Increased monthly transport fee for Zone B by ₹100.',
    performedByUserId: 'USR-101',
    performedByUserName: 'System Admin',
    performedByUserRole: 'Super Admin',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    ipAddress: '114.143.120.45',
    device: 'Firefox / Linux',
    oldValues: {
      amount: 1400
    },
    newValues: {
      amount: 1500
    }
  },
  {
    id: 'AUD-000005',
    entityType: 'DRIVER_ASSIGNMENT',
    actionType: 'UPDATE',
    entityId: 'VEH-001',
    entityName: 'Bus VEH-001',
    description: 'Reassigned primary driver due to medical leave.',
    performedByUserId: 'USR-899',
    performedByUserName: 'Rajesh Verma',
    performedByUserRole: 'Transport Manager',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    ipAddress: '192.168.1.105',
    device: 'Mobile Safari / iOS',
    oldValues: {
      primaryDriver: 'Amit Kumar (DRV-01)'
    },
    newValues: {
      primaryDriver: 'Suresh Singh (DRV-04)'
    }
  }
];

export const ENTITY_TYPE_CONFIGS: Record<string, { label: string, color: string, bg: string, icon: string }> = {
  VEHICLE: { label: 'Vehicle', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)', icon: 'Bus' },
  ROUTE: { label: 'Route', color: '#10B981', bg: 'rgba(16,185,129,0.1)', icon: 'Map' },
  STUDENT_ASSIGNMENT: { label: 'Student Assign', color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)', icon: 'UserCheck' },
  DRIVER_ASSIGNMENT: { label: 'Driver Assign', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', icon: 'SteeringWheel' },
  STOP: { label: 'Stop', color: '#14B8A6', bg: 'rgba(20,184,166,0.1)', icon: 'MapPin' },
  TRANSPORT_FEE: { label: 'Transport Fee', color: '#06B6D4', bg: 'rgba(6,182,212,0.1)', icon: 'IndianRupee' },
  TRIP: { label: 'Trip', color: '#6366F1', bg: 'rgba(99,102,241,0.1)', icon: 'Navigation' },
  MAINTENANCE: { label: 'Maintenance', color: '#F97316', bg: 'rgba(249,115,22,0.1)', icon: 'Wrench' },
  INCIDENT: { label: 'Incident', color: '#EF4444', bg: 'rgba(239,68,68,0.1)', icon: 'AlertTriangle' },
  MANUAL_ADJUSTMENT: { label: 'Manual Edit', color: '#6B7280', bg: 'rgba(107,114,128,0.1)', icon: 'Edit3' }
};

export const ACTION_TYPE_CONFIGS: Record<string, { label: string, color: string, bg: string }> = {
  CREATE: { label: 'Created', color: '#10B981', bg: 'rgba(16,185,129,0.1)' },
  UPDATE: { label: 'Updated', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)' },
  DELETE: { label: 'Deleted', color: '#EF4444', bg: 'rgba(239,68,68,0.1)' },
  STATUS_CHANGE: { label: 'Status Change', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)' }
};
