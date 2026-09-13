import { PrincipalParentRecord, PrincipalParentCommunication, PrincipalParentMeeting } from '../parents_types/PrincipalParents.types';
import { PRINCIPAL_MOCK_PARENTS, PRINCIPAL_MOCK_COMMUNICATIONS, PRINCIPAL_MOCK_MEETINGS } from '../parents_constants/PrincipalParentsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalParents = async (): Promise<PrincipalParentRecord[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_PARENTS];
};

export const fetchPrincipalCommunications = async (): Promise<PrincipalParentCommunication[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_COMMUNICATIONS];
};

export const fetchPrincipalMeetings = async (): Promise<PrincipalParentMeeting[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_MEETINGS];
};
