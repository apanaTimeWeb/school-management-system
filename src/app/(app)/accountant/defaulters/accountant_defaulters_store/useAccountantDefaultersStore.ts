import { create } from 'zustand';
import { DefaulterRecord } from '../accountant_defaulters_types/AccountantDefaultersTypes';

interface AccountantDefaultersState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  classFilter: string;
  setClassFilter: (cls: string) => void;
  
  sectionFilter: string;
  setSectionFilter: (sec: string) => void;

  agingFilter: string; // "All", "1-30", "31-60", "61-90", "90+"
  setAgingFilter: (aging: string) => void;

  selectedDefaulter: DefaulterRecord | null;
  setSelectedDefaulter: (defaulter: DefaulterRecord | null) => void;

  isReminderModalOpen: boolean;
  setReminderModalOpen: (isOpen: boolean) => void;

  isFollowUpModalOpen: boolean;
  setFollowUpModalOpen: (isOpen: boolean) => void;
}

export const useAccountantDefaultersStore = create<AccountantDefaultersState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  classFilter: "All",
  setClassFilter: (cls) => set({ classFilter: cls }),
  
  sectionFilter: "All",
  setSectionFilter: (sec) => set({ sectionFilter: sec }),

  agingFilter: "All",
  setAgingFilter: (aging) => set({ agingFilter: aging }),

  selectedDefaulter: null,
  setSelectedDefaulter: (defaulter) => set({ selectedDefaulter: defaulter }),

  isReminderModalOpen: false,
  setReminderModalOpen: (isOpen) => set({ isReminderModalOpen: isOpen }),

  isFollowUpModalOpen: false,
  setFollowUpModalOpen: (isOpen) => set({ isFollowUpModalOpen: isOpen }),
}));
