import { create } from 'zustand';
import { GlobalSearchResult, GlobalSearchEntityType } from '../accountant_search_types/AccountantSearchTypes';

interface AccountantSearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  entityFilter: GlobalSearchEntityType | 'All';
  setEntityFilter: (entity: GlobalSearchEntityType | 'All') => void;

  selectedResult: GlobalSearchResult | null;
  setSelectedResult: (result: GlobalSearchResult | null) => void;

  isViewModalOpen: boolean;
  setViewModalOpen: (isOpen: boolean) => void;
}

export const useAccountantSearchStore = create<AccountantSearchState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  entityFilter: 'All',
  setEntityFilter: (entity) => set({ entityFilter: entity }),

  selectedResult: null,
  setSelectedResult: (result) => set({ selectedResult: result }),

  isViewModalOpen: false,
  setViewModalOpen: (isOpen) => set({ isViewModalOpen: isOpen }),
}));
