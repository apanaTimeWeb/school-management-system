import { PrincipalCertificateRequest, PrincipalStudentDocument } from '../documents_types/PrincipalDocuments.types';
import { PRINCIPAL_MOCK_CERT_REQUESTS, PRINCIPAL_MOCK_DOCUMENTS } from '../documents_constants/PrincipalDocumentsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalCertRequests = async (): Promise<PrincipalCertificateRequest[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_CERT_REQUESTS];
};

export const fetchPrincipalDocuments = async (): Promise<PrincipalStudentDocument[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_DOCUMENTS];
};

export const updateCertRequestStatus = async (requestId: string, action: 'Approve' | 'Reject', remarks: string): Promise<boolean> => {
  await delay(600);
  return true;
};

export const updateDocumentStatus = async (documentId: string, action: 'Verify' | 'Reject', remarks?: string): Promise<boolean> => {
  await delay(600);
  return true;
};
