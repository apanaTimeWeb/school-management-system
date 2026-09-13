import { PrincipalNotice, PrincipalCommunicationHistory, PrincipalSendNotificationPayload } from '../communication_types/PrincipalCommunication.types';
import { PRINCIPAL_MOCK_NOTICES, PRINCIPAL_MOCK_HISTORY } from '../communication_constants/PrincipalCommunicationConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalNotices = async (): Promise<PrincipalNotice[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_NOTICES];
};

export const fetchPrincipalHistory = async (): Promise<PrincipalCommunicationHistory[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_HISTORY];
};

export const sendPrincipalNotification = async (payload: PrincipalSendNotificationPayload): Promise<boolean> => {
  await delay(800);
  // Simulated success API for sending notification across channels
  return true;
};
