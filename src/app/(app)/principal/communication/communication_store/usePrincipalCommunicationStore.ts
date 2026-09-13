import { create } from 'zustand';
import { PrincipalNotice } from '../communication_types/PrincipalCommunication.types';

interface PrincipalCommunicationState {
  activeTab: 'notices' | 'send' | 'history';
  setActiveTab: (tab: 'notices' | 'send' | 'history') => void;

  selectedNotice: PrincipalNotice | null;
  setSelectedNotice: (notice: PrincipalNotice | null) => void;
}

export const usePrincipalCommunicationStore = create<PrincipalCommunicationState>((set) => ({
  activeTab: 'notices',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedNotice: null,
  setSelectedNotice: (notice) => set({ selectedNotice: notice }),
}));
