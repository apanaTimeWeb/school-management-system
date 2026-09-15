export type ExamType = 'Theory' | 'Practical' | 'Internal Assessment';

export interface ExamSubjectSchedule {
  id: string;
  subject: string;
  date: string;
  startTime: string;
  endTime: string;
  room: string;
  type: ExamType;
  syllabus: string;
  instructions?: string;
}

export interface ExamTerm {
  id: string;
  termName: string; // e.g., "Mid Term Examination 2024-25"
  startDate: string;
  endDate: string;
  generalInstructions: string;
  schedules: ExamSubjectSchedule[];
}

export interface StudentExaminationsData {
  upcomingExams: ExamTerm[];
  pastExams: ExamTerm[];
}
