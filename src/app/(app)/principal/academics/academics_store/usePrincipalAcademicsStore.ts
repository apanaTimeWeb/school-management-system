import { create } from 'zustand';

interface PrincipalAcademicsState {
  activeTab: 'classes' | 'subjects' | 'progress' | 'calendar';
  setActiveTab: (tab: 'classes' | 'subjects' | 'progress' | 'calendar') => void;

  // Modals
  isAssignTeacherModalOpen: boolean;
  selectedSectionId: string | null;
  setAssignTeacherModalOpen: (isOpen: boolean, sectionId?: string) => void;

  isHODModalOpen: boolean;
  selectedSubjectId: string | null;
  setHODModalOpen: (isOpen: boolean, subjectId?: string) => void;
}

export const usePrincipalAcademicsStore = create<PrincipalAcademicsState>((set) => ({
  activeTab: 'classes',
  setActiveTab: (tab) => set({ activeTab: tab }),

  isAssignTeacherModalOpen: false,
  selectedSectionId: null,
  setAssignTeacherModalOpen: (isOpen, sectionId) => set({ 
    isAssignTeacherModalOpen: isOpen, 
    selectedSectionId: sectionId || null 
  }),

  isHODModalOpen: false,
  selectedSubjectId: null,
  setHODModalOpen: (isOpen, subjectId) => set({ 
    isHODModalOpen: isOpen, 
    selectedSubjectId: subjectId || null 
  }),
}));
