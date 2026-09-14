import { create } from 'zustand';
import { HRLetter } from '../hr_appointments_types/HRAppointmentsTypes';
import { MOCK_HR_LETTERS } from '../hr_appointments_utils/HRAppointmentsConstants';

interface HRAppointmentsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  typeFilter: string;
  setTypeFilter: (type: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isGenerateModalOpen: boolean;
  setGenerateModalOpen: (isOpen: boolean) => void;

  lettersData: HRLetter[];
}

export const useHRAppointmentsStore = create<HRAppointmentsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  typeFilter: "All",
  setTypeFilter: (type) => set({ typeFilter: type }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isGenerateModalOpen: false,
  setGenerateModalOpen: (isOpen) => set({ isGenerateModalOpen: isOpen }),

  lettersData: MOCK_HR_LETTERS,
}));
