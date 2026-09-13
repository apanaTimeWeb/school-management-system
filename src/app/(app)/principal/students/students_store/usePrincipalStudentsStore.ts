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
  isTransferModalOpen: boolean;
  isPromotionModalOpen: boolean;
  isWithdrawalModalOpen: boolean;
  
  // Actions
  openProfileModal: (studentId: string) => void;
  closeProfileModal: () => void;
  setActiveProfileTab: (tabId: string) => void;
  setTransferModalOpen: (isOpen: boolean) => void;
  setPromotionModalOpen: (isOpen: boolean) => void;
  setWithdrawalModalOpen: (isOpen: boolean) => void;
  
  // Mock Data Mutators
  updateLifecycleStatus: (studentId: string, updates: Partial<any>) => void;
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
  isTransferModalOpen: false,
  isPromotionModalOpen: false,
  isWithdrawalModalOpen: false,
  
  openProfileModal: (studentId) => 
    set(() => ({ 
      selectedStudentId: studentId, 
      isProfileModalOpen: true,
      activeProfileTab: 'overview' // Reset tab on new profile open
    })),
    
  closeProfileModal: () => 
    set(() => ({ 
      isProfileModalOpen: false, 
      selectedStudentId: null,
      isTransferModalOpen: false,
      isPromotionModalOpen: false,
      isWithdrawalModalOpen: false,
    })),
    
  setActiveProfileTab: (tabId) => 
    set(() => ({ activeProfileTab: tabId })),

  setTransferModalOpen: (isOpen) => set(() => ({ isTransferModalOpen: isOpen })),
  setPromotionModalOpen: (isOpen) => set(() => ({ isPromotionModalOpen: isOpen })),
  setWithdrawalModalOpen: (isOpen) => set(() => ({ isWithdrawalModalOpen: isOpen })),
  
  updateLifecycleStatus: (studentId, updates) => {
    // In a real app, this would optimistic update or wait for API
    console.log(`Updating lifecycle for ${studentId}:`, updates);
  }
}));
