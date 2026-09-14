import { create } from 'zustand';
import { PaymentMethodRecord } from '../accountant_methods_types/AccountantMethodsTypes';

interface AccountantMethodsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  selectedMethod: PaymentMethodRecord | null;
  setSelectedMethod: (method: PaymentMethodRecord | null) => void;

  isConfigModalOpen: boolean;
  setConfigModalOpen: (isOpen: boolean) => void;
}

export const useAccountantMethodsStore = create<AccountantMethodsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  selectedMethod: null,
  setSelectedMethod: (method) => set({ selectedMethod: method }),

  isConfigModalOpen: false,
  setConfigModalOpen: (isOpen) => set({ isConfigModalOpen: isOpen }),
}));
