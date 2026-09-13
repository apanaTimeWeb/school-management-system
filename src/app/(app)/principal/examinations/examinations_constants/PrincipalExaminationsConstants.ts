import {
  PrincipalExamGroup,
  PrincipalExamMarksApproval,
  PrincipalInternalPracticalExam,
  PrincipalExamReportOverview
} from '../examinations_types/PrincipalExaminations.types';

export const PRINCIPAL_MOCK_EXAM_GROUPS: PrincipalExamGroup[] = [
  { id: 'EG-1', name: 'Mid Term Examinations 2024', term: 'Term 1', startDate: '2024-10-15', endDate: '2024-10-30', status: 'Upcoming', targetClasses: ['Class 9', 'Class 10', 'Class 11', 'Class 12'] },
  { id: 'EG-2', name: 'Unit Test 2', term: 'Term 1', startDate: '2024-09-01', endDate: '2024-09-05', status: 'Completed', targetClasses: ['Class 1', 'Class 2', 'Class 3'] },
  { id: 'EG-3', name: 'Pre-Board Exams', term: 'Term 2', startDate: '2024-12-10', endDate: '2024-12-24', status: 'Upcoming', targetClasses: ['Class 10', 'Class 12'] }
];

export const PRINCIPAL_MOCK_MARKS_APPROVAL: PrincipalExamMarksApproval[] = [
  { id: 'MA-1', examName: 'Unit Test 2', className: 'Class 10-A', subject: 'Mathematics', teacherName: 'Mr. Arvind Kumar', totalStudents: 40, averageMarks: 78.5, highestMarks: 99, submissionDate: '2024-09-07', status: 'Pending Verification' },
  { id: 'MA-2', examName: 'Unit Test 2', className: 'Class 9-B', subject: 'Science', teacherName: 'Dr. R. Sharma', totalStudents: 38, averageMarks: 82.0, highestMarks: 95, submissionDate: '2024-09-08', status: 'Pending Verification' },
  { id: 'MA-3', examName: 'Unit Test 2', className: 'Class 10-B', subject: 'English', teacherName: 'Ms. Anita Desai', totalStudents: 40, averageMarks: 74.2, highestMarks: 91, submissionDate: '2024-09-06', status: 'Approved' }
];

export const PRINCIPAL_MOCK_INTERNAL_EXAMS: PrincipalInternalPracticalExam[] = [
  { id: 'IP-1', subject: 'Physics', className: 'Class 12-A', type: 'Practical', teacherName: 'Dr. R. Sharma', status: 'Not Started', dateScheduled: '2024-10-12' },
  { id: 'IP-2', subject: 'Computer Science', className: 'Class 10-B', type: 'Internal Assessment', teacherName: 'Mr. John Doe', status: 'Marks Entered', dateScheduled: '2024-09-20' },
  { id: 'IP-3', subject: 'Chemistry', className: 'Class 11-A', type: 'Practical', teacherName: 'Ms. V. Rao', status: 'Finalized', dateScheduled: '2024-08-15' }
];

export const PRINCIPAL_MOCK_EXAM_REPORTS: PrincipalExamReportOverview = {
  overallPassPercentage: 92.4,
  totalExamsConducted: 45,
  pendingApprovals: 2,
  topPerformingClass: 'Class 10-A'
};
