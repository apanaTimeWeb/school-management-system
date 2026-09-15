import { MOCK_STUDENT_FULL_PROFILE } from '../student_profile_constants/student_profile_constants';
import type { StudentFullProfile } from '../student_profile_types/student_profile_types';

/**
 * RESPONSIBILITY: Fetches full profile data for the student. Currently simulated with a delay.
 */
export async function fetchStudentProfile(): Promise<{ data: StudentFullProfile, success: boolean, message: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Profile data fetched successfully",
    data: MOCK_STUDENT_FULL_PROFILE,
  };
}
