import { MOCK_ASSIGNMENTS_DATA } from '../student_assignments_constants/student_assignments_constants';
import type { StudentAssignmentsData } from '../student_assignments_types/student_assignments_types';

/**
 * RESPONSIBILITY: Fetches assignments data.
 */
export async function fetchStudentAssignments(): Promise<{ data: StudentAssignmentsData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Assignments fetched successfully",
    data: MOCK_ASSIGNMENTS_DATA,
  };
}
