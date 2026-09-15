import { MOCK_HOMEWORK_DATA } from '../student_homework_constants/student_homework_constants';
import type { StudentHomeworkData } from '../student_homework_types/student_homework_types';

/**
 * RESPONSIBILITY: Fetches homework data.
 */
export async function fetchStudentHomework(): Promise<{ data: StudentHomeworkData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 650));

  return {
    success: true,
    message: "Homework fetched successfully",
    data: MOCK_HOMEWORK_DATA,
  };
}
