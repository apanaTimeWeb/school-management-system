import { PrincipalIncidentRecord, PrincipalCounsellingRecord } from '../discipline_types/PrincipalDiscipline.types';
import { PRINCIPAL_MOCK_INCIDENTS, PRINCIPAL_MOCK_COUNSELLING } from '../discipline_constants/PrincipalDisciplineConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalIncidents = async (): Promise<PrincipalIncidentRecord[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_INCIDENTS];
};

export const fetchPrincipalCounselling = async (): Promise<PrincipalCounsellingRecord[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_COUNSELLING];
};

export const updatePrincipalIncidentAction = async (incidentId: string, actionDetails: string): Promise<boolean> => {
  await delay(400);
  // Simulated success
  return true;
};
