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
  isCompleted: boolean;
}

interface TeacherClassworkState {
  isFormModalOpen: boolean;
  selectedClasswork: ClassworkData | null;
  
  openCreateModal: () => void;
  openEditModal: (cw: ClassworkData) => void;
  closeFormModal: () => void;
}

export const useTeacherClassworkStore = create<TeacherClassworkState>((set) => ({
  isFormModalOpen: false,
  selectedClasswork: null,

  openCreateModal: () => set({ selectedClasswork: null, isFormModalOpen: true }),
  openEditModal: (cw) => set({ selectedClasswork: cw, isFormModalOpen: true }),
  closeFormModal: () => set({ selectedClasswork: null, isFormModalOpen: false }),
}));
