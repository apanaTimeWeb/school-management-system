import { create } from 'zustand';
import { FineRecord } from '../accountant_fines_types/AccountantFinesTypes';

interface AccountantFinesState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  selectedFine: FineRecord | null;
  setSelectedFine: (fine: FineRecord | null) => void;

  isCollectModalOpen: boolean;
  setCollectModalOpen: (isOpen: boolean) => void;

  isWaiverModalOpen: boolean;
  setWaiverModalOpen: (isOpen: boolean) => void;

  isHistoryModalOpen: boolean;
  setHistoryModalOpen: (isOpen: boolean) => void;
}

export const useAccountantFinesStore = create<AccountantFinesState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  selectedFine: null,
  setSelectedFine: (fine) => set({ selectedFine: fine }),

  isCollectModalOpen: false,
  setCollectModalOpen: (isOpen) => set({ isCollectModalOpen: isOpen }),

  isWaiverModalOpen: false,
  setWaiverModalOpen: (isOpen) => set({ isWaiverModalOpen: isOpen }),

  isHistoryModalOpen: false,
  setHistoryModalOpen: (isOpen) => set({ isHistoryModalOpen: isOpen }),
}));
