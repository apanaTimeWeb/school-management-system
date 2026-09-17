export type IncidentType = 'BREAKDOWN' | 'ACCIDENT' | 'ROUTE_EMERGENCY' | 'STUDENT_EMERGENCY' | 'DRIVER_EMERGENCY';
export type IncidentSeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type IncidentStatus = 'REPORTED' | 'IN_PROGRESS' | 'RESOLVED' | 'UNDER_INVESTIGATION';

export interface TransportIncident {
  id: string;
  incidentType: IncidentType;
  severity: IncidentSeverity;
  status: IncidentStatus;
  
  vehicleId: string | null;
  vehicleNumber: string | null;
  routeId: string | null;
  
  dateTime: string; // ISO String or specific format
  location: string;
  
  description: string;
  actionTaken: string | null;
  followUpRequired: boolean;
  
  reportedBy: string; // Staff/Driver name
  emergencyContactNotified: boolean;
  
  auditTrail: AuditLog[];
}

export interface AuditLog {
  timestamp: string;
  action: string; // e.g., "Status changed to RESOLVED", "Parents notified"
  performedBy: string;
}

export interface TransportIncidentFormData {
  incidentType: IncidentType;
  severity: IncidentSeverity;
  status: IncidentStatus;
  
  vehicleId: string;
  vehicleNumber: string;
  routeId: string;
  
  dateTime: string;
  location: string;
  
  description: string;
  actionTaken: string;
  followUpRequired: boolean;
  
  reportedBy: string;
  emergencyContactNotified: boolean;
}
