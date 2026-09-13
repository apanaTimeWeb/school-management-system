import { create } from 'zustand';

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
  
  openActionModal: (substitute: SubstituteData) => void;
  closeActionModal: () => void;
}

export const useTeacherSubstitutesStore = create<TeacherSubstitutesState>((set) => ({
  isActionModalOpen: false,
  selectedSubstitute: null,

  openActionModal: (substitute) => set({ selectedSubstitute: substitute, isActionModalOpen: true }),
  closeActionModal: () => set({ selectedSubstitute: null, isActionModalOpen: false }),
}));
