import type { TransportNotification } from '../transport_notifications_types/transport_notifications.types';

export const MOCK_NOTIFICATIONS: TransportNotification[] = [
  {
    id: 'NOTIF-1001',
    category: 'EMERGENCY_ALERT',
    title: 'Critical: Route R-05 Blocked',
    message: 'Due to severe waterlogging, Route R-05 has been blocked. Bus VEH-003 is diverted via Alternate Route B. Expect a 30-min delay in drop-offs.',
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 mins ago
    isRead: false,
    audience: ['PARENTS', 'STAFF'],
    sentBy: 'System (Auto)'
  },
  {
    id: 'NOTIF-1002',
    category: 'BUS_DELAYED',
    title: 'Bus Delayed - Route R-01',
    message: 'Bus VEH-001 is running 15 minutes late due to heavy traffic on Main Road. Apologies for the inconvenience.',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    isRead: false,
    audience: ['PARENTS'],
    sentBy: 'Transport Manager'
  },
  {
    id: 'NOTIF-1003',
    category: 'VEHICLE_MAINTENANCE',
    title: 'Service Reminder: VEH-005',
    message: 'Vehicle VEH-005 is due for regular maintenance in 2 days. Please schedule it with the workshop.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    isRead: true,
    audience: ['STAFF'],
    sentBy: 'System (Auto)'
  },
  {
    id: 'NOTIF-1004',
    category: 'DOCUMENT_EXPIRY',
    title: 'Insurance Expiring Soon',
    message: 'Insurance for Vehicle VEH-002 (MH-12-CD-5678) expires in 7 days. Kindly renew to avoid penalties.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    isRead: true,
    audience: ['STAFF'],
    sentBy: 'System (Auto)'
  },
  {
    id: 'NOTIF-1005',
    category: 'PICKUP_ALERT',
    title: 'Student Picked Up',
    message: 'Aarav Sharma has boarded the bus at Main Road Stop at 07:32 AM.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(), // ~1 day ago
    isRead: true,
    audience: ['PARENTS'],
    sentBy: 'System (Auto)'
  },
  {
    id: 'NOTIF-1006',
    category: 'DRIVER_CHANGED',
    title: 'Driver Reassignment',
    message: 'Rakesh Kumar will be driving Route R-02 today instead of Amit Singh due to a leave request.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    isRead: true,
    audience: ['PARENTS', 'DRIVERS'],
    sentBy: 'Transport Manager'
  }
];

export const NOTIFICATION_CONFIGS: Record<string, { bg: string, text: string, iconColor: string, label: string }> = {
  BUS_DELAYED: { bg: 'rgba(245,158,11,0.1)', text: '#B45309', iconColor: '#F59E0B', label: 'Delay Alert' }, // Amber
  ROUTE_CHANGED: { bg: 'rgba(59,130,246,0.1)', text: '#1D4ED8', iconColor: '#3B82F6', label: 'Route Change' }, // Blue
  VEHICLE_CHANGED: { bg: 'rgba(99,102,241,0.1)', text: '#4338CA', iconColor: '#6366F1', label: 'Vehicle Update' }, // Indigo
  DRIVER_CHANGED: { bg: 'rgba(168,85,247,0.1)', text: '#7E22CE', iconColor: '#A855F7', label: 'Staff Update' }, // Purple
  PICKUP_ALERT: { bg: 'rgba(16,185,129,0.1)', text: '#047857', iconColor: '#10B981', label: 'Pickup Log' }, // Emerald
  DROP_ALERT: { bg: 'rgba(16,185,129,0.1)', text: '#047857', iconColor: '#10B981', label: 'Drop Log' }, // Emerald
  TRANSPORT_ASSIGNMENT: { bg: 'rgba(14,165,233,0.1)', text: '#0369A1', iconColor: '#0EA5E9', label: 'Assignment' }, // Sky
  TRANSPORT_REQUEST: { bg: 'rgba(139,92,246,0.1)', text: '#5B21B6', iconColor: '#8B5CF6', label: 'Request' }, // Violet
  VEHICLE_MAINTENANCE: { bg: 'rgba(236,72,153,0.1)', text: '#BE185D', iconColor: '#EC4899', label: 'Maintenance' }, // Pink
  DOCUMENT_EXPIRY: { bg: 'rgba(244,63,94,0.1)', text: '#E11D48', iconColor: '#F43F5E', label: 'Expiry Alert' }, // Rose
  EMERGENCY_ALERT: { bg: 'rgba(239,68,68,0.1)', text: '#B91C1C', iconColor: '#EF4444', label: 'Emergency' }, // Red (Critical)
  CUSTOM: { bg: 'rgba(107,114,128,0.1)', text: '#374151', iconColor: '#6B7280', label: 'General Announcement' } // Gray
};
