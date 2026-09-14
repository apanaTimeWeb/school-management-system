import { create } from 'zustand';
import { ConcessionRecord } from '../accountant_concessions_types/AccountantConcessionsTypes';

interface AccountantConcessionsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  typeFilter: string;
  setTypeFilter: (type: string) => void;
  
  statusFilter: string;
  setStatusFilter: (status: string) => void;

  selectedRequest: ConcessionRecord | null;
  setSelectedRequest: (request: ConcessionRecord | null) => void;

  isNewRequestModalOpen: boolean;
  setNewRequestModalOpen: (isOpen: boolean) => void;

  isDetailsModalOpen: boolean;
  setDetailsModalOpen: (isOpen: boolean) => void;
}

export const useAccountantConcessionsStore = create<AccountantConcessionsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  typeFilter: "All",
  setTypeFilter: (type) => set({ typeFilter: type }),
  
  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  selectedRequest: null,
  setSelectedRequest: (request) => set({ selectedRequest: request }),

  isNewRequestModalOpen: false,
  setNewRequestModalOpen: (isOpen) => set({ isNewRequestModalOpen: isOpen }),

  isDetailsModalOpen: false,
  setDetailsModalOpen: (isOpen) => set({ isDetailsModalOpen: isOpen }),
}));
