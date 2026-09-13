// RESPONSIBILITY: Provides API fetching wrappers for the Principal Admissions module.
import { PrincipalAdmissionApplication, PrincipalAdmissionFullProfile, PrincipalAdmissionsStats } from '../admissions_types/PrincipalAdmissions.types';
import { PRINCIPAL_ADMISSIONS_STATS, PRINCIPAL_APPLICATIONS_MOCK_LIST, PRINCIPAL_APPLICATION_MOCK_PROFILE } from '../admissions_constants/PrincipalAdmissionsConstants';

const MOCK_DELAY = 600;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchPrincipalAdmissionsStats = async (): Promise<PrincipalAdmissionsStats> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_ADMISSIONS_STATS;
};

export const fetchPrincipalApplicationsList = async (stageFilter: string, searchQuery: string): Promise<PrincipalAdmissionApplication[]> => {
  await delay(MOCK_DELAY);
  let list = [...PRINCIPAL_APPLICATIONS_MOCK_LIST];

  if (stageFilter && stageFilter !== 'All') {
    list = list.filter(app => app.stage === stageFilter);
  }

  if (searchQuery) {
    const lowerQ = searchQuery.toLowerCase();
    list = list.filter(app => 
      app.applicantName.toLowerCase().includes(lowerQ) || 
      app.applicationNo.includes(lowerQ)
    );
  }

  return list;
};

export const fetchPrincipalApplicationProfile = async (id: string): Promise<PrincipalAdmissionFullProfile | null> => {
  await delay(MOCK_DELAY);
  const app = PRINCIPAL_APPLICATIONS_MOCK_LIST.find(a => a.id === id);
  if (!app) return null;

  return {
    ...PRINCIPAL_APPLICATION_MOCK_PROFILE,
    application: app
  };
};
