import { create } from 'zustand';
import { HRMeetingRecord } from '../hr_meetings_types/HRMeetingsTypes';
import { MOCK_HR_MEETINGS } from '../hr_meetings_utils/HRMeetingsConstants';

interface HRMeetingsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  typeFilter: string;
  setTypeFilter: (type: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HRMeetingRecord | null;
  setSelectedRecord: (record: HRMeetingRecord | null) => void;

  meetingsData: HRMeetingRecord[];
}

export const useHRMeetingsStore = create<HRMeetingsState>((set) => ({
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

  meetingsData: MOCK_HR_MEETINGS,
}));
