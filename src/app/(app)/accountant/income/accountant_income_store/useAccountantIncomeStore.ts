import { create } from 'zustand';
import { IncomeRecord } from '../accountant_income_types/AccountantIncomeTypes';

interface AccountantIncomeState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  categoryFilter: string;
  setCategoryFilter: (category: string) => void;

  selectedIncome: IncomeRecord | null;
  setSelectedIncome: (income: IncomeRecord | null) => void;

  isRecordIncomeModalOpen: boolean;
  setRecordIncomeModalOpen: (isOpen: boolean) => void;

  isDetailsModalOpen: boolean;
  setDetailsModalOpen: (isOpen: boolean) => void;
}

export const useAccountantIncomeStore = create<AccountantIncomeState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  categoryFilter: "All",
  setCategoryFilter: (category) => set({ categoryFilter: category }),

  selectedIncome: null,
  setSelectedIncome: (income) => set({ selectedIncome: income }),

  isRecordIncomeModalOpen: false,
  setRecordIncomeModalOpen: (isOpen) => set({ isRecordIncomeModalOpen: isOpen }),

  isDetailsModalOpen: false,
  setDetailsModalOpen: (isOpen) => set({ isDetailsModalOpen: isOpen }),
}));
