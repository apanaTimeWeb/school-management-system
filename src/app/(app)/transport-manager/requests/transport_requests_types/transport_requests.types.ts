export type TransportRequestType = 
  | 'NEW_TRANSPORT' 
  | 'ROUTE_CHANGE' 
  | 'STOP_CHANGE' 
  | 'VEHICLE_CHANGE' 
  | 'TRANSPORT_START' 
  | 'TRANSPORT_STOP' 
  | 'TEMPORARY_TRANSPORT';

export type TransportRequestStatus = 
  | 'PENDING' 
  | 'UNDER_REVIEW' 
  | 'APPROVED' 
  | 'REJECTED' 
  | 'COMPLETED' 
  | 'CANCELLED';

export interface TransportRequest {
  id: string;
  requestDate: string;
  studentId: string;
  studentName: string;
  classSection: string;
  guardianName: string;
  guardianContact: string;
  
  requestType: TransportRequestType;
  
  // Depending on request type, current and requested might be populated
  currentDetails: string | null;
  requestedDetails: string | null;
  
  reason: string;
  hasAttachment: boolean;
  attachmentUrl: string | null;
  
  status: TransportRequestStatus;
  adminRemarks: string | null;
}

export interface TransportRequestFormData {
  studentId: string;
  studentName: string;
  requestType: TransportRequestType;
  currentDetails: string;
  requestedDetails: string;
  reason: string;
  status: TransportRequestStatus;
}
