import { MOCK_STUDENT_DASHBOARD_DATA } from '../student_dashboard_constants/student_dashboard_constants';
import type { StudentDashboardData } from '../student_dashboard_types/student_dashboard_types';

/**
 * RESPONSIBILITY: Fetches data for the student dashboard. Currently simulated with a delay.
 */
export async function fetchStudentDashboardStats(): Promise<{ data: StudentDashboardData, success: boolean, message: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: "Dashboard data fetched successfully",
    data: MOCK_STUDENT_DASHBOARD_DATA,
  };
}
