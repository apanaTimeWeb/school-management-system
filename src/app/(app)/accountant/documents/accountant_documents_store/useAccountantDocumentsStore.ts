import { create } from 'zustand';
import { FinancialDocument, DocumentCategory } from '../accountant_documents_types/AccountantDocumentsTypes';

interface AccountantDocumentsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  categoryFilter: DocumentCategory | 'All';
  setCategoryFilter: (category: DocumentCategory | 'All') => void;

  isUploadModalOpen: boolean;
  setUploadModalOpen: (isOpen: boolean) => void;

  selectedDocument: FinancialDocument | null;
  setSelectedDocument: (doc: FinancialDocument | null) => void;

  isViewModalOpen: boolean;
  setViewModalOpen: (isOpen: boolean) => void;
}

export const useAccountantDocumentsStore = create<AccountantDocumentsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  categoryFilter: 'All',
  setCategoryFilter: (category) => set({ categoryFilter: category }),

  isUploadModalOpen: false,
  setUploadModalOpen: (isOpen) => set({ isUploadModalOpen: isOpen }),

  selectedDocument: null,
  setSelectedDocument: (doc) => set({ selectedDocument: doc }),

  isViewModalOpen: false,
  setViewModalOpen: (isOpen) => set({ isViewModalOpen: isOpen }),
}));
