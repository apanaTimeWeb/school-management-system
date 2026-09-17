export type CommunicationType = 
  | 'TRANSPORT_NOTICE'
  | 'PARENT_NOTIFICATION'
  | 'STAFF_COMMUNICATION'
  | 'ROUTE_ANNOUNCEMENT'
  | 'EMERGENCY_COMMUNICATION';

export type CommunicationChannel = 'SMS' | 'EMAIL' | 'APP_PUSH' | 'ALL';
export type CommunicationStatus = 'SENT' | 'SCHEDULED' | 'DRAFT' | 'FAILED';

export interface TransportCommunication {
  id: string;
  type: CommunicationType;
  title: string;
  message: string;
  
  targetAudience: string; // e.g., "All Parents", "Route R-01 Parents", "All Drivers"
  channel: CommunicationChannel[];
  
  sentBy: string;
  sentAt: string | null; // null if draft/scheduled
  status: CommunicationStatus;
  
  deliveryStats: {
    totalTargeted: number;
    delivered: number;
    failed: number;
  } | null;
}

export interface TransportCommunicationFormData {
  type: CommunicationType;
  title: string;
  message: string;
  targetAudience: string;
  channel: CommunicationChannel[];
  scheduleForLater: boolean;
  scheduledTime?: string;
}
