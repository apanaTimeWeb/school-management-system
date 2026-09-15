import { MOCK_REQUESTS_DATA } from '../student_requests_constants/student_requests_constants';
import type { StudentRequestsData, StudentRequest } from '../student_requests_types/student_requests_types';

/**
 * RESPONSIBILITY: Fetches the student's central requests data and handles new request submissions.
 */
export async function fetchStudentRequestsData(): Promise<{ data: StudentRequestsData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Requests fetched successfully",
    data: MOCK_REQUESTS_DATA,
  };
}

export async function submitStudentRequest(payload: Partial<StudentRequest>): Promise<{ success: boolean, message: string, data?: StudentRequest }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const newReq: StudentRequest = {
    id: "req_new_" + Date.now(),
    category: payload.category!,
    title: payload.title!,
    description: payload.description!,
    dateSubmitted: "Just now",
    status: "Pending"
  };

  return { success: true, message: "Your request has been submitted successfully.", data: newReq };
}
