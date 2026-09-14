import { create } from 'zustand';

interface AccountantCashbookState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  selectedDate: string;
  setSelectedDate: (date: string) => void;

  isHandoverModalOpen: boolean;
  setHandoverModalOpen: (isOpen: boolean) => void;

  isClosingModalOpen: boolean;
  setClosingModalOpen: (isOpen: boolean) => void;

  isSummaryModalOpen: boolean;
  setSummaryModalOpen: (isOpen: boolean) => void;
}

export const useAccountantCashbookStore = create<AccountantCashbookState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  selectedDate: new Date().toISOString().split('T')[0],
  setSelectedDate: (date) => set({ selectedDate: date }),

  isHandoverModalOpen: false,
  setHandoverModalOpen: (isOpen) => set({ isHandoverModalOpen: isOpen }),

  isClosingModalOpen: false,
  setClosingModalOpen: (isOpen) => set({ isClosingModalOpen: isOpen }),

  isSummaryModalOpen: false,
  setSummaryModalOpen: (isOpen) => set({ isSummaryModalOpen: isOpen }),
}));
