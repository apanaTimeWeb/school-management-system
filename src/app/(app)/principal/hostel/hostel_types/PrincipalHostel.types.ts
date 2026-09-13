export type PrincipalRoomStatus = 'Available' | 'Full' | 'Maintenance';

export interface PrincipalHostelRoom {
  id: string;
  roomNumber: string;
  block: string;
  floor: number;
  capacity: number;
  occupied: number;
  status: PrincipalRoomStatus;
  wardenName: string;
}

export type PrincipalHostelAttendanceStatus = 'Present' | 'Absent' | 'On Leave' | 'Out Pass';

export interface PrincipalHostelStudent {
  id: string;
  studentId: string;
  studentName: string;
  classAndSection: string;
  roomNumber: string;
  block: string;
  todayAttendance: PrincipalHostelAttendanceStatus;
  outPassReturnTime?: string; // If status is Out Pass
}

export type PrincipalHostelIncidentStatus = 'Open' | 'Resolved';

export interface PrincipalHostelIncident {
  id: string;
  title: string;
  date: string;
  block: string;
  roomNumber?: string;
  reportedBy: string; // Warden Name or Student Name
  category: 'Discipline' | 'Maintenance' | 'Medical' | 'Other';
  description: string;
  status: PrincipalHostelIncidentStatus;
  resolutionNote?: string;
}
