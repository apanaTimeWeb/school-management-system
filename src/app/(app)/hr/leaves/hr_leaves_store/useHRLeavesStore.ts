import { create } from 'zustand';
import { HRLeaveRequest } from '../hr_leaves_types/HRLeavesTypes';
import { MOCK_HR_LEAVES } from '../hr_leaves_utils/HRLeavesConstants';

interface HRLeavesState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  typeFilter: string;
  setTypeFilter: (type: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedLeave: HRLeaveRequest | null;
  setSelectedLeave: (leave: HRLeaveRequest | null) => void;

  leaves: HRLeaveRequest[];
}

export const useHRLeavesStore = create<HRLeavesState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "Pending",
  setStatusFilter: (status) => set({ statusFilter: status }),

  typeFilter: "All",
  setTypeFilter: (type) => set({ typeFilter: type }),

  isActionModalOpen: false,
  setActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),

  selectedLeave: null,
  setSelectedLeave: (leave) => set({ selectedLeave: leave }),

  leaves: MOCK_HR_LEAVES,
}));
