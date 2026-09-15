import { MOCK_TRANSPORT_DATA } from '../student_transport_constants/student_transport_constants';
import type { StudentTransportData } from '../student_transport_types/student_transport_types';

/**
 * RESPONSIBILITY: Fetches transport allocation, schedule, and live GPS status.
 */
export async function fetchStudentTransportData(): Promise<{ data: StudentTransportData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Transport details fetched successfully",
    data: MOCK_TRANSPORT_DATA,
  };
}
