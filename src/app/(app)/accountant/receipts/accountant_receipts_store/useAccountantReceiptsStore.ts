import { create } from 'zustand';
import { ReceiptRecord } from '../accountant_receipts_types/AccountantReceiptsTypes';

interface AccountantReceiptsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  selectedReceipt: ReceiptRecord | null;
  setSelectedReceipt: (receipt: ReceiptRecord | null) => void;

  isReceiptModalOpen: boolean;
  setReceiptModalOpen: (isOpen: boolean) => void;

  isVoidModalOpen: boolean;
  setVoidModalOpen: (isOpen: boolean) => void;
  
  isVerifyModalOpen: boolean;
  setVerifyModalOpen: (isOpen: boolean) => void;
}

export const useAccountantReceiptsStore = create<AccountantReceiptsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  selectedReceipt: null,
  setSelectedReceipt: (receipt) => set({ selectedReceipt: receipt }),

  isReceiptModalOpen: false,
  setReceiptModalOpen: (isOpen) => set({ isReceiptModalOpen: isOpen }),

  isVoidModalOpen: false,
  setVoidModalOpen: (isOpen) => set({ isVoidModalOpen: isOpen }),

  isVerifyModalOpen: false,
  setVerifyModalOpen: (isOpen) => set({ isVerifyModalOpen: isOpen }),
}));
