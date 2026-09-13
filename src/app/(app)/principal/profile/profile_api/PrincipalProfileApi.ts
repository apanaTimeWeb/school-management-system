import { PrincipalProfileDetails, PrincipalSecuritySettings } from '../profile_types/PrincipalProfile.types';
import { PRINCIPAL_MOCK_PROFILE, PRINCIPAL_MOCK_SECURITY } from '../profile_constants/PrincipalProfileConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPrincipalProfile = async (): Promise<PrincipalProfileDetails> => {
  await delay(500);
  return { ...PRINCIPAL_MOCK_PROFILE };
};

export const fetchPrincipalSecurity = async (): Promise<PrincipalSecuritySettings> => {
  await delay(500);
  return { ...PRINCIPAL_MOCK_SECURITY };
};

export const updatePassword = async (oldPass: string, newPass: string): Promise<boolean> => {
  await delay(1000);
  return true;
};

export const toggle2FA = async (enable: boolean): Promise<boolean> => {
  await delay(800);
  return true;
};

export const terminateSession = async (sessionId: string): Promise<boolean> => {
  await delay(600);
  return true;
};
