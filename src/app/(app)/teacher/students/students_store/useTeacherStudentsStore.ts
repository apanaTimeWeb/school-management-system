import { create } from 'zustand';

interface TeacherStudentsState {
  selectedStudentId: string | null;
  isStudentProfileModalOpen: boolean;
  activeProfileTab: 'profile' | 'academic' | 'attendance' | 'assignments' | 'behaviour';
  selectedClassFilter: string;

  openStudentProfileModal: (studentId: string) => void;
  closeStudentProfileModal: () => void;
  setActiveProfileTab: (tab: 'profile' | 'academic' | 'attendance' | 'assignments' | 'behaviour') => void;
  setSelectedClassFilter: (cls: string) => void;
}

export const useTeacherStudentsStore = create<TeacherStudentsState>((set) => ({
  selectedStudentId: null,
  isStudentProfileModalOpen: false,
  activeProfileTab: 'profile',
  selectedClassFilter: 'All Classes',

  openStudentProfileModal: (studentId) => set({ 
    selectedStudentId: studentId, 
    isStudentProfileModalOpen: true,
    activeProfileTab: 'profile'
  }),
  
  closeStudentProfileModal: () => set({ 
    selectedStudentId: null, 
    isStudentProfileModalOpen: false 
  }),

  setActiveProfileTab: (tab) => set({ activeProfileTab: tab }),
  setSelectedClassFilter: (cls) => set({ selectedClassFilter: cls }),
}));
