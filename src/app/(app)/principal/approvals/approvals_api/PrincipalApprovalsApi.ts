import { PrincipalApprovalSummary, PrincipalApprovalRequest } from '../approvals_types/PrincipalApprovals.types';
import { PRINCIPAL_APPROVAL_CATEGORIES, PRINCIPAL_MOCK_APPROVAL_REQUESTS } from '../approvals_constants/PrincipalApprovalsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalApprovalSummary = async (): Promise<PrincipalApprovalSummary[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_APPROVAL_CATEGORIES];
};

export const fetchPrincipalApprovalRequests = async (category: string): Promise<PrincipalApprovalRequest[]> => {
  await delay(MOCK_DELAY);
  if (category === 'All') {
    return [...PRINCIPAL_MOCK_APPROVAL_REQUESTS];
  }
  return PRINCIPAL_MOCK_APPROVAL_REQUESTS.filter(req => req.category === category);
};

export const processApprovalRequest = async (requestId: string, action: 'Approve' | 'Reject', remarks: string): Promise<boolean> => {
  await delay(800);
  return true;
};
