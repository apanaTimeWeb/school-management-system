export type MeetingStatus = 'Upcoming' | 'Completed' | 'Cancelled';
export type ActionItemStatus = 'Open' | 'In Progress' | 'Closed';

export interface ActionItem {
  id: string;
  task: string;
  assignee: string;
  deadline: string;
  status: ActionItemStatus;
}

export interface StaffMeeting {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: MeetingStatus;
  
  participants: string[]; // e.g. ["All Science Teachers", "HOD Math"]
  attendanceRecorded: boolean;
  presentCount: number;
  totalCount: number;

  agenda: string;
  minutes: string;
  
  actionItems: ActionItem[];
}

export interface FetchMeetingParams {
  status?: string;
  search?: string;
}

export interface MeetingResponse<T> {
  success: boolean;
  data: T;
}
