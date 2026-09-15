import { MOCK_RESULTS_DATA } from '../student_results_constants/student_results_constants';
import type { StudentResultsData } from '../student_results_types/student_results_types';

/**
 * RESPONSIBILITY: Fetches exam results data.
 */
export async function fetchStudentResults(): Promise<{ data: StudentResultsData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Results fetched successfully",
    data: MOCK_RESULTS_DATA,
  };
}
