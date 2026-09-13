import {
  PrincipalResultOverview,
  PrincipalStudentPerformance,
  PrincipalResultPublishDraft,
  PrincipalReportCardDetail
} from '../results_types/PrincipalResults.types';

export const PRINCIPAL_MOCK_RESULT_OVERVIEW: PrincipalResultOverview = {
  totalStudentsEvaluated: 1250,
  overallPassPercentage: 92.5,
  overallAverageGPA: 7.8,
  topPerformingClass: 'Class 10-A',
  lowestPerformingClass: 'Class 8-C'
};

export const PRINCIPAL_MOCK_STUDENT_PERFORMANCE: PrincipalStudentPerformance[] = [
  { id: 'ST-001', studentName: 'Aarav Sharma', className: 'Class 10-A', rollNo: '10A-01', percentage: 98.2, grade: 'A+', gpa: 9.8, rank: 1, status: 'Pass' },
  { id: 'ST-002', studentName: 'Riya Singh', className: 'Class 10-A', rollNo: '10A-14', percentage: 95.5, grade: 'A', gpa: 9.5, rank: 2, status: 'Pass' },
  { id: 'ST-003', studentName: 'Karan Patel', className: 'Class 10-B', rollNo: '10B-08', percentage: 42.0, grade: 'D', gpa: 4.2, rank: 45, status: 'Fail' },
  { id: 'ST-004', studentName: 'Priya Verma', className: 'Class 9-A', rollNo: '9A-22', percentage: 88.4, grade: 'B+', gpa: 8.8, rank: 5, status: 'Pass' }
];

export const PRINCIPAL_MOCK_PUBLISH_DRAFTS: PrincipalResultPublishDraft[] = [
  { id: 'RD-1', examName: 'Term 1 Examinations', term: 'Term 1', className: 'Class 10', evaluatedStudents: 120, passPercentage: 95.8, approvalStatus: 'Pending Review', submissionDate: '2024-10-05' },
  { id: 'RD-2', examName: 'Term 1 Examinations', term: 'Term 1', className: 'Class 9', evaluatedStudents: 140, passPercentage: 89.2, approvalStatus: 'Pending Review', submissionDate: '2024-10-06' },
  { id: 'RD-3', examName: 'Unit Test 2', term: 'Term 1', className: 'Class 8', evaluatedStudents: 110, passPercentage: 98.0, approvalStatus: 'Published', submissionDate: '2024-09-15' }
];

export const PRINCIPAL_MOCK_REPORT_CARD: PrincipalReportCardDetail = {
  studentName: 'Aarav Sharma',
  rollNo: '10A-01',
  subjects: [
    { name: 'Mathematics', marks: 98, grade: 'A+' },
    { name: 'Science', marks: 95, grade: 'A' },
    { name: 'English', marks: 92, grade: 'A' },
    { name: 'Social Studies', marks: 89, grade: 'B+' }
  ],
  totalMarks: 374,
  percentage: 93.5,
  overallGrade: 'A',
  remarks: 'Excellent performance. Keep it up!'
};
