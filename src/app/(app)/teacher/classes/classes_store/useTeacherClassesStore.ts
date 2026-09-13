import { create } from 'zustand';

interface TeacherClassesState {
  // Navigation State
  selectedClassId: string | null;
  selectedStudentId: string | null;
  
  // Modals
  isClassDetailsModalOpen: boolean;
  isStudentProfileModalOpen: boolean;
  activeStudentTab: string;

  // Actions
  openClassDetailsModal: (classId: string) => void;
  closeClassDetailsModal: () => void;
  openStudentProfileModal: (studentId: string) => void;
  closeStudentProfileModal: () => void;
  setActiveStudentTab: (tabId: string) => void;
}

export const useTeacherClassesStore = create<TeacherClassesState>((set) => ({
  selectedClassId: null,
  selectedStudentId: null,
  
  isClassDetailsModalOpen: false,
  isStudentProfileModalOpen: false,
  activeStudentTab: 'profile',

  openClassDetailsModal: (classId) => set({ 
    selectedClassId: classId, 
    isClassDetailsModalOpen: true 
  }),
  
  closeClassDetailsModal: () => set({ 
    selectedClassId: null, 
    isClassDetailsModalOpen: false 
  }),

  openStudentProfileModal: (studentId) => set({ 
    selectedStudentId: studentId, 
    isStudentProfileModalOpen: true,
    activeStudentTab: 'profile'
  }),
  
  closeStudentProfileModal: () => set({ 
    selectedStudentId: null, 
    isStudentProfileModalOpen: false 
  }),

  setActiveStudentTab: (tabId) => set({ activeStudentTab: tabId }),
}));
