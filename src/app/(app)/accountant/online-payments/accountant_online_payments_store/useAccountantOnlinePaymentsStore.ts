import { create } from 'zustand';
import { OnlinePaymentRecord } from '../accountant_online_payments_types/AccountantOnlinePaymentsTypes';

interface AccountantOnlinePaymentsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  reconFilter: string;
  setReconFilter: (recon: string) => void;

  selectedTransaction: OnlinePaymentRecord | null;
  setSelectedTransaction: (transaction: OnlinePaymentRecord | null) => void;

  isTransactionModalOpen: boolean;
  setTransactionModalOpen: (isOpen: boolean) => void;

  isRefundModalOpen: boolean;
  setRefundModalOpen: (isOpen: boolean) => void;
}

export const useAccountantOnlinePaymentsStore = create<AccountantOnlinePaymentsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  reconFilter: "All",
  setReconFilter: (recon) => set({ reconFilter: recon }),

  selectedTransaction: null,
  setSelectedTransaction: (transaction) => set({ selectedTransaction: transaction }),

  isTransactionModalOpen: false,
  setTransactionModalOpen: (isOpen) => set({ isTransactionModalOpen: isOpen }),

  isRefundModalOpen: false,
  setRefundModalOpen: (isOpen) => set({ isRefundModalOpen: isOpen }),
}));
