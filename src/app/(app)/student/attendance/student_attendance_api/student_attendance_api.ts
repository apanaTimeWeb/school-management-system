import { MOCK_ATTENDANCE_DATA } from '../student_attendance_constants/student_attendance_constants';
import type { StudentAttendanceData } from '../student_attendance_types/student_attendance_types';

/**
 * RESPONSIBILITY: Fetches attendance data for the student.
 */
export async function fetchStudentAttendance(): Promise<{ data: StudentAttendanceData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    success: true,
    message: "Attendance fetched successfully",
    data: MOCK_ATTENDANCE_DATA,
  };
}
