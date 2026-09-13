export interface PrincipalTimetablePeriod {
  id: string;
  periodNumber: number;
  startTime: string;
  endTime: string;
  subject: string;
  teacher: string;
  room: string;
  isBreak?: boolean;
}

export interface PrincipalClassTimetable {
  id: string;
  className: string;
  section: string;
  schedule: Record<string, PrincipalTimetablePeriod[]>; // e.g. { "Monday": [...periods], "Tuesday": [...] }
}

export interface PrincipalTeacherTimetable {
  id: string;
  teacherName: string;
  department: string;
  schedule: Record<string, PrincipalTimetablePeriod[]>;
}

export interface PrincipalTimetableConflict {
  id: string;
  type: 'Double Booking' | 'Room Unavailable' | 'Overload';
  description: string;
  teacherName?: string;
  className?: string;
  room?: string;
  severity: 'high' | 'medium';
}

export interface PrincipalTimetableDraft {
  id: string;
  title: string;
  term: string;
  status: 'Draft' | 'Pending Approval' | 'Published';
  createdAt: string;
  submittedBy: string;
  conflictsCount: number;
}
