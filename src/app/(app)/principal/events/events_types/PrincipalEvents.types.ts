export type PrincipalEventType = 'Annual Function' | 'Sports' | 'Cultural' | 'Competition' | 'Other';
export type PrincipalEventStatus = 'Pending Approval' | 'Approved' | 'Rejected' | 'Completed';

export interface PrincipalEvent {
  id: string;
  title: string;
  type: PrincipalEventType;
  startDate: string;
  endDate: string;
  organizer: string;
  budget: number;
  description: string;
  status: PrincipalEventStatus;
  participantsCount?: number;
}

export interface PrincipalEventParticipant {
  id: string;
  eventId: string;
  eventTitle: string;
  studentId: string;
  studentName: string;
  classAndSection: string;
  role: string; // e.g. "Athlete", "Dancer", "Volunteer"
  result?: string; // e.g. "1st Prize", "Runner Up", "Participant"
}

export interface PrincipalEventCertificate {
  id: string;
  participantId: string;
  studentName: string;
  eventTitle: string;
  certificateType: 'Winner' | 'Runner Up' | 'Participation' | 'Special Recognition';
  issueDate: string;
  status: 'Draft' | 'Issued' | 'Revoked';
}
