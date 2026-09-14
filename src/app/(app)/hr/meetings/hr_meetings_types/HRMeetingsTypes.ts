export type HRMeetingRecord = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  type: 'General' | 'Departmental' | 'Urgent' | 'Training';
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  attendeesCount: number;
};
