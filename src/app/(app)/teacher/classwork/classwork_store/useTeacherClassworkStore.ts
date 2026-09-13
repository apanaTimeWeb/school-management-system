import { create } from 'zustand';

export interface ClassworkData {
  id: string;
  date: string;
  class: string;
  subject: string;
  chapter: string;
  topic: string;
  description: string;
  notes: string;
  attachment?: string;
  isPublished?: boolean;
  isCompleted: boolean;
}

interface TeacherClassworkState {
  isFormModalOpen: boolean;
  isFeedbackModalOpen: boolean;
  selectedClasswork: ClassworkData | null;
  
  openCreateModal: () => void;
  openEditModal: (cw: ClassworkData) => void;
  openFeedbackModal: (cw: ClassworkData) => void;
  closeFormModal: () => void;
  closeFeedbackModal: () => void;
}

export const useTeacherClassworkStore = create<TeacherClassworkState>((set) => ({
  isFormModalOpen: false,
  isFeedbackModalOpen: false,
  selectedClasswork: null,

  openCreateModal: () => set({ selectedClasswork: null, isFormModalOpen: true }),
  openEditModal: (cw) => set({ selectedClasswork: cw, isFormModalOpen: true }),
  openFeedbackModal: (cw) => set({ selectedClasswork: cw, isFeedbackModalOpen: true }),
  closeFormModal: () => set({ selectedClasswork: null, isFormModalOpen: false }),
  closeFeedbackModal: () => set({ selectedClasswork: null, isFeedbackModalOpen: false }),
}));
