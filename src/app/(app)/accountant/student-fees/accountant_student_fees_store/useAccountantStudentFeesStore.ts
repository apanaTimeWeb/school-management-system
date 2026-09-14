import { create } from 'zustand';

interface AccountantStudentFeesState {
  activeProfileTab: 'structure' | 'payments' | 'discounts' | 'fines' | 'history';
  setActiveProfileTab: (tab: 'structure' | 'payments' | 'discounts' | 'fines' | 'history') => void;
  
  // Modal states for fully interactive buttons
  isCollectFeeModalOpen: boolean;
  setCollectFeeModalOpen: (isOpen: boolean) => void;
  
  isAddFineModalOpen: boolean;
  setAddFineModalOpen: (isOpen: boolean) => void;
  
  isGrantConcessionModalOpen: boolean;
  setGrantConcessionModalOpen: (isOpen: boolean) => void;
}

export const useAccountantStudentFeesStore = create<AccountantStudentFeesState>((set) => ({
  activeProfileTab: 'structure',
  setActiveProfileTab: (tab) => set({ activeProfileTab: tab }),

  isCollectFeeModalOpen: false,
  setCollectFeeModalOpen: (isOpen) => set({ isCollectFeeModalOpen: isOpen }),

  isAddFineModalOpen: false,
  setAddFineModalOpen: (isOpen) => set({ isAddFineModalOpen: isOpen }),

  isGrantConcessionModalOpen: false,
  setGrantConcessionModalOpen: (isOpen) => set({ isGrantConcessionModalOpen: isOpen }),
}));
