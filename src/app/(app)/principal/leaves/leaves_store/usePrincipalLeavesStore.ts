import { create } from 'zustand';
import { PrincipalLeaveRequest } from '../leaves_types/PrincipalLeaves.types';

interface PrincipalLeavesState {
  activeTab: 'pending' | 'history' | 'balance';
  setActiveTab: (tab: 'pending' | 'history' | 'balance') => void;

  selectedRequest: PrincipalLeaveRequest | null;
  setSelectedRequest: (request: PrincipalLeaveRequest | null) => void;
}

export const usePrincipalLeavesStore = create<PrincipalLeavesState>((set) => ({
  activeTab: 'pending',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedRequest: null,
  setSelectedRequest: (request) => set({ selectedRequest: request }),
}));
