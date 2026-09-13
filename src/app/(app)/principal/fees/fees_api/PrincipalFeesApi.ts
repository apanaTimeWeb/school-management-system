import { 
  PrincipalFeeSummary, 
  PrincipalClassFeeCollection, 
  PrincipalFeeDefaulter, 
  PrincipalFeeApprovalRequest 
} from '../fees_types/PrincipalFees.types';
import { 
  PRINCIPAL_MOCK_FEE_SUMMARY, 
  PRINCIPAL_MOCK_CLASS_COLLECTIONS, 
  PRINCIPAL_MOCK_DEFAULTERS, 
  PRINCIPAL_MOCK_FEE_REQUESTS 
} from '../fees_constants/PrincipalFeesConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalFeeSummary = async (): Promise<PrincipalFeeSummary> => {
  await delay(MOCK_DELAY);
  return { ...PRINCIPAL_MOCK_FEE_SUMMARY };
};

export const fetchPrincipalClassCollections = async (): Promise<PrincipalClassFeeCollection[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_CLASS_COLLECTIONS];
};

export const fetchPrincipalDefaulters = async (): Promise<PrincipalFeeDefaulter[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_DEFAULTERS];
};

export const fetchPrincipalFeeRequests = async (): Promise<PrincipalFeeApprovalRequest[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_FEE_REQUESTS];
};

export const updateFeeRequestStatus = async (requestId: string, action: 'Approve' | 'Reject', remarks: string): Promise<boolean> => {
  await delay(600);
  return true;
};
