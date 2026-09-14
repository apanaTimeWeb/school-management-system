import { create } from 'zustand';
import { HRReportRecord } from '../hr_reports_types/HRReportsTypes';
import { MOCK_HR_REPORTS } from '../hr_reports_utils/HRReportsConstants';

interface HRReportsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  categoryFilter: string;
  setCategoryFilter: (category: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HRReportRecord | null;
  setSelectedRecord: (record: HRReportRecord | null) => void;

  reportsData: HRReportRecord[];
}

export const useHRReportsStore = create<HRReportsState>((set) => ({
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

  reportsData: MOCK_HR_REPORTS,
}));
