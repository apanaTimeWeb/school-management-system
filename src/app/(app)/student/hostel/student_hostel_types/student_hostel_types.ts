export interface HostelDetails {
  hostelName: string;
  roomNumber: string;
  bedNumber: string;
  wardenName: string;
  wardenPhone: string;
  feeStatus: 'Paid' | 'Unpaid' | 'Overdue';
  attendancePercentage: number;
}

export interface HostelLeave {
  id: string;
  leaveType: 'Night Out' | 'Going Home' | 'Emergency';
  startDate: string;
  endDate: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface VisitorInfo {
  id: string;
  visitorName: string;
  relation: string;
  visitDate: string;
  timeSlot: string;
  status: 'Pending' | 'Approved' | 'Completed' | 'Rejected';
}

export interface HostelNotice {
  id: string;
  date: string;
  title: string;
  content: string;
  isUrgent: boolean;
}

export interface StudentHostelData {
  isHosteler: boolean;
  details: HostelDetails;
  leaves: HostelLeave[];
  visitors: VisitorInfo[];
  notices: HostelNotice[];
}
