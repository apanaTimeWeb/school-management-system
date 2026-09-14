import { create } from 'zustand';

interface HRLayoutState {
  isMobileSidebarOpen: boolean;
  setMobileSidebarOpen: (isOpen: boolean) => void;
  toggleMobileSidebar: () => void;
}

export const useHRLayoutStore = create<HRLayoutState>((set) => ({
  isMobileSidebarOpen: false,
  setMobileSidebarOpen: (isOpen) => set({ isMobileSidebarOpen: isOpen }),
  toggleMobileSidebar: () => set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
}));
