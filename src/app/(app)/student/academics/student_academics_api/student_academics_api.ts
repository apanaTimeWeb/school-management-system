import { MOCK_ACADEMICS_DATA } from '../student_academics_constants/student_academics_constants';
import type { StudentAcademicsData } from '../student_academics_types/student_academics_types';

/**
 * RESPONSIBILITY: Fetches academics data for the student.
 */
export async function fetchStudentAcademics(): Promise<{ data: StudentAcademicsData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    success: true,
    message: "Academics data fetched successfully",
    data: MOCK_ACADEMICS_DATA,
  };
}
