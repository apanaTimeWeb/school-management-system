export type CommCategory = 'Staff Announcement' | 'Leave Notification' | 'HR Notification' | 'Meeting Notification' | 'Document Expiry Alert' | 'Joining/Exit Notification';

export interface CommMessage {
  id: string;
  category: CommCategory;
  subject: string;
  message: string;
  sender: string;
  timestamp: string;
  isRead: boolean;
  channelsUsed: string[]; // e.g., ["In-App", "Email", "SMS"]
}

export interface CommChannelConfig {
  id: string;
  channelName: string;
  provider: string;
  isActive: boolean;
  lastSync: string;
}

export interface FetchCommParams {
  category?: string;
  search?: string;
}

export interface CommResponse<T> {
  success: boolean;
  data: T;
}
