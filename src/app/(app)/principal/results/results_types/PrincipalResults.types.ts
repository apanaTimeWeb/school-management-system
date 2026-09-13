export interface PrincipalResultOverview {
  totalStudentsEvaluated: number;
  overallPassPercentage: number;
  overallAverageGPA: number;
  topPerformingClass: string;
  lowestPerformingClass: string;
}

export interface PrincipalStudentPerformance {
  id: string;
  studentName: string;
  className: string;
  rollNo: string;
  percentage: number;
  grade: string;
  gpa: number;
  rank: number;
  status: 'Pass' | 'Fail';
}

export interface PrincipalResultPublishDraft {
  id: string;
  examName: string;
  term: string;
  className: string;
  evaluatedStudents: number;
  passPercentage: number;
  approvalStatus: 'Pending Review' | 'Approved' | 'Published';
  submissionDate: string;
}

export interface PrincipalReportCardDetail {
  studentName: string;
  rollNo: string;
  subjects: { name: string; marks: number; grade: string }[];
  totalMarks: number;
  percentage: number;
  overallGrade: string;
  remarks: string;
}
