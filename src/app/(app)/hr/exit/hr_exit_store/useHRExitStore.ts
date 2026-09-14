import { create } from 'zustand';
import { HRExitRecord } from '../hr_exit_types/HRExitTypes';
import { MOCK_HR_EXITS } from '../hr_exit_utils/HRExitConstants';

interface HRExitState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HRExitRecord | null;
  setSelectedRecord: (record: HRExitRecord | null) => void;

  exitData: HRExitRecord[];
}

export const useHRExitStore = create<HRExitState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isActionModalOpen: false,
  setActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),

  selectedRecord: null,
  setSelectedRecord: (record) => set({ selectedRecord: record }),

  exitData: MOCK_HR_EXITS,
}));
