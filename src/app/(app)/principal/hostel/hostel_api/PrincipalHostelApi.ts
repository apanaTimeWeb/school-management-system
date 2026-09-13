import { PrincipalHostelRoom, PrincipalHostelStudent, PrincipalHostelIncident } from '../hostel_types/PrincipalHostel.types';
import { PRINCIPAL_MOCK_HOSTEL_ROOMS, PRINCIPAL_MOCK_HOSTEL_STUDENTS, PRINCIPAL_MOCK_HOSTEL_INCIDENTS } from '../hostel_constants/PrincipalHostelConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalHostelRooms = async (): Promise<PrincipalHostelRoom[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_HOSTEL_ROOMS];
};

export const fetchPrincipalHostelStudents = async (): Promise<PrincipalHostelStudent[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_HOSTEL_STUDENTS];
};

export const fetchPrincipalHostelIncidents = async (): Promise<PrincipalHostelIncident[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_HOSTEL_INCIDENTS];
};

export const resolveHostelIncident = async (incidentId: string, resolution: string): Promise<boolean> => {
  await delay(600);
  return true;
};
