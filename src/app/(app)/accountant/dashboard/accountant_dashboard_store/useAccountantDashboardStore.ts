import { create } from 'zustand';

interface AccountantDashboardState {
  activeTransactionTab: 'today' | 'recent';
  setActiveTransactionTab: (tab: 'today' | 'recent') => void;
  activePendingTab: 'refunds' | 'concessions';
  setActivePendingTab: (tab: 'refunds' | 'concessions') => void;
  isImportantAlertsVisible: boolean;
  dismissAlerts: () => void;
}

export const useAccountantDashboardStore = create<AccountantDashboardState>((set) => ({
  activeTransactionTab: 'today',
  setActiveTransactionTab: (tab) => set({ activeTransactionTab: tab }),
  
  activePendingTab: 'refunds',
  setActivePendingTab: (tab) => set({ activePendingTab: tab }),

  isImportantAlertsVisible: true,
  dismissAlerts: () => set({ isImportantAlertsVisible: false }),
}));
