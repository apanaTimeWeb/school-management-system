import { MOCK_ID_CARD_DATA } from '../student_id_card_constants/student_id_card_constants';
import type { StudentIdCardData } from '../student_id_card_types/student_id_card_types';

/**
 * RESPONSIBILITY: Fetches the student's ID card details.
 */
export async function fetchStudentIdCardData(): Promise<{ data: StudentIdCardData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "ID Card fetched successfully",
    data: MOCK_ID_CARD_DATA,
  };
}
