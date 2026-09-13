import { create } from 'zustand';
import { PrincipalReportConfig, PrincipalGeneratedReport } from '../reports_types/PrincipalReports.types';

interface PrincipalReportsState {
  selectedReport: PrincipalReportConfig | null;
  setSelectedReport: (report: PrincipalReportConfig | null) => void;

  generatedData: PrincipalGeneratedReport | null;
  setGeneratedData: (data: PrincipalGeneratedReport | null) => void;

  isExportModalOpen: boolean;
  setIsExportModalOpen: (isOpen: boolean) => void;
  
  exportType: 'PDF' | 'EXCEL';
  setExportType: (type: 'PDF' | 'EXCEL') => void;
}

export const usePrincipalReportsStore = create<PrincipalReportsState>((set) => ({
  selectedReport: null,
  setSelectedReport: (report) => set({ selectedReport: report, generatedData: null }),

  generatedData: null,
  setGeneratedData: (data) => set({ generatedData: data }),

  isExportModalOpen: false,
  setIsExportModalOpen: (isOpen) => set({ isExportModalOpen: isOpen }),

  exportType: 'PDF',
  setExportType: (type) => set({ exportType: type }),
}));
