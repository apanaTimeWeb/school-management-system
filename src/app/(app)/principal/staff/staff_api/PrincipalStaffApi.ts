import {
  PrincipalStaffDirectoryMember,
  PrincipalStaffProfile,
  PrincipalStaffPerformance
} from '../staff_types/PrincipalStaff.types';

import {
  PRINCIPAL_MOCK_STAFF_DIRECTORY,
  PRINCIPAL_MOCK_STAFF_PROFILES,
  PRINCIPAL_MOCK_STAFF_PERFORMANCE
} from '../staff_constants/PrincipalStaffConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 600;

export const fetchPrincipalStaffDirectory = async (): Promise<PrincipalStaffDirectoryMember[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_STAFF_DIRECTORY;
};

export const fetchPrincipalStaffProfile = async (staffId: string): Promise<PrincipalStaffProfile | null> => {
  await delay(MOCK_DELAY);
  const profile = PRINCIPAL_MOCK_STAFF_PROFILES.find(p => p.id === staffId);
  return profile || null;
};

export const fetchPrincipalStaffPerformance = async (): Promise<PrincipalStaffPerformance[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_STAFF_PERFORMANCE;
};
