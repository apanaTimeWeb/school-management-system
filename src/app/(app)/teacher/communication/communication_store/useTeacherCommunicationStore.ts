import { create } from 'zustand';

export interface ParentContactData {
  id: string;
  studentId: string;
  studentName: string;
  parentName: string; // Phone numbers are hidden per restrictions
  class: string;
}

export interface ChatMessage {
  id: string;
  sender: 'Teacher' | 'Parent';
  text: string;
  timestamp: string;
}

export interface ChatContactData {
  id: string;
  name: string;
  subText?: string;
  type: 'admin' | 'parent' | 'group';
  isApproved?: boolean;
}

interface TeacherCommunicationState {
  isNewMessageModalOpen: boolean;
  isQuickNotificationModalOpen: boolean;
  quickNotificationType: 'Homework' | 'Attendance' | 'Exam' | 'Announcement' | null;
  
  selectedChat: ChatContactData | null;
  
  openNewMessageModal: () => void;
  closeNewMessageModal: () => void;
  
  openQuickNotification: (type: 'Homework' | 'Attendance' | 'Exam' | 'Announcement') => void;
  closeQuickNotification: () => void;
  
  selectChat: (chat: ChatContactData) => void;
}

export const useTeacherCommunicationStore = create<TeacherCommunicationState>((set) => ({
  isNewMessageModalOpen: false,
  isQuickNotificationModalOpen: false,
  quickNotificationType: null,
  selectedChat: null,

  openNewMessageModal: () => set({ isNewMessageModalOpen: true }),
  closeNewMessageModal: () => set({ isNewMessageModalOpen: false }),

  openQuickNotification: (type) => set({ isQuickNotificationModalOpen: true, quickNotificationType: type }),
  closeQuickNotification: () => set({ isQuickNotificationModalOpen: false, quickNotificationType: null }),

  selectChat: (chat) => set({ selectedChat: chat }),
}));
