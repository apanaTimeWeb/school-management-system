import { create } from 'zustand';
import { HRIDCardRecord } from '../hr_id_cards_types/HRIDCardsTypes';
import { MOCK_HR_ID_CARDS } from '../hr_id_cards_utils/HRIDCardsConstants';

interface HRIDCardsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HRIDCardRecord | null;
  setSelectedRecord: (record: HRIDCardRecord | null) => void;

  idCardsData: HRIDCardRecord[];
}

export const useHRIDCardsStore = create<HRIDCardsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isActionModalOpen: false,
  setActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),

  selectedRecord: null,
  setSelectedRecord: (record) => set({ selectedRecord: record }),

  idCardsData: MOCK_HR_ID_CARDS,
}));
