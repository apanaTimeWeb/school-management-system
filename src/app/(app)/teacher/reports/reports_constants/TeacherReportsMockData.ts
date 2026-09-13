import { ReportType } from '../reports_store/useTeacherReportsStore';

export interface ReportItem {
  id: string;
  title: ReportType;
  description: string;
  category: 'Academic' | 'Administrative' | 'Analytics';
  icon: string;
}

export const TEACHER_REPORTS_LIST: ReportItem[] = [
  { id: 'REP-01', title: 'Attendance Report', description: 'Generate daily/monthly attendance logs for your classes.', category: 'Administrative', icon: 'calendar' },
  { id: 'REP-02', title: 'Homework Report', description: 'View pending and completed homework stats for students.', category: 'Academic', icon: 'book' },
  { id: 'REP-03', title: 'Assignment Report', description: 'Track assignment submissions, grades, and remarks.', category: 'Academic', icon: 'file' },
  { id: 'REP-04', title: 'Marks Report', description: 'Generate subject-wise marks distribution and entries.', category: 'Academic', icon: 'pen' },
  { id: 'REP-05', title: 'Result Report', description: 'Download complete term-end result sheets for your class.', category: 'Academic', icon: 'award' },
  { id: 'REP-06', title: 'Student Performance', description: 'Analytics on individual student growth and weakness.', category: 'Analytics', icon: 'user' },
  { id: 'REP-07', title: 'Class Performance', description: 'Overall class average and academic trend analysis.', category: 'Analytics', icon: 'users' },
  { id: 'REP-08', title: 'Syllabus Progress', description: 'Track your teaching pace vs planned curriculum.', category: 'Administrative', icon: 'trending' },
  { id: 'REP-09', title: 'Academic Progress', description: 'Holistic view of continuous assessments across subjects.', category: 'Analytics', icon: 'activity' },
];
