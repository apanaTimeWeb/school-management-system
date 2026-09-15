import { MOCK_CLASSWORK_DATA } from '../student_classwork_constants/student_classwork_constants';
import type { StudentClassworkData } from '../student_classwork_types/student_classwork_types';

/**
 * RESPONSIBILITY: Fetches daily classwork data and history.
 */
export async function fetchStudentClasswork(): Promise<{ data: StudentClassworkData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 550));

  return {
    success: true,
    message: "Classwork fetched successfully",
    data: MOCK_CLASSWORK_DATA,
  };
}
