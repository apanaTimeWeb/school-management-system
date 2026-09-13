import { create } from 'zustand';

interface PrincipalStaffState {
  activeTab: 'directory' | 'performance';
  setActiveTab: (tab: 'directory' | 'performance') => void;

  selectedProfileId: string | null;
  setSelectedProfileId: (id: string | null) => void;
}

export const usePrincipalStaffStore = create<PrincipalStaffState>((set) => ({
  activeTab: 'directory',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedProfileId: null,
  setSelectedProfileId: (id) => set({ selectedProfileId: id }),
}));
