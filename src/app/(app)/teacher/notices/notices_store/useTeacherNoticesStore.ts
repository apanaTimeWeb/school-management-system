import { create } from 'zustand';
import { TEACHER_NOTICES_MOCK } from '../notices_constants/TeacherNoticesMockData';

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

export interface EventData {
  id: string;
  title: string;
  date: string;
  type: 'Holiday' | 'School Event' | 'Exam';
}

interface TeacherNoticesState {
  isCreateNoticeOpen: boolean;
  selectedNotice: NoticeData | null;
  noticesList: NoticeData[];
  eventsList: EventData[];
  
  openCreateNotice: (notice?: NoticeData) => void;
  closeCreateNotice: () => void;
  addNotice: (notice: NoticeData) => void;
  updateNotice: (id: string, notice: NoticeData) => void;
}

export const useTeacherNoticesStore = create<TeacherNoticesState>((set) => ({
  isCreateNoticeOpen: false,
  selectedNotice: null,
  noticesList: TEACHER_NOTICES_MOCK,
  eventsList: [
    { id: 'E1', title: 'Diwali Break', date: '2023-11-12 to 2023-11-15', type: 'Holiday' },
    { id: 'E2', title: 'Annual Sports Day', date: '2023-12-05', type: 'School Event' },
    { id: 'E3', title: 'Half-Yearly Examinations', date: '2023-10-15 to 2023-10-25', type: 'Exam' },
  ],

  openCreateNotice: (notice) => set({ selectedNotice: notice || null, isCreateNoticeOpen: true }),
  closeCreateNotice: () => set({ selectedNotice: null, isCreateNoticeOpen: false }),

  addNotice: (notice) => set((state) => ({ noticesList: [notice, ...state.noticesList] })),
  updateNotice: (id, notice) => set((state) => ({
    noticesList: state.noticesList.map(n => n.id === id ? notice : n)
  })),
}));
