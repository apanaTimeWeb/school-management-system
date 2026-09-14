import { create } from 'zustand';
import { RefundRecord } from '../accountant_refunds_types/AccountantRefundsTypes';

interface AccountantRefundsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  selectedRefund: RefundRecord | null;
  setSelectedRefund: (request: RefundRecord | null) => void;

  isNewRefundModalOpen: boolean;
  setNewRefundModalOpen: (isOpen: boolean) => void;

  isProcessModalOpen: boolean;
  setProcessModalOpen: (isOpen: boolean) => void;

  isDetailsModalOpen: boolean;
  setDetailsModalOpen: (isOpen: boolean) => void;
}

export const useAccountantRefundsStore = create<AccountantRefundsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  selectedRefund: null,
  setSelectedRefund: (request) => set({ selectedRefund: request }),

  isNewRefundModalOpen: false,
  setNewRefundModalOpen: (isOpen) => set({ isNewRefundModalOpen: isOpen }),

  isProcessModalOpen: false,
  setProcessModalOpen: (isOpen) => set({ isProcessModalOpen: isOpen }),

  isDetailsModalOpen: false,
  setDetailsModalOpen: (isOpen) => set({ isDetailsModalOpen: isOpen }),
}));
