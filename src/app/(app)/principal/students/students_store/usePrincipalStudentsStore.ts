// RESPONSIBILITY: Manages local UI state for the Principal Students module (active filters, selected student ID, modal open state, active tab).
import { create } from 'zustand';
import { PrincipalStudentsFilters } from '../students_types/PrincipalStudents.types';

interface PrincipalStudentsState {
  // Filter State
  filters: PrincipalStudentsFilters;
  setFilters: (filters: Partial<PrincipalStudentsFilters>) => void;
  resetFilters: () => void;
  
  // Modal State
  selectedStudentId: string | null;
  isProfileModalOpen: boolean;
  activeProfileTab: string;
  
  // Actions
  openProfileModal: (studentId: string) => void;
  closeProfileModal: () => void;
  setActiveProfileTab: (tabId: string) => void;
}

const initialFilters: PrincipalStudentsFilters = {
  searchQuery: '',
  classFilter: '',
  sectionFilter: '',
  statusFilter: '',
};

export const usePrincipalStudentsStore = create<PrincipalStudentsState>((set) => ({
  filters: initialFilters,
  
  setFilters: (newFilters) => 
    set((state) => ({ 
      filters: { ...state.filters, ...newFilters } 
    })),
    
  resetFilters: () => 
    set(() => ({ filters: initialFilters })),
    
  selectedStudentId: null,
  isProfileModalOpen: false,
  activeProfileTab: 'overview',
  
  openProfileModal: (studentId) => 
    set(() => ({ 
      selectedStudentId: studentId, 
      isProfileModalOpen: true,
      activeProfileTab: 'overview' // Reset tab on new profile open
    })),
    
  closeProfileModal: () => 
    set(() => ({ 
      isProfileModalOpen: false, 
      selectedStudentId: null 
    })),
    
  setActiveProfileTab: (tabId) => 
    set(() => ({ activeProfileTab: tabId })),
}));
