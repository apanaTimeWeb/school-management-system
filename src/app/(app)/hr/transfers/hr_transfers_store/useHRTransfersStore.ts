import { create } from 'zustand';
import { HRTransferRecord } from '../hr_transfers_types/HRTransfersTypes';
import { MOCK_HR_TRANSFERS } from '../hr_transfers_utils/HRTransfersConstants';

interface HRTransfersState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  typeFilter: string;
  setTypeFilter: (type: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HRTransferRecord | null;
  setSelectedRecord: (record: HRTransferRecord | null) => void;

  transferData: HRTransferRecord[];
}

export const useHRTransfersStore = create<HRTransfersState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  typeFilter: "All",
  setTypeFilter: (type) => set({ typeFilter: type }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isActionModalOpen: false,
  setActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),

  selectedRecord: null,
  setSelectedRecord: (record) => set({ selectedRecord: record }),

  transferData: MOCK_HR_TRANSFERS,
}));
