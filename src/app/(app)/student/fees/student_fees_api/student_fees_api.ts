import { MOCK_FEES_DATA } from '../student_fees_constants/student_fees_constants';
import type { StudentFeesData } from '../student_fees_types/student_fees_types';

/**
 * RESPONSIBILITY: Fetches fee summary and history.
 */
export async function fetchStudentFees(): Promise<{ data: StudentFeesData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Fees fetched successfully",
    data: MOCK_FEES_DATA,
  };
}
