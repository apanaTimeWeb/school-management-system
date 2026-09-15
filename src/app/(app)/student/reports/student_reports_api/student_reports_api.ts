import { MOCK_REPORTS_DATA } from '../student_reports_constants/student_reports_constants';
import type { StudentReportsData } from '../student_reports_types/student_reports_types';

/**
 * RESPONSIBILITY: Fetches the list of available reports for the student.
 */
export async function fetchStudentReportsData(): Promise<{ data: StudentReportsData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Reports fetched successfully",
    data: MOCK_REPORTS_DATA,
  };
}
