import { PrincipalComplaint, PrincipalComplaintStatus } from '../complaints_types/PrincipalComplaints.types';
import { PRINCIPAL_MOCK_COMPLAINTS } from '../complaints_constants/PrincipalComplaintsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalComplaints = async (): Promise<PrincipalComplaint[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_COMPLAINTS];
};

export const updateComplaintStatus = async (complaintId: string, updates: Partial<PrincipalComplaint>): Promise<boolean> => {
  await delay(600);
  // Simulated API call for updating complaint (e.g. assigning, resolving)
  return true;
};
