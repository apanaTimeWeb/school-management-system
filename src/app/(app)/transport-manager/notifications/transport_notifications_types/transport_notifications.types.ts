export type NotificationCategory = 
  | 'BUS_DELAYED'
  | 'ROUTE_CHANGED'
  | 'VEHICLE_CHANGED'
  | 'DRIVER_CHANGED'
  | 'PICKUP_ALERT'
  | 'DROP_ALERT'
  | 'TRANSPORT_ASSIGNMENT'
  | 'TRANSPORT_REQUEST'
  | 'VEHICLE_MAINTENANCE'
  | 'DOCUMENT_EXPIRY'
  | 'EMERGENCY_ALERT'
  | 'CUSTOM';

export type NotificationAudience = 'PARENTS' | 'DRIVERS' | 'STAFF' | 'ALL';

export interface TransportNotification {
  id: string;
  category: NotificationCategory;
  title: string;
  message: string;
  timestamp: string; // ISO string
  isRead: boolean;
  audience: NotificationAudience[];
  sentBy: string; // System or User
}

export interface TransportNotificationFormData {
  category: NotificationCategory;
  title: string;
  message: string;
  audience: NotificationAudience[];
}
