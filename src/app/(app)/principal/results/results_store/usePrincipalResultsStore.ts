import { create } from 'zustand';

interface PrincipalResultsState {
  activeTab: 'overview' | 'performance' | 'publish';
  setActiveTab: (tab: 'overview' | 'performance' | 'publish') => void;

  isReportCardModalOpen: boolean;
  selectedDraftId: string | null;
  setReportCardModalOpen: (isOpen: boolean, draftId?: string) => void;
}

export const usePrincipalResultsStore = create<PrincipalResultsState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),

  isReportCardModalOpen: false,
  selectedDraftId: null,
  setReportCardModalOpen: (isOpen, draftId) => set({
    isReportCardModalOpen: isOpen,
    selectedDraftId: draftId || null
  })
}));
