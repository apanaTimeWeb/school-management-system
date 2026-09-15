import { MOCK_FEEDBACK_DATA } from '../student_feedback_constants/student_feedback_constants';
import type { StudentFeedbackData, FeedbackSubmission } from '../student_feedback_types/student_feedback_types';

/**
 * RESPONSIBILITY: Fetches feedback configs and history.
 */
export async function fetchStudentFeedbackData(): Promise<{ data: StudentFeedbackData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Data fetched successfully",
    data: MOCK_FEEDBACK_DATA,
  };
}

export async function submitStudentFeedback(payload: Partial<FeedbackSubmission>): Promise<{ success: boolean, message: string, data?: FeedbackSubmission }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const newSubmission: FeedbackSubmission = {
    id: "fb_new_" + Date.now(),
    category: payload.category!,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    rating: payload.rating || 0,
    isAnonymous: payload.isAnonymous || false,
    comments: payload.comments!,
    status: "Pending"
  };

  return { success: true, message: "Your feedback has been successfully submitted.", data: newSubmission };
}
