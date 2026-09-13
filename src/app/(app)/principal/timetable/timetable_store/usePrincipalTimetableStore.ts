import { create } from 'zustand';

interface PrincipalTimetableState {
  activeTab: 'class' | 'teacher' | 'approval';
  setActiveTab: (tab: 'class' | 'teacher' | 'approval') => void;

  // Substitute Modal State
  isSubstituteModalOpen: boolean;
  selectedPeriodId: string | null;
  setSubstituteModalOpen: (isOpen: boolean, periodId?: string) => void;

  // Conflict Modal State
  isConflictModalOpen: boolean;
  selectedConflictId: string | null;
  setConflictModalOpen: (isOpen: boolean, conflictId?: string) => void;
}

export const usePrincipalTimetableStore = create<PrincipalTimetableState>((set) => ({
  activeTab: 'class',
  setActiveTab: (tab) => set({ activeTab: tab }),

  isSubstituteModalOpen: false,
  selectedPeriodId: null,
  setSubstituteModalOpen: (isOpen, periodId) => set({
    isSubstituteModalOpen: isOpen,
    selectedPeriodId: periodId || null
  }),

  isConflictModalOpen: false,
  selectedConflictId: null,
  setConflictModalOpen: (isOpen, conflictId) => set({
    isConflictModalOpen: isOpen,
    selectedConflictId: conflictId || null
  })
}));
