import { create } from 'zustand';
import { ExpenseRecord } from '../accountant_expenses_types/AccountantExpensesTypes';

interface AccountantExpensesState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  categoryFilter: string;
  setCategoryFilter: (category: string) => void;

  selectedExpense: ExpenseRecord | null;
  setSelectedExpense: (expense: ExpenseRecord | null) => void;

  isNewExpenseModalOpen: boolean;
  setNewExpenseModalOpen: (isOpen: boolean) => void;

  isDetailsModalOpen: boolean;
  setDetailsModalOpen: (isOpen: boolean) => void;
}

export const useAccountantExpensesStore = create<AccountantExpensesState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  categoryFilter: "All",
  setCategoryFilter: (category) => set({ categoryFilter: category }),

  selectedExpense: null,
  setSelectedExpense: (expense) => set({ selectedExpense: expense }),

  isNewExpenseModalOpen: false,
  setNewExpenseModalOpen: (isOpen) => set({ isNewExpenseModalOpen: isOpen }),

  isDetailsModalOpen: false,
  setDetailsModalOpen: (isOpen) => set({ isDetailsModalOpen: isOpen }),
}));
