import { MOCK_HEALTH_DATA } from '../student_health_constants/student_health_constants';
import type { StudentHealthData } from '../student_health_types/student_health_types';

/**
 * RESPONSIBILITY: Fetches the student's read-only medical profile and checkups.
 */
export async function fetchStudentHealthData(): Promise<{ data: StudentHealthData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Health data fetched successfully",
    data: MOCK_HEALTH_DATA,
  };
}
