import { MOCK_MESSAGES_DATA } from '../student_messages_constants/student_messages_constants';
import type { StudentMessagesData, ChatMessage } from '../student_messages_types/student_messages_types';

/**
 * RESPONSIBILITY: Fetches messages and handles sending new replies.
 */
export async function fetchStudentMessages(): Promise<{ data: StudentMessagesData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Messages fetched successfully",
    data: MOCK_MESSAGES_DATA,
  };
}

export async function sendStudentReply(threadId: string, content: string): Promise<{ success: boolean, message: string, data?: ChatMessage }> {
  await new Promise((resolve) => setTimeout(resolve, 600)); // Simulate network latency
  
  const newMsg: ChatMessage = {
    id: "m_new_" + Date.now(),
    senderId: "self_student",
    senderName: "You",
    senderRole: "Student",
    content: content,
    timestamp: "Just Now",
  };

  return {
    success: true,
    message: "Reply sent successfully.",
    data: newMsg
  };
}
