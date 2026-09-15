import { MOCK_COMMUNICATION_DATA } from '../student_communication_constants/student_communication_constants';
import type { StudentCommunicationData } from '../student_communication_types/student_communication_types';

/**
 * RESPONSIBILITY: Fetches communication messages.
 */
export async function fetchStudentCommunications(): Promise<{ data: StudentCommunicationData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: "Messages fetched successfully",
    data: MOCK_COMMUNICATION_DATA,
  };
}
