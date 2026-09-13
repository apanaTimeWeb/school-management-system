import { PrincipalMeeting, PrincipalMeetingMinutes } from '../meetings_types/PrincipalMeetings.types';
import { PRINCIPAL_MOCK_MEETINGS, PRINCIPAL_MOCK_MINUTES } from '../meetings_constants/PrincipalMeetingsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalMeetings = async (): Promise<PrincipalMeeting[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_MEETINGS];
};

export const fetchPrincipalMinutes = async (): Promise<PrincipalMeetingMinutes[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_MINUTES];
};
