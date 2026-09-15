export interface SubjectInfo {
  id: string;
  name: string;
  teacherName: string;
  teacherAvatar?: string;
  curriculumCode: string;
  totalChapters: number;
  completedChapters: number;
}

export interface SyllabusChapter {
  id: string;
  subjectId: string;
  chapterNumber: number;
  title: string;
  status: 'completed' | 'in_progress' | 'not_started';
  lastUpdated: string;
}

export interface AcademicHistoryYear {
  id: string;
  academicYear: string;
  class: string;
  overallGrade: string;
  percentage: number;
  status: 'Pass' | 'Promoted' | 'Fail';
}

export interface StudentAcademicsData {
  currentClass: string;
  section: string;
  academicSession: string;
  subjects: SubjectInfo[];
  syllabus: SyllabusChapter[];
  academicHistory: AcademicHistoryYear[];
}
