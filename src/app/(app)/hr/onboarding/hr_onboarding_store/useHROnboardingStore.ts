import { create } from 'zustand';
import { HROnboardingRecord } from '../hr_onboarding_types/HROnboardingTypes';
import { MOCK_HR_ONBOARDING } from '../hr_onboarding_utils/HROnboardingConstants';

interface HROnboardingState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HROnboardingRecord | null;
  setSelectedRecord: (record: HROnboardingRecord | null) => void;

  onboardingData: HROnboardingRecord[];
}

export const useHROnboardingStore = create<HROnboardingState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isActionModalOpen: false,
  setActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),

  selectedRecord: null,
  setSelectedRecord: (record) => set({ selectedRecord: record }),

  onboardingData: MOCK_HR_ONBOARDING,
}));
