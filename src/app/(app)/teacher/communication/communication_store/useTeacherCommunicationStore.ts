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

interface TeacherCommunicationState {
  isNewMessageModalOpen: boolean;
  isQuickNotificationModalOpen: boolean;
  
  selectedParentForChat: ParentContactData | null;
  notificationType: 'Homework' | 'Attendance' | 'Exam' | 'Announcement' | null;
  
  openNewMessageModal: () => void;
  closeNewMessageModal: () => void;
  
  openQuickNotification: (type: 'Homework' | 'Attendance' | 'Exam' | 'Announcement') => void;
  closeQuickNotification: () => void;

  selectParentChat: (parent: ParentContactData) => void;
}

export const useTeacherCommunicationStore = create<TeacherCommunicationState>((set) => ({
  isNewMessageModalOpen: false,
  isQuickNotificationModalOpen: false,
  selectedParentForChat: null,
  notificationType: null,

  openNewMessageModal: () => set({ isNewMessageModalOpen: true }),
  closeNewMessageModal: () => set({ isNewMessageModalOpen: false }),

  openQuickNotification: (type) => set({ notificationType: type, isQuickNotificationModalOpen: true }),
  closeQuickNotification: () => set({ notificationType: null, isQuickNotificationModalOpen: false }),

  selectParentChat: (parent) => set({ selectedParentForChat: parent }),
}));
