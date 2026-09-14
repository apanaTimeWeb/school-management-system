import { create } from 'zustand';
import { HROfficeAdminRecord } from '../hr_office_admin_types/HROfficeAdminTypes';
import { MOCK_HR_OFFICE_ADMIN } from '../hr_office_admin_utils/HROfficeAdminConstants';

interface HROfficeAdminState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  categoryFilter: string;
  setCategoryFilter: (category: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HROfficeAdminRecord | null;
  setSelectedRecord: (record: HROfficeAdminRecord | null) => void;

  adminData: HROfficeAdminRecord[];
}

export const useHROfficeAdminStore = create<HROfficeAdminState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  categoryFilter: "All",
  setCategoryFilter: (category) => set({ categoryFilter: category }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isActionModalOpen: false,
  setActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),

  selectedRecord: null,
  setSelectedRecord: (record) => set({ selectedRecord: record }),

  adminData: MOCK_HR_OFFICE_ADMIN,
}));
