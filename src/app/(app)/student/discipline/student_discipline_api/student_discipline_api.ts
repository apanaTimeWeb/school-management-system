import { MOCK_DISCIPLINE_DATA } from '../student_discipline_constants/student_discipline_constants';
import type { StudentDisciplineData } from '../student_discipline_types/student_discipline_types';

/**
 * RESPONSIBILITY: Fetches the student's read-only discipline and counselling records.
 */
export async function fetchStudentDisciplineData(): Promise<{ data: StudentDisciplineData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Discipline records fetched successfully",
    data: MOCK_DISCIPLINE_DATA,
  };
}
