import { create } from 'zustand';
import { ReportDefinition, ReportCategory } from '../accountant_reports_types/AccountantReportsTypes';

interface AccountantReportsState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  activeCategory: ReportCategory | 'All';
  setActiveCategory: (cat: ReportCategory | 'All') => void;

  selectedReport: ReportDefinition | null;
  setSelectedReport: (report: ReportDefinition | null) => void;

  isGeneratorModalOpen: boolean;
  setGeneratorModalOpen: (isOpen: boolean) => void;

  isPreviewModalOpen: boolean;
  setPreviewModalOpen: (isOpen: boolean) => void;
}

export const useAccountantReportsStore = create<AccountantReportsState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  activeCategory: 'All',
  setActiveCategory: (cat) => set({ activeCategory: cat }),

  selectedReport: null,
  setSelectedReport: (report) => set({ selectedReport: report }),

  isGeneratorModalOpen: false,
  setGeneratorModalOpen: (isOpen) => set({ isGeneratorModalOpen: isOpen }),

  isPreviewModalOpen: false,
  setPreviewModalOpen: (isOpen) => set({ isPreviewModalOpen: isOpen }),
}));
