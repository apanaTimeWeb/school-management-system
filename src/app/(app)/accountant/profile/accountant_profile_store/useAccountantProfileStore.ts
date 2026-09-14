import { create } from 'zustand';
import { ProfileTab } from '../accountant_profile_types/AccountantProfileTypes';

interface AccountantProfileState {
  activeTab: ProfileTab;
  setActiveTab: (tab: ProfileTab) => void;
  
  is2FAEnabled: boolean;
  toggle2FA: () => void;
}

export const useAccountantProfileStore = create<AccountantProfileState>((set) => ({
  activeTab: 'Profile',
  setActiveTab: (tab) => set({ activeTab: tab }),

  is2FAEnabled: true,
  toggle2FA: () => set((state) => ({ is2FAEnabled: !state.is2FAEnabled })),
}));
