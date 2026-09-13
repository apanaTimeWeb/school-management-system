import { create } from 'zustand';

interface PrincipalExaminationsState {
  activeTab: 'calendar' | 'approval' | 'internals';
  setActiveTab: (tab: 'calendar' | 'approval' | 'internals') => void;

  // Approve Marks Modal State
  isApproveModalOpen: boolean;
  selectedApprovalId: string | null;
  setApproveModalOpen: (isOpen: boolean, approvalId?: string) => void;
}

export const usePrincipalExaminationsStore = create<PrincipalExaminationsState>((set) => ({
  activeTab: 'calendar',
  setActiveTab: (tab) => set({ activeTab: tab }),

  isApproveModalOpen: false,
  selectedApprovalId: null,
  setApproveModalOpen: (isOpen, approvalId) => set({
    isApproveModalOpen: isOpen,
    selectedApprovalId: approvalId || null
  })
}));
