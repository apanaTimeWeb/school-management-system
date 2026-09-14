import { create } from 'zustand';
import { HRAuditHistoryRecord } from '../hr_audit_history_types/HRAuditHistoryTypes';
import { MOCK_HR_AUDIT_HISTORY } from '../hr_audit_history_utils/HRAuditHistoryConstants';

interface HRAuditHistoryState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  moduleFilter: string;
  setModuleFilter: (module: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  auditData: HRAuditHistoryRecord[];
}

export const useHRAuditHistoryStore = create<HRAuditHistoryState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  moduleFilter: "All",
  setModuleFilter: (module) => set({ moduleFilter: module }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  auditData: MOCK_HR_AUDIT_HISTORY,
}));
