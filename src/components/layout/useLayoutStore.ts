import { create } from 'zustand';

interface LayoutState {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  setMobileSidebarOpen: (isOpen: boolean) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  isMobileSidebarOpen: false,
  toggleMobileSidebar: () => set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
  setMobileSidebarOpen: (isOpen) => set({ isMobileSidebarOpen: isOpen }),
}));
