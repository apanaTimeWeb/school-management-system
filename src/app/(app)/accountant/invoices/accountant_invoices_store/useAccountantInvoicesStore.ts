import { create } from 'zustand';
import { InvoiceRecord } from '../accountant_invoices_types/AccountantInvoicesTypes';

interface AccountantInvoicesState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  selectedInvoice: InvoiceRecord | null;
  setSelectedInvoice: (invoice: InvoiceRecord | null) => void;

  isGenerateModalOpen: boolean;
  setGenerateModalOpen: (isOpen: boolean) => void;

  isViewModalOpen: boolean;
  setViewModalOpen: (isOpen: boolean) => void;
}

export const useAccountantInvoicesStore = create<AccountantInvoicesState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  selectedInvoice: null,
  setSelectedInvoice: (invoice) => set({ selectedInvoice: invoice }),

  isGenerateModalOpen: false,
  setGenerateModalOpen: (isOpen) => set({ isGenerateModalOpen: isOpen }),

  isViewModalOpen: false,
  setViewModalOpen: (isOpen) => set({ isViewModalOpen: isOpen }),
}));
