export type ReminderStatus = 'Pending' | 'Sent' | 'Failed';
export type FollowUpStatus = 'Not Contacted' | 'Promised to Pay' | 'Disputed' | 'Unreachable';

export interface DefaulterRecord {
  id: string; // Student ID
  studentName: string;
  admissionNo: string;
  classSection: string; // e.g., "10th A"
  dueDate: string;
  overdueDays: number;
  outstandingAmount: number;
  reminderStatus: ReminderStatus;
  lastReminderDate?: string;
  followUpStatus: FollowUpStatus;
  lastFollowUpNote?: string;
}
