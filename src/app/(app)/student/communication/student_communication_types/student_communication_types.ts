export type CommunicationCategory = 
  | 'All' 
  | 'School Notice' 
  | 'Class Notice' 
  | 'Teacher Announcement' 
  | 'Exam Notification' 
  | 'Homework Notification' 
  | 'Attendance Notification' 
  | 'Event Notification'
  | 'Important Update';

export interface CommunicationMessage {
  id: string;
  category: CommunicationCategory;
  title: string;
  senderName: string;
  senderRole: string; // e.g. "Principal", "Class Teacher", "System"
  date: string;
  time: string;
  content: string;
  isUrgent: boolean;
  isRead: boolean;
  hasAttachment?: boolean;
}

export interface StudentCommunicationData {
  messages: CommunicationMessage[];
}
