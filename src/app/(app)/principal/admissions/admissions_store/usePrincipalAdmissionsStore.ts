import { create } from 'zustand';

interface PrincipalAdmissionsFilters {
  searchQuery: string;
  stageFilter: string;
}

interface PrincipalAdmissionsState {
  // Filters
  filters: PrincipalAdmissionsFilters;
  
  // Modal State
  selectedApplicationId: string | null;
  isReviewModalOpen: boolean;
  activeReviewTab: string;
  
  // Actions
  setFilters: (filters: Partial<PrincipalAdmissionsFilters>) => void;
  openReviewModal: (applicationId: string) => void;
  closeReviewModal: () => void;
  setActiveReviewTab: (tabId: string) => void;
}

const initialFilters: PrincipalAdmissionsFilters = {
  searchQuery: '',
  stageFilter: 'All',
};

export const usePrincipalAdmissionsStore = create<PrincipalAdmissionsState>((set) => ({
  filters: initialFilters,
  
  setFilters: (newFilters) => 
    set((state) => ({ 
      filters: { ...state.filters, ...newFilters } 
    })),
    
  selectedApplicationId: null,
  isReviewModalOpen: false,
  activeReviewTab: 'overview',
  
  openReviewModal: (applicationId) => 
    set(() => ({ 
      selectedApplicationId: applicationId, 
      isReviewModalOpen: true,
      activeReviewTab: 'overview'
    })),
    
  closeReviewModal: () => 
    set(() => ({ 
      isReviewModalOpen: false, 
      selectedApplicationId: null 
    })),
    
  setActiveReviewTab: (tabId) => 
    set(() => ({ activeReviewTab: tabId })),
}));
