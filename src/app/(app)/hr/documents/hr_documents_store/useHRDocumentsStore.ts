import { create } from 'zustand';
import { HRDocument } from '../hr_documents_types/HRDocumentsTypes';
import { MOCK_HR_DOCUMENTS } from '../hr_documents_utils/HRDocumentsConstants';

interface HRDocumentsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  typeFilter: string;
  setTypeFilter: (type: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  documentsData: HRDocument[];
}

export const useHRDocumentsStore = create<HRDocumentsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  typeFilter: "All",
  setTypeFilter: (type) => set({ typeFilter: type }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  documentsData: MOCK_HR_DOCUMENTS,
}));
