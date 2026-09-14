import { create } from 'zustand';
import { AuditLogRecord, AuditEventType } from '../accountant_audit_types/AccountantAuditTypes';

interface AccountantAuditState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  eventTypeFilter: AuditEventType | 'All';
  setEventTypeFilter: (type: AuditEventType | 'All') => void;

  selectedLog: AuditLogRecord | null;
  setSelectedLog: (log: AuditLogRecord | null) => void;

  isViewModalOpen: boolean;
  setViewModalOpen: (isOpen: boolean) => void;
}

export const useAccountantAuditStore = create<AccountantAuditState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  eventTypeFilter: 'All',
  setEventTypeFilter: (type) => set({ eventTypeFilter: type }),

  selectedLog: null,
  setSelectedLog: (log) => set({ selectedLog: log }),

  isViewModalOpen: false,
  setViewModalOpen: (isOpen) => set({ isViewModalOpen: isOpen }),
}));
