import { MOCK_SECURITY_DATA } from '../student_security_constants/student_security_constants';
import type { StudentSecurityData } from '../student_security_types/student_security_types';

/**
 * RESPONSIBILITY: Fetches security settings and handles security actions.
 */
export async function fetchStudentSecurityData(): Promise<{ data: StudentSecurityData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Security data fetched successfully",
    data: MOCK_SECURITY_DATA,
  };
}

export async function changePassword(): Promise<{ success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true, message: "Password changed successfully." };
}

export async function toggle2FA(enable: boolean): Promise<{ success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true, message: `Two-Factor Authentication has been ${enable ? 'enabled' : 'disabled'}.` };
}

export async function logoutDevice(sessionId?: string): Promise<{ success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (sessionId) {
    return { success: true, message: "Device logged out successfully." };
  }
  return { success: true, message: "All other devices logged out successfully." };
}
