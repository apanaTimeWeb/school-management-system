import type { TransportIncident } from '../transport_safety_types/transport_safety.types';

export const MOCK_INCIDENT_RECORDS: TransportIncident[] = [
  {
    id: 'INC-2023-001',
    incidentType: 'BREAKDOWN',
    severity: 'MEDIUM',
    status: 'RESOLVED',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    routeId: 'R-01',
    dateTime: '2023-10-15T07:30:00',
    location: 'Main Highway, near Sector 4',
    description: 'Bus engine overheated and stopped working midway during morning pickup.',
    actionTaken: 'Backup vehicle sent immediately. Original bus towed to workshop.',
    followUpRequired: false,
    reportedBy: 'Driver Rajesh',
    emergencyContactNotified: true,
    auditTrail: [
      { timestamp: '2023-10-15T07:35:00', action: 'Incident reported by Driver', performedBy: 'System' },
      { timestamp: '2023-10-15T07:40:00', action: 'Backup vehicle assigned & parents notified via SMS', performedBy: 'Transport Admin' },
      { timestamp: '2023-10-15T10:00:00', action: 'Status changed to RESOLVED', performedBy: 'Transport Admin' }
    ]
  },
  {
    id: 'INC-2023-002',
    incidentType: 'ACCIDENT',
    severity: 'CRITICAL',
    status: 'UNDER_INVESTIGATION',
    vehicleId: 'VEH-003',
    vehicleNumber: 'MH-12-EF-9012',
    routeId: 'R-05',
    dateTime: '2023-10-18T15:45:00',
    location: 'City Center Intersection',
    description: 'Minor collision with a two-wheeler. No injuries reported to students, but bus sustained front-bumper damage.',
    actionTaken: 'Police notified. Students transferred to another bus safely.',
    followUpRequired: true,
    reportedBy: 'Conductor Amit',
    emergencyContactNotified: true,
    auditTrail: [
      { timestamp: '2023-10-18T15:50:00', action: 'Incident reported by Conductor', performedBy: 'System' },
      { timestamp: '2023-10-18T15:55:00', action: 'Emergency contacts & School Principal notified', performedBy: 'Auto-Alert' },
      { timestamp: '2023-10-18T16:30:00', action: 'Status changed to UNDER_INVESTIGATION', performedBy: 'Safety Officer' }
    ]
  },
  {
    id: 'INC-2023-003',
    incidentType: 'STUDENT_EMERGENCY',
    severity: 'HIGH',
    status: 'IN_PROGRESS',
    vehicleId: 'VEH-002',
    vehicleNumber: 'MH-12-CD-5678',
    routeId: 'R-02',
    dateTime: new Date().toISOString(),
    location: 'Drop point: Railway Colony',
    description: 'Student felt severely nauseous and fainted on the bus.',
    actionTaken: 'First aid applied. Bus rerouted to nearest clinic.',
    followUpRequired: true,
    reportedBy: 'Conductor Sunita',
    emergencyContactNotified: true,
    auditTrail: [
      { timestamp: new Date().toISOString(), action: 'Incident logged. First aid protocol activated.', performedBy: 'Transport Admin' }
    ]
  },
  {
    id: 'INC-2023-004',
    incidentType: 'ROUTE_EMERGENCY',
    severity: 'LOW',
    status: 'RESOLVED',
    vehicleId: 'VEH-005',
    vehicleNumber: 'MH-12-IJ-7890',
    routeId: 'R-08',
    dateTime: '2023-10-10T08:00:00',
    location: 'River Bridge',
    description: 'Route blocked due to heavy waterlogging.',
    actionTaken: 'Bus diverted through alternate route. Parents notified of 30 min delay.',
    followUpRequired: false,
    reportedBy: 'Driver Suresh',
    emergencyContactNotified: false,
    auditTrail: [
      { timestamp: '2023-10-10T08:05:00', action: 'Route deviation alert broadcasted.', performedBy: 'Transport Admin' }
    ]
  }
];

export const SEVERITY_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  LOW: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'Low' }, // Blue
  MEDIUM: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'Medium' }, // Amber
  HIGH: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'High' }, // Red
  CRITICAL: { bg: 'rgba(153,27,27,0.1)', text: '#991B1B', label: 'Critical' }, // Dark Red
};

export const INCIDENT_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  REPORTED: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'Reported' },
  IN_PROGRESS: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'In Progress' },
  UNDER_INVESTIGATION: { bg: 'rgba(168,85,247,0.1)', text: '#A855F7', label: 'Investigating' },
  RESOLVED: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Resolved' },
};

export const INCIDENT_TYPE_LABELS: Record<string, string> = {
  BREAKDOWN: 'Vehicle Breakdown',
  ACCIDENT: 'Accident',
  ROUTE_EMERGENCY: 'Route Blockage/Emergency',
  STUDENT_EMERGENCY: 'Student Medical Emergency',
  DRIVER_EMERGENCY: 'Driver/Staff Emergency',
};
