export type PrincipalMeetingType = 'Staff' | 'Parent' | 'Academic' | 'HOD' | 'Other';
export type PrincipalMeetingStatus = 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
export type PrincipalActionItemStatus = 'Pending' | 'In Progress' | 'Completed';

export interface PrincipalMeeting {
  id: string;
  title: string;
  type: PrincipalMeetingType;
  date: string;
  time: string;
  duration: string; // e.g. "1 Hour"
  location: string;
  organizer: string;
  status: PrincipalMeetingStatus;
  agenda: string[];
  expectedAttendeesCount: number;
  actualAttendeesCount?: number;
}

export interface PrincipalMeetingActionItem {
  id: string;
  task: string;
  assignedTo: string;
  dueDate: string;
  status: PrincipalActionItemStatus;
}

export interface PrincipalMeetingMinutes {
  id: string;
  meetingId: string;
  meetingTitle: string;
  date: string;
  recordedBy: string;
  summary: string;
  actionItems: PrincipalMeetingActionItem[];
}
