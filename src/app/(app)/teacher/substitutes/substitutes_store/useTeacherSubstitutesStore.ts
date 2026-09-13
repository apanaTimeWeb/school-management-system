import { create } from 'zustand';
import { TEACHER_SUBSTITUTES_MOCK } from '../substitutes_constants/TeacherSubstitutesMockData';

export interface SubstituteData {
  id: string;
  originalTeacher: string;
  class: string;
  subject: string;
  date: string;
  period: string; // e.g., '3rd Period (10:30 AM - 11:15 AM)'
  instructions: string;
  status: 'Pending Acknowledgment' | 'Accepted' | 'Rejected' | 'Completed';
  assignedBy: string;
  roomNo: string;
}

interface TeacherSubstitutesState {
  isActionModalOpen: boolean;
  selectedSubstitute: SubstituteData | null;
  substitutesList: SubstituteData[];
  
  openActionModal: (substitute: SubstituteData) => void;
  closeActionModal: () => void;
  updateSubstituteStatus: (id: string, status: 'Pending Acknowledgment' | 'Accepted' | 'Rejected' | 'Completed', reason?: string) => void;
}

export const useTeacherSubstitutesStore = create<TeacherSubstitutesState>((set) => ({
  isActionModalOpen: false,
  selectedSubstitute: null,
  substitutesList: TEACHER_SUBSTITUTES_MOCK,

  openActionModal: (substitute) => set({ selectedSubstitute: substitute, isActionModalOpen: true }),
  closeActionModal: () => set({ selectedSubstitute: null, isActionModalOpen: false }),
  
  updateSubstituteStatus: (id, status, reason) => set((state) => ({
    substitutesList: state.substitutesList.map(sub => 
      sub.id === id ? { ...sub, status, ...(reason ? { remarks: reason } : {}) } : sub
    )
  })),
}));
