export type AuditEntityType = 
  | 'VEHICLE'
  | 'ROUTE'
  | 'STUDENT_ASSIGNMENT'
  | 'DRIVER_ASSIGNMENT'
  | 'STOP'
  | 'TRANSPORT_FEE'
  | 'TRIP'
  | 'MAINTENANCE'
  | 'INCIDENT'
  | 'MANUAL_ADJUSTMENT';

export type AuditActionType = 'CREATE' | 'UPDATE' | 'DELETE' | 'STATUS_CHANGE';

export interface AuditRecord {
  id: string;
  entityType: AuditEntityType;
  actionType: AuditActionType;
  
  entityId: string;
  entityName: string; // e.g. "Route R-01" or "Vehicle MH-12-1234"
  
  description: string; // What happened
  
  // Who did it
  performedByUserId: string;
  performedByUserName: string;
  performedByUserRole: string;
  
  // When and Where
  timestamp: string; // ISO String
  ipAddress: string;
  device: string;
  
  // Payload for diffing
  oldValues: Record<string, any> | null;
  newValues: Record<string, any> | null;
}
