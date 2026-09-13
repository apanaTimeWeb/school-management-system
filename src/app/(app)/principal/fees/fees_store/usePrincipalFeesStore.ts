import { create } from 'zustand';
import { PrincipalFeeApprovalRequest } from '../fees_types/PrincipalFees.types';

interface PrincipalFeesState {
  activeTab: 'overview' | 'approvals';
  setActiveTab: (tab: 'overview' | 'approvals') => void;

  selectedRequest: PrincipalFeeApprovalRequest | null;
  setSelectedRequest: (request: PrincipalFeeApprovalRequest | null) => void;
}

export const usePrincipalFeesStore = create<PrincipalFeesState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedRequest: null,
  setSelectedRequest: (request) => set({ selectedRequest: request }),
}));
