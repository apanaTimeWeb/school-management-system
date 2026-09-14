import type { CommMessage, CommChannelConfig } from "../hr_communication_types/AdminHrCommTypes";

export const MOCK_MESSAGES: CommMessage[] = [
  { id: "msg-1", category: "Staff Announcement", subject: "Annual Sports Day Meeting", message: "All staff members are requested to gather in the auditorium for the sports day briefing.", sender: "Principal Office", timestamp: "2024-10-21T09:30:00", isRead: false, channelsUsed: ["In-App", "WhatsApp"] },
  { id: "msg-2", category: "Leave Notification", subject: "Leave Approved", message: "Your sick leave application for 22 Oct to 24 Oct has been approved.", sender: "HR System", timestamp: "2024-10-21T11:15:00", isRead: true, channelsUsed: ["In-App", "Email"] },
  { id: "msg-3", category: "Document Expiry Alert", subject: "ID Proof Expiring", message: "Your submitted ID Proof is expiring in 15 days. Please submit a renewed copy.", sender: "Compliance Bot", timestamp: "2024-10-20T08:00:00", isRead: true, channelsUsed: ["In-App"] },
  { id: "msg-4", category: "Joining/Exit Notification", subject: "Welcome New Faculty", message: "Please welcome Mr. Rohan to the Science Department.", sender: "HR Dept", timestamp: "2024-10-19T14:45:00", isRead: true, channelsUsed: ["In-App", "Email"] },
  { id: "msg-5", category: "Meeting Notification", subject: "Weekly Dept Sync", message: "Reminder for the weekly mathematics department sync at 4 PM.", sender: "HOD Math", timestamp: "2024-10-18T16:00:00", isRead: false, channelsUsed: ["In-App"] }
];

export const MOCK_CHANNELS: CommChannelConfig[] = [
  { id: "ch-1", channelName: "In-App Push", provider: "Internal System", isActive: true, lastSync: "2024-10-21T12:00:00" },
  { id: "ch-2", channelName: "Email (SMTP)", provider: "SendGrid API", isActive: true, lastSync: "2024-10-21T12:00:00" },
  { id: "ch-3", channelName: "SMS Alerts", provider: "Twilio", isActive: false, lastSync: "2024-09-15T10:00:00" },
  { id: "ch-4", channelName: "WhatsApp API", provider: "Meta Cloud API", isActive: true, lastSync: "2024-10-21T11:55:00" }
];
