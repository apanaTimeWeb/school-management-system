import { create } from 'zustand';
import { HRCommunicationRecord } from '../hr_communication_types/HRCommunicationTypes';
import { MOCK_HR_COMMUNICATION } from '../hr_communication_utils/HRCommunicationConstants';

interface HRCommunicationState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  typeFilter: string;
  setTypeFilter: (type: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isComposeModalOpen: boolean;
  setComposeModalOpen: (isOpen: boolean) => void;

  communicationData: HRCommunicationRecord[];
}

export const useHRCommunicationStore = create<HRCommunicationState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  typeFilter: "All",
  setTypeFilter: (type) => set({ typeFilter: type }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isComposeModalOpen: false,
  setComposeModalOpen: (isOpen) => set({ isComposeModalOpen: isOpen }),

  communicationData: MOCK_HR_COMMUNICATION,
}));
