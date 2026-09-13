import { create } from 'zustand';
import { PrincipalComplaint } from '../complaints_types/PrincipalComplaints.types';

interface PrincipalComplaintsState {
  activeTab: 'active' | 'history';
  setActiveTab: (tab: 'active' | 'history') => void;

  selectedComplaint: PrincipalComplaint | null;
  setSelectedComplaint: (complaint: PrincipalComplaint | null) => void;
}

export const usePrincipalComplaintsStore = create<PrincipalComplaintsState>((set) => ({
  activeTab: 'active',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedComplaint: null,
  setSelectedComplaint: (complaint) => set({ selectedComplaint: complaint }),
}));
