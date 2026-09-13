import { PrincipalEvent, PrincipalEventParticipant, PrincipalEventCertificate } from '../events_types/PrincipalEvents.types';
import { PRINCIPAL_MOCK_EVENTS, PRINCIPAL_MOCK_PARTICIPANTS, PRINCIPAL_MOCK_CERTIFICATES } from '../events_constants/PrincipalEventsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalEvents = async (): Promise<PrincipalEvent[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_EVENTS];
};

export const fetchPrincipalParticipants = async (): Promise<PrincipalEventParticipant[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_PARTICIPANTS];
};

export const fetchPrincipalCertificates = async (): Promise<PrincipalEventCertificate[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_CERTIFICATES];
};

export const approveRejectPrincipalEvent = async (eventId: string, action: 'Approve' | 'Reject'): Promise<boolean> => {
  await delay(600);
  // Simulated API call for approving/rejecting events
  return true;
};
