export type HRCommunicationRecord = {
  id: string;
  title: string;
  type: 'Notice' | 'Email' | 'SMS' | 'Announcement';
  audience: string;
  sentBy: string;
  date: string;
  status: 'Draft' | 'Sent' | 'Scheduled';
};
