import { create } from 'zustand';
import { DailyClosingSummary } from '../accountant_closing_types/AccountantClosingTypes';

interface AccountantClosingState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  selectedHistory: DailyClosingSummary | null;
  setSelectedHistory: (record: DailyClosingSummary | null) => void;

  isConfirmModalOpen: boolean;
  setConfirmModalOpen: (isOpen: boolean) => void;

  isDetailsModalOpen: boolean;
  setDetailsModalOpen: (isOpen: boolean) => void;
}

export const useAccountantClosingStore = create<AccountantClosingState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  selectedHistory: null,
  setSelectedHistory: (record) => set({ selectedHistory: record }),

  isConfirmModalOpen: false,
  setConfirmModalOpen: (isOpen) => set({ isConfirmModalOpen: isOpen }),

  isDetailsModalOpen: false,
  setDetailsModalOpen: (isOpen) => set({ isDetailsModalOpen: isOpen }),
}));
