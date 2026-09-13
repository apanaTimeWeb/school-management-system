export interface PrincipalNotice {
  id: string;
  title: string;
  content: string;
  type: 'Notice' | 'Announcement';
  targetAudience: 'All' | 'Teachers' | 'Students' | 'Parents';
  datePosted: string;
  priority: 'Normal' | 'High' | 'Urgent';
  postedBy: string;
  attachments?: number;
}

export interface PrincipalCommunicationHistory {
  id: string;
  subject: string;
  messagePreview: string;
  sentDate: string;
  sentTime: string;
  sender: string;
  recipients: string; // e.g. "Class 10-A Parents", "All Teachers"
  channels: ('SMS' | 'Email' | 'WhatsApp' | 'Push')[];
  status: 'Sent' | 'Failed' | 'Pending';
  deliveryRate: number; // e.g. 98%
}

export interface PrincipalSendNotificationPayload {
  targetGroup: 'Parents' | 'Teachers' | 'Students' | 'Class/Section';
  targetDetails?: string; // e.g. "10-A"
  channels: ('SMS' | 'Email' | 'WhatsApp' | 'Push')[];
  subject: string;
  message: string;
}
