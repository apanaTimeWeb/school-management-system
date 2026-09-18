import { create } from 'zustand';

interface SuperAdminLayoutState {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
}

export const useSuperAdminLayoutStore = create<SuperAdminLayoutState>((set) => ({
  isMobileSidebarOpen: false,
  toggleMobileSidebar: () => set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
  closeMobileSidebar: () => set({ isMobileSidebarOpen: false }),
}));
