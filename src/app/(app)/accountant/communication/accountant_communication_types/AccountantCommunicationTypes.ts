export type CommunicationType = 'Fee Reminder' | 'Payment Confirmation' | 'Receipt Notification' | 'Due Fee Notification' | 'Overdue Reminder' | 'Refund Notification';
export type CommunicationChannel = 'SMS' | 'Email' | 'WhatsApp';
export type CommunicationStatus = 'Sent' | 'Failed' | 'Pending';

export interface CommunicationRecord {
  id: string;
  timestamp: string;
  type: CommunicationType;
  channel: CommunicationChannel;
  recipient: string; // e.g., "Class 10 (All)", "Rahul Verma (STU-101)"
  status: CommunicationStatus;
  sentBy: string;
  messagePreview: string;
}
