import type { TransportCommunication } from '../transport_communication_types/transport_communication.types';

export const MOCK_COMMUNICATIONS: TransportCommunication[] = [
  {
    id: 'MSG-2023-001',
    type: 'EMERGENCY_COMMUNICATION',
    title: 'URGENT: Heavy Rain - Transport Suspended',
    message: 'Due to severe waterlogging across the city, all school transport services for the afternoon shift are suspended. Parents are requested to make alternate arrangements.',
    targetAudience: 'All Parents',
    channel: ['SMS', 'APP_PUSH'],
    sentBy: 'Admin User',
    sentAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    status: 'SENT',
    deliveryStats: {
      totalTargeted: 1250,
      delivered: 1245,
      failed: 5
    }
  },
  {
    id: 'MSG-2023-002',
    type: 'ROUTE_ANNOUNCEMENT',
    title: 'Route R-05 Diversion Notice',
    message: 'Starting Monday, Route R-05 will be temporarily diverted via Park Street due to road construction. Pickup times remain unchanged.',
    targetAudience: 'Route R-05 Parents',
    channel: ['APP_PUSH', 'EMAIL'],
    sentBy: 'Transport Manager',
    sentAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    status: 'SENT',
    deliveryStats: {
      totalTargeted: 45,
      delivered: 45,
      failed: 0
    }
  },
  {
    id: 'MSG-2023-003',
    type: 'STAFF_COMMUNICATION',
    title: 'Mandatory Safety Meeting',
    message: 'All drivers and conductors must attend the monthly safety and compliance meeting this Saturday at 10:00 AM in the Staff Room.',
    targetAudience: 'All Drivers & Conductors',
    channel: ['SMS'],
    sentBy: 'Transport Manager',
    sentAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    status: 'SENT',
    deliveryStats: {
      totalTargeted: 30,
      delivered: 30,
      failed: 0
    }
  },
  {
    id: 'MSG-2023-004',
    type: 'TRANSPORT_NOTICE',
    title: 'Term 2 Transport Fee Reminder',
    message: 'Please ensure Term 2 transport fees are cleared by 15th Nov to avoid late fines and suspension of transport services.',
    targetAudience: 'Defaulters',
    channel: ['SMS', 'EMAIL', 'APP_PUSH'],
    sentBy: 'Accountant',
    sentAt: null,
    status: 'SCHEDULED', // Scheduled for tomorrow
    deliveryStats: null
  },
  {
    id: 'MSG-2023-005',
    type: 'PARENT_NOTIFICATION',
    title: 'Change in Uniform Code for Transport',
    message: 'Students are required to carry their transport ID cards visibly at all times while boarding. No ID, no entry policy starts next week.',
    targetAudience: 'All Parents',
    channel: ['APP_PUSH'],
    sentBy: 'Principal',
    sentAt: null,
    status: 'DRAFT',
    deliveryStats: null
  }
];

export const COMM_TYPE_CONFIGS: Record<string, { bg: string, text: string, label: string }> = {
  TRANSPORT_NOTICE: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'General Notice' }, // Blue
  PARENT_NOTIFICATION: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Parent Alert' }, // Emerald
  STAFF_COMMUNICATION: { bg: 'rgba(168,85,247,0.1)', text: '#A855F7', label: 'Staff Comms' }, // Purple
  ROUTE_ANNOUNCEMENT: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'Route Update' }, // Amber
  EMERGENCY_COMMUNICATION: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'Emergency Alert' } // Red
};

export const COMM_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  SENT: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Sent' },
  SCHEDULED: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'Scheduled' },
  DRAFT: { bg: 'rgba(107,114,128,0.1)', text: '#6B7280', label: 'Draft' },
  FAILED: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'Failed' },
};
