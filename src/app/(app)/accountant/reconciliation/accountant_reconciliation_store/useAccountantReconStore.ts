import { create } from 'zustand';
import { ReconRecord, ReconCategory } from '../accountant_reconciliation_types/AccountantReconTypes';

interface AccountantReconState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  activeTab: ReconCategory | 'All';
  setActiveTab: (tab: ReconCategory | 'All') => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  selectedRecord: ReconRecord | null;
  setSelectedRecord: (record: ReconRecord | null) => void;

  isMatchModalOpen: boolean;
  setMatchModalOpen: (isOpen: boolean) => void;

  isResolveModalOpen: boolean;
  setResolveModalOpen: (isOpen: boolean) => void;
}

export const useAccountantReconStore = create<AccountantReconState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  activeTab: 'All',
  setActiveTab: (tab) => set({ activeTab: tab }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  selectedRecord: null,
  setSelectedRecord: (record) => set({ selectedRecord: record }),

  isMatchModalOpen: false,
  setMatchModalOpen: (isOpen) => set({ isMatchModalOpen: isOpen }),

  isResolveModalOpen: false,
  setResolveModalOpen: (isOpen) => set({ isResolveModalOpen: isOpen }),
}));
