import { create } from 'zustand';

export interface OnlineTestData {
  id: string;
  title: string;
  class: string;
  subject: string;
  scheduleDate: string;
  scheduleTime: string;
  timeLimitMins: number;
  totalMarks: number;
  totalQuestions: number;
  status: 'Upcoming' | 'Active' | 'Completed' | 'Draft';
  // Analytics if completed
  attempts?: number;
  avgScore?: number;
}

interface TeacherTestsState {
  isFormModalOpen: boolean;
  isAnalyticsModalOpen: boolean;
  
  selectedTest: OnlineTestData | null;
  
  openCreateModal: () => void;
  openEditModal: (test: OnlineTestData) => void;
  closeFormModal: () => void;
  
  openAnalyticsModal: (test: OnlineTestData) => void;
  closeAnalyticsModal: () => void;
}

export const useTeacherTestsStore = create<TeacherTestsState>((set) => ({
  isFormModalOpen: false,
  isAnalyticsModalOpen: false,
  selectedTest: null,

  openCreateModal: () => set({ selectedTest: null, isFormModalOpen: true }),
  openEditModal: (test) => set({ selectedTest: test, isFormModalOpen: true }),
  closeFormModal: () => set({ selectedTest: null, isFormModalOpen: false }),

  openAnalyticsModal: (test) => set({ selectedTest: test, isAnalyticsModalOpen: true }),
  closeAnalyticsModal: () => set({ selectedTest: null, isAnalyticsModalOpen: false }),
}));
