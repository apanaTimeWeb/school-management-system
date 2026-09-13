export interface PrincipalIncidentRecord {
  id: string;
  offenderName: string;
  offenderId: string;
  offenderType: 'Student' | 'Staff';
  departmentOrClass: string;
  incidentType: 'Misbehavior' | 'Rule Violation' | 'Academic Dishonesty' | 'Bullying' | 'Other';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  dateReported: string;
  reportedBy: string;
  description: string;
  status: 'Open' | 'Under Investigation' | 'Resolved' | 'Action Taken';
  actionTaken?: string;
}

export interface PrincipalCounsellingRecord {
  id: string;
  subjectName: string;
  subjectId: string;
  type: 'Student' | 'Staff';
  counsellor: string;
  sessionDate: string;
  issue: string;
  parentMeetingRequired: boolean;
  parentMeetingStatus?: 'Scheduled' | 'Completed' | 'Not Required';
  followUpDate?: string;
  notes: string;
}
