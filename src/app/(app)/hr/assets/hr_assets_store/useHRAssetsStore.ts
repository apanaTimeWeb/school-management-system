import { create } from 'zustand';
import { HRAssetRecord } from '../hr_assets_types/HRAssetsTypes';
import { MOCK_HR_ASSETS } from '../hr_assets_utils/HRAssetsConstants';

interface HRAssetsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  typeFilter: string;
  setTypeFilter: (type: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HRAssetRecord | null;
  setSelectedRecord: (record: HRAssetRecord | null) => void;

  assetsData: HRAssetRecord[];
}

export const useHRAssetsStore = create<HRAssetsState>((set) => ({
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

  assetsData: MOCK_HR_ASSETS,
}));
