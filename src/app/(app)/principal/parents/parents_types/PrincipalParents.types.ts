export interface PrincipalParentChild {
  studentId: string;
  studentName: string;
  classAndSection: string;
}

export interface PrincipalParentRecord {
  id: string;
  fatherName: string;
  motherName: string;
  primaryContactName: string;
  contactNumber: string;
  email: string;
  occupation: string;
  address: string;
  children: PrincipalParentChild[];
  isImportantCase?: boolean; // E.g. recurring fee defaults, severe discipline issues, etc.
}

export interface PrincipalParentCommunication {
  id: string;
  parentId: string;
  parentName: string;
  type: 'Message' | 'Complaint' | 'Feedback';
  subject: string;
  message: string;
  date: string;
  status: 'Unread' | 'Read' | 'Resolved';
}

export interface PrincipalParentMeeting {
  id: string;
  parentId: string;
  parentName: string;
  studentName: string;
  meetingDate: string;
  meetingTime: string;
  reason: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  notes?: string;
}
