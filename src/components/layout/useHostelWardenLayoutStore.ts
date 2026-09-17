import { create } from 'zustand';

interface HostelWardenLayoutState {
  isMobileSidebarOpen: boolean;
  setMobileSidebarOpen: (isOpen: boolean) => void;
  toggleMobileSidebar: () => void;
}

export const useHostelWardenLayoutStore = create<HostelWardenLayoutState>((set) => ({
  isMobileSidebarOpen: false,
  setMobileSidebarOpen: (isOpen) => set({ isMobileSidebarOpen: isOpen }),
  toggleMobileSidebar: () => set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
}));
