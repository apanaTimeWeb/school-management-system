import { PrincipalLeaveRequest, PrincipalLeaveBalance } from '../leaves_types/PrincipalLeaves.types';
import { PRINCIPAL_MOCK_LEAVE_REQUESTS, PRINCIPAL_MOCK_LEAVE_BALANCES } from '../leaves_constants/PrincipalLeavesConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalLeaveRequests = async (): Promise<PrincipalLeaveRequest[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_LEAVE_REQUESTS];
};

export const fetchPrincipalLeaveBalances = async (): Promise<PrincipalLeaveBalance[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_LEAVE_BALANCES];
};

export const updatePrincipalLeaveStatus = async (requestId: string, status: 'Approved' | 'Rejected'): Promise<boolean> => {
  await delay(300);
  // In a real app, this would hit the backend. 
  // We simulate success.
  return true;
};
