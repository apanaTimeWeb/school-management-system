import { MOCK_TIMETABLE_DATA } from '../student_timetable_constants/student_timetable_constants';
import type { StudentTimetableData } from '../student_timetable_types/student_timetable_types';

/**
 * RESPONSIBILITY: Fetches timetable data.
 */
export async function fetchStudentTimetable(): Promise<{ data: StudentTimetableData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Timetable fetched successfully",
    data: MOCK_TIMETABLE_DATA,
  };
}
