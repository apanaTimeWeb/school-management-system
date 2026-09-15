export type NotificationCategory = 
  | 'All' 
  | 'Attendance' 
  | 'Homework' 
  | 'Assignment' 
  | 'Exam' 
  | 'Result' 
  | 'Fee' 
  | 'Leave' 
  | 'Event' 
  | 'Notice' 
  | 'Certificate' 
  | 'System';

export interface AppNotification {
  id: string;
  category: Exclude<NotificationCategory, 'All'>;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  link?: string; // Optional deep link to the relevant module
}

export interface StudentNotificationsData {
  notifications: AppNotification[];
}
