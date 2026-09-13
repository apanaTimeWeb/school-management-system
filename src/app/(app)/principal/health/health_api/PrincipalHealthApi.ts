import { PrincipalHealthStudent, PrincipalMedicalIncident, PrincipalHealthStats } from '../health_types/PrincipalHealth.types';
import { PRINCIPAL_MOCK_HEALTH_STUDENTS, PRINCIPAL_MOCK_MEDICAL_INCIDENTS, PRINCIPAL_MOCK_HEALTH_STATS } from '../health_constants/PrincipalHealthConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalHealthStats = async (): Promise<PrincipalHealthStats> => {
  await delay(MOCK_DELAY);
  return { ...PRINCIPAL_MOCK_HEALTH_STATS };
};

export const fetchPrincipalHealthStudents = async (): Promise<PrincipalHealthStudent[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_HEALTH_STUDENTS];
};

export const fetchPrincipalMedicalIncidents = async (): Promise<PrincipalMedicalIncident[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_MEDICAL_INCIDENTS];
};
