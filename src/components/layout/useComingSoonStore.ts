import { create } from 'zustand';

interface ComingSoonState {
  isOpen: boolean;
  message: string;
  openModal: (message?: string) => void;
  closeModal: () => void;
}

export const useComingSoonStore = create<ComingSoonState>((set) => ({
  isOpen: false,
  message: 'This feature is currently under development.',
  openModal: (message = 'This feature is currently under development.') => set({ isOpen: true, message }),
  closeModal: () => set({ isOpen: false }),
}));
