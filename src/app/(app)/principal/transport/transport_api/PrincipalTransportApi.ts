import { PrincipalTransportRoute, PrincipalTransportStudent, PrincipalTransportComplaint } from '../transport_types/PrincipalTransport.types';
import { PRINCIPAL_MOCK_ROUTES, PRINCIPAL_MOCK_TRANSPORT_STUDENTS, PRINCIPAL_MOCK_TRANSPORT_COMPLAINTS } from '../transport_constants/PrincipalTransportConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalRoutes = async (): Promise<PrincipalTransportRoute[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_ROUTES];
};

export const fetchPrincipalTransportStudents = async (): Promise<PrincipalTransportStudent[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_TRANSPORT_STUDENTS];
};

export const fetchPrincipalTransportComplaints = async (): Promise<PrincipalTransportComplaint[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_TRANSPORT_COMPLAINTS];
};

export const resolveTransportComplaint = async (complaintId: string, resolution: string): Promise<boolean> => {
  await delay(600);
  return true;
};
