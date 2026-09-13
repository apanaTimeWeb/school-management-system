import { create } from 'zustand';
import { PrincipalApprovalCategory, PrincipalApprovalRequest } from '../approvals_types/PrincipalApprovals.types';

interface PrincipalApprovalsState {
  selectedCategory: PrincipalApprovalCategory | 'All';
  setSelectedCategory: (category: PrincipalApprovalCategory | 'All') => void;

  selectedRequest: PrincipalApprovalRequest | null;
  setSelectedRequest: (request: PrincipalApprovalRequest | null) => void;
}

export const usePrincipalApprovalsStore = create<PrincipalApprovalsState>((set) => ({
  selectedCategory: 'All',
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  selectedRequest: null,
  setSelectedRequest: (request) => set({ selectedRequest: request }),
}));
