import { MOCK_EXAMINATIONS_DATA } from '../student_examinations_constants/student_examinations_constants';
import type { StudentExaminationsData } from '../student_examinations_types/student_examinations_types';

/**
 * RESPONSIBILITY: Fetches exam schedules and details.
 */
export async function fetchStudentExaminations(): Promise<{ data: StudentExaminationsData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Examinations fetched successfully",
    data: MOCK_EXAMINATIONS_DATA,
  };
}
