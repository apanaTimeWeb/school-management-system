import { create } from 'zustand';
import { BankTransactionRecord } from '../accountant_bank_types/AccountantBankTypes';

interface AccountantBankState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  typeFilter: string;
  setTypeFilter: (type: string) => void;

  selectedTxn: BankTransactionRecord | null;
  setSelectedTxn: (txn: BankTransactionRecord | null) => void;

  isUpdateStatusModalOpen: boolean;
  setUpdateStatusModalOpen: (isOpen: boolean) => void;

  isDetailsModalOpen: boolean;
  setDetailsModalOpen: (isOpen: boolean) => void;

  isReconcileModalOpen: boolean;
  setReconcileModalOpen: (isOpen: boolean) => void;
}

export const useAccountantBankStore = create<AccountantBankState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  typeFilter: "All",
  setTypeFilter: (type) => set({ typeFilter: type }),

  selectedTxn: null,
  setSelectedTxn: (txn) => set({ selectedTxn: txn }),

  isUpdateStatusModalOpen: false,
  setUpdateStatusModalOpen: (isOpen) => set({ isUpdateStatusModalOpen: isOpen }),

  isDetailsModalOpen: false,
  setDetailsModalOpen: (isOpen) => set({ isDetailsModalOpen: isOpen }),

  isReconcileModalOpen: false,
  setReconcileModalOpen: (isOpen) => set({ isReconcileModalOpen: isOpen }),
}));
