import { create } from 'zustand';
import { PrincipalProfileTab, PrincipalActiveSession } from '../profile_types/PrincipalProfile.types';

interface PrincipalProfileState {
  activeTab: PrincipalProfileTab;
  setActiveTab: (tab: PrincipalProfileTab) => void;

  isPasswordModalOpen: boolean;
  setIsPasswordModalOpen: (isOpen: boolean) => void;

  is2FAModalOpen: boolean;
  setIs2FAModalOpen: (isOpen: boolean) => void;

  sessionToTerminate: PrincipalActiveSession | null;
  setSessionToTerminate: (session: PrincipalActiveSession | null) => void;
}

export const usePrincipalProfileStore = create<PrincipalProfileState>((set) => ({
  activeTab: 'details',
  setActiveTab: (tab) => set({ activeTab: tab }),

  isPasswordModalOpen: false,
  setIsPasswordModalOpen: (isOpen) => set({ isPasswordModalOpen: isOpen }),

  is2FAModalOpen: false,
  setIs2FAModalOpen: (isOpen) => set({ is2FAModalOpen: isOpen }),

  sessionToTerminate: null,
  setSessionToTerminate: (session) => set({ sessionToTerminate: session }),
}));
