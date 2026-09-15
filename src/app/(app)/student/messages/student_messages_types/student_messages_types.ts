export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'Student' | 'Teacher' | 'Admin';
  content: string;
  timestamp: string;
  hasAttachment?: boolean;
}

export interface ConversationThread {
  id: string;
  topic: string; // e.g. "Doubt regarding Science Project"
  startedBy: string; // Name of teacher/admin
  startedByRole: 'Teacher' | 'Admin';
  lastMessagePreview: string;
  lastMessageTime: string;
  unreadCount: number;
  allowedReplies: boolean; // Crucial constraint: If false, student can only read, not reply.
  messages: ChatMessage[];
}

export interface StudentMessagesData {
  threads: ConversationThread[];
}
