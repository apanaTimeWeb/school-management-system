import { MOCK_ONLINE_TESTS_DATA } from '../student_online_tests_constants/student_online_tests_constants';
import type { StudentOnlineTestsData } from '../student_online_tests_types/student_online_tests_types';

/**
 * RESPONSIBILITY: Fetches online tests and history.
 */
export async function fetchStudentOnlineTests(): Promise<{ data: StudentOnlineTestsData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Tests fetched successfully",
    data: MOCK_ONLINE_TESTS_DATA,
  };
}
