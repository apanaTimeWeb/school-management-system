export interface PrincipalExamGroup {
  id: string;
  name: string;
  term: string;
  startDate: string;
  endDate: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  targetClasses: string[];
}

export interface PrincipalExamMarksApproval {
  id: string;
  examName: string;
  className: string;
  subject: string;
  teacherName: string;
  totalStudents: number;
  averageMarks: number;
  highestMarks: number;
  submissionDate: string;
  status: 'Pending Verification' | 'Approved' | 'Rejected';
}

export interface PrincipalInternalPracticalExam {
  id: string;
  subject: string;
  className: string;
  type: 'Internal Assessment' | 'Practical' | 'Theory';
  teacherName: string;
  status: 'Not Started' | 'Marks Entered' | 'Finalized';
  dateScheduled?: string;
}

export interface PrincipalExamReportOverview {
  overallPassPercentage: number;
  totalExamsConducted: number;
  pendingApprovals: number;
  topPerformingClass: string;
}
