import type { StudentMessagesData, ConversationThread } from '../student_messages_types/student_messages_types';

export const MOCK_MESSAGES_DATA: StudentMessagesData = {
  threads: [
    {
      id: "thread_1",
      topic: "Regarding Absence on Monday",
      startedBy: "Mr. R.K. Singh",
      startedByRole: "Teacher",
      lastMessagePreview: "Please ensure you submit the medical certificate.",
      lastMessageTime: "10:30 AM",
      unreadCount: 1,
      allowedReplies: true, // Student can reply here
      messages: [
        {
          id: "m_1_1",
          senderId: "t1",
          senderName: "Mr. R.K. Singh",
          senderRole: "Teacher",
          content: "Hello, I noticed you were absent yesterday. Please ensure you submit the medical certificate to the office.",
          timestamp: "10:30 AM",
        }
      ]
    },
    {
      id: "thread_2",
      topic: "Fee Payment Overdue Warning",
      startedBy: "Accounts Department",
      startedByRole: "Admin",
      lastMessagePreview: "Your Quarter 2 fee is overdue by 10 days.",
      lastMessageTime: "Yesterday",
      unreadCount: 0,
      allowedReplies: false, // Strict School policy: no direct reply to accounts bot/admin here
      messages: [
        {
          id: "m_2_1",
          senderId: "a1",
          senderName: "Accounts Department",
          senderRole: "Admin",
          content: "Dear Parent/Student, Your Quarter 2 fee is overdue by 10 days. Please pay immediately to avoid further late fines. Ignore if already paid.",
          timestamp: "Yesterday, 02:00 PM",
        }
      ]
    },
    {
      id: "thread_3",
      topic: "Science Project Doubt",
      startedBy: "Mrs. N. Patel",
      startedByRole: "Teacher",
      lastMessagePreview: "Yes, you can use cardboard instead of plastic.",
      lastMessageTime: "Aug 12",
      unreadCount: 0,
      allowedReplies: true,
      messages: [
        {
          id: "m_3_1",
          senderId: "t2",
          senderName: "Mrs. N. Patel",
          senderRole: "Teacher",
          content: "I have reviewed your project proposal. It looks good.",
          timestamp: "Aug 11, 09:00 AM",
        },
        {
          id: "m_3_2",
          senderId: "s1", // Student self
          senderName: "You",
          senderRole: "Student",
          content: "Ma'am, can I use cardboard instead of plastic for the base?",
          timestamp: "Aug 11, 11:30 AM",
        },
        {
          id: "m_3_3",
          senderId: "t2",
          senderName: "Mrs. N. Patel",
          senderRole: "Teacher",
          content: "Yes, you can use cardboard instead of plastic. That is actually more eco-friendly.",
          timestamp: "Aug 12, 08:15 AM",
        }
      ]
    }
  ]
};
