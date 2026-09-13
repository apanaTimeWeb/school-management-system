import {
  PrincipalExamGroup,
  PrincipalExamMarksApproval,
  PrincipalInternalPracticalExam,
  PrincipalExamReportOverview
} from '../examinations_types/PrincipalExaminations.types';

import {
  PRINCIPAL_MOCK_EXAM_GROUPS,
  PRINCIPAL_MOCK_MARKS_APPROVAL,
  PRINCIPAL_MOCK_INTERNAL_EXAMS,
  PRINCIPAL_MOCK_EXAM_REPORTS
} from '../examinations_constants/PrincipalExaminationsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 600;

export const fetchPrincipalExamGroups = async (): Promise<PrincipalExamGroup[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_EXAM_GROUPS;
};

export const fetchPrincipalMarksApprovals = async (): Promise<PrincipalExamMarksApproval[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_MARKS_APPROVAL;
};

export const fetchPrincipalInternalExams = async (): Promise<PrincipalInternalPracticalExam[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_INTERNAL_EXAMS;
};

export const fetchPrincipalExamReports = async (): Promise<PrincipalExamReportOverview> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_EXAM_REPORTS;
};
