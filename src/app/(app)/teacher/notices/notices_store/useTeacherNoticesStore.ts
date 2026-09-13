import { create } from 'zustand';

export type NoticeType = 'Class Notice' | 'Announcement' | 'Important Update' | 'Homework Reminder' | 'Exam Reminder' | 'Assignment Reminder';

export interface NoticeData {
  id: string;
  type: NoticeType;
  title: string;
  description: string;
  targetClass: string;
  dateSent: string;
  hasAttachment: boolean;
  status: 'Sent' | 'Draft';
}

interface TeacherNoticesState {
  isCreateNoticeOpen: boolean;
  selectedNotice: NoticeData | null;
  
  openCreateNotice: (notice?: NoticeData) => void;
  closeCreateNotice: () => void;
}

export const useTeacherNoticesStore = create<TeacherNoticesState>((set) => ({
  isCreateNoticeOpen: false,
  selectedNotice: null,

  openCreateNotice: (notice) => set({ selectedNotice: notice || null, isCreateNoticeOpen: true }),
  closeCreateNotice: () => set({ selectedNotice: null, isCreateNoticeOpen: false }),
}));
