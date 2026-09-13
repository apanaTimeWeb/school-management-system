import {
  PrincipalResultOverview,
  PrincipalStudentPerformance,
  PrincipalResultPublishDraft,
  PrincipalReportCardDetail
} from '../results_types/PrincipalResults.types';

import {
  PRINCIPAL_MOCK_RESULT_OVERVIEW,
  PRINCIPAL_MOCK_STUDENT_PERFORMANCE,
  PRINCIPAL_MOCK_PUBLISH_DRAFTS,
  PRINCIPAL_MOCK_REPORT_CARD
} from '../results_constants/PrincipalResultsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 600;

export const fetchPrincipalResultOverview = async (): Promise<PrincipalResultOverview> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_RESULT_OVERVIEW;
};

export const fetchPrincipalStudentPerformance = async (): Promise<PrincipalStudentPerformance[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_STUDENT_PERFORMANCE;
};

export const fetchPrincipalPublishDrafts = async (): Promise<PrincipalResultPublishDraft[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_PUBLISH_DRAFTS;
};

export const fetchPrincipalReportCard = async (studentId: string): Promise<PrincipalReportCardDetail> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_REPORT_CARD;
};
