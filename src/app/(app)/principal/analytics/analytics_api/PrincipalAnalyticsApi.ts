import { PrincipalAnalyticsData } from '../analytics_types/PrincipalAnalytics.types';
import { PRINCIPAL_ANALYTICS_TRENDS, PRINCIPAL_RISK_STUDENTS } from '../analytics_constants/PrincipalAnalyticsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPrincipalAnalytics = async (): Promise<PrincipalAnalyticsData> => {
  await delay(800);
  return {
    trends: [...PRINCIPAL_ANALYTICS_TRENDS],
    atRiskStudents: [...PRINCIPAL_RISK_STUDENTS]
  };
};
