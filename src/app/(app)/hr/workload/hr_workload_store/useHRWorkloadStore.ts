import { create } from 'zustand';
import { HRWorkloadRecord } from '../hr_workload_types/HRWorkloadTypes';
import { MOCK_HR_WORKLOAD } from '../hr_workload_utils/HRWorkloadConstants';

interface HRWorkloadState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  departmentFilter: string;
  setDepartmentFilter: (dept: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HRWorkloadRecord | null;
  setSelectedRecord: (record: HRWorkloadRecord | null) => void;

  workloadData: HRWorkloadRecord[];
}

export const useHRWorkloadStore = create<HRWorkloadState>((set) => ({
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

  workloadData: MOCK_HR_WORKLOAD,
}));
