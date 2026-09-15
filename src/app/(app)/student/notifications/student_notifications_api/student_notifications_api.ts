import { MOCK_NOTIFICATIONS_DATA } from '../student_notifications_constants/student_notifications_constants';
import type { StudentNotificationsData } from '../student_notifications_types/student_notifications_types';

/**
 * RESPONSIBILITY: Fetches the student's notification center data.
 */
export async function fetchStudentNotificationsData(): Promise<{ data: StudentNotificationsData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Notifications fetched successfully",
    data: MOCK_NOTIFICATIONS_DATA,
  };
}
