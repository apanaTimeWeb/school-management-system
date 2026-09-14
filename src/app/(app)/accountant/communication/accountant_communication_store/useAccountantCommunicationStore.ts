import { create } from 'zustand';

interface AccountantCommunicationState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isComposeModalOpen: boolean;
  setComposeModalOpen: (isOpen: boolean) => void;
}

export const useAccountantCommunicationStore = create<AccountantCommunicationState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isComposeModalOpen: false,
  setComposeModalOpen: (isOpen) => set({ isComposeModalOpen: isOpen }),
}));
