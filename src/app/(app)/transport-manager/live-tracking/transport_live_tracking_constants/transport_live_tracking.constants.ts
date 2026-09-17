import type { LiveVehicle } from '../transport_live_tracking_types/transport_live_tracking.types';

export const MOCK_LIVE_VEHICLES: LiveVehicle[] = [
  {
    id: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    driverName: 'Rajesh Kumar',
    contactNumber: '9876543210',
    routeId: 'RT-001',
    routeName: 'Route R-01 (City Center)',
    currentStopId: 'STP-001',
    currentStopName: 'Main Road Checkpost',
    nextStopName: 'Railway Colony',
    speedKmh: 42,
    estimatedArrivalNextStop: '4 mins',
    tripStatus: 'IN_TRANSIT',
    routeDeviationWarning: false,
    geoFenceViolation: false,
    lastUpdatedTime: 'Just now',
    trackingStatus: 'ON_ROUTE',
    lat: 18.5204,
    lng: 73.8567
  },
  {
    id: 'VEH-002',
    vehicleNumber: 'MH-12-CD-5678',
    driverName: 'Suresh Patil',
    contactNumber: '9876543211',
    routeId: 'RT-002',
    routeName: 'Route R-02 (North Campus)',
    currentStopId: null,
    currentStopName: null,
    nextStopName: 'Science Block Gate',
    speedKmh: 0,
    estimatedArrivalNextStop: '12 mins',
    tripStatus: 'IN_TRANSIT',
    routeDeviationWarning: true, // deviated
    geoFenceViolation: false,
    lastUpdatedTime: '2 mins ago',
    trackingStatus: 'DEVIATED',
    lat: 18.5314,
    lng: 73.8446
  },
  {
    id: 'VEH-003',
    vehicleNumber: 'MH-12-EF-9012',
    driverName: 'Prakash M',
    contactNumber: '9876543212',
    routeId: 'RT-003',
    routeName: 'Route R-03 (South Route)',
    currentStopId: 'STP-010',
    currentStopName: 'South Depot',
    nextStopName: null,
    speedKmh: 0,
    estimatedArrivalNextStop: null,
    tripStatus: 'SCHEDULED',
    routeDeviationWarning: false,
    geoFenceViolation: true, // out of bounds
    lastUpdatedTime: '15 mins ago',
    trackingStatus: 'STOPPED',
    lat: 18.4966,
    lng: 73.8587
  },
  {
    id: 'VEH-004',
    vehicleNumber: 'MH-12-GH-3456',
    driverName: 'Amit Singh',
    contactNumber: '9876543213',
    routeId: 'RT-SPC',
    routeName: 'Stadium Event',
    currentStopId: null,
    currentStopName: null,
    nextStopName: null,
    speedKmh: 0,
    estimatedArrivalNextStop: null,
    tripStatus: 'COMPLETED',
    routeDeviationWarning: false,
    geoFenceViolation: false,
    lastUpdatedTime: '1 hour ago',
    trackingStatus: 'OFFLINE',
    lat: 18.5111,
    lng: 73.8690
  }
];

export const TRACKING_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  ON_ROUTE: { bg: '#064E3B', text: '#22C55E', label: 'On Route' }, // Green
  IDLE: { bg: '#451A03', text: '#F59E0B', label: 'Idle' }, // Amber
  STOPPED: { bg: '#1E3A5F', text: '#3B82F6', label: 'Stopped' }, // Blue
  OFFLINE: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Offline' }, // Gray
  DEVIATED: { bg: '#450A0A', text: '#EF4444', label: 'Deviated' }, // Red
};
