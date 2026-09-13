import { create } from 'zustand';
import { PrincipalBorrowedBook } from '../library_types/PrincipalLibrary.types';

interface PrincipalLibraryState {
  activeTab: 'overview' | 'borrowing';
  setActiveTab: (tab: 'overview' | 'borrowing') => void;

  selectedBook: PrincipalBorrowedBook | null;
  setSelectedBook: (book: PrincipalBorrowedBook | null) => void;
}

export const usePrincipalLibraryStore = create<PrincipalLibraryState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedBook: null,
  setSelectedBook: (book) => set({ selectedBook: book }),
}));
