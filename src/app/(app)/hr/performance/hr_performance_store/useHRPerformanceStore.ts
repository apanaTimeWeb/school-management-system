import { create } from 'zustand';
import { HRPerformanceRecord } from '../hr_performance_types/HRPerformanceTypes';
import { MOCK_HR_PERFORMANCE } from '../hr_performance_utils/HRPerformanceConstants';

interface HRPerformanceState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  departmentFilter: string;
  setDepartmentFilter: (dept: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HRPerformanceRecord | null;
  setSelectedRecord: (record: HRPerformanceRecord | null) => void;

  performanceData: HRPerformanceRecord[];
}

export const useHRPerformanceStore = create<HRPerformanceState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  departmentFilter: "All",
  setDepartmentFilter: (dept) => set({ departmentFilter: dept }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isActionModalOpen: false,
  setActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),

  selectedRecord: null,
  setSelectedRecord: (record) => set({ selectedRecord: record }),

  performanceData: MOCK_HR_PERFORMANCE,
}));
