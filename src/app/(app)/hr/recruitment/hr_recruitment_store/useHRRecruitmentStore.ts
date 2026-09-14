import { create } from 'zustand';
import { HRCandidate } from '../hr_recruitment_types/HRRecruitmentTypes';
import { MOCK_HR_CANDIDATES } from '../hr_recruitment_utils/HRRecruitmentConstants';

interface HRRecruitmentState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  departmentFilter: string;
  setDepartmentFilter: (dept: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedCandidate: HRCandidate | null;
  setSelectedCandidate: (candidate: HRCandidate | null) => void;

  candidates: HRCandidate[];
}

export const useHRRecruitmentStore = create<HRRecruitmentState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  departmentFilter: "All",
  setDepartmentFilter: (dept) => set({ departmentFilter: dept }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isActionModalOpen: false,
  setActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),

  selectedCandidate: null,
  setSelectedCandidate: (candidate) => set({ selectedCandidate: candidate }),

  candidates: MOCK_HR_CANDIDATES,
}));
