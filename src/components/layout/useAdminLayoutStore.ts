import { create } from 'zustand';

interface AdminLayoutState {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
}

export const useAdminLayoutStore = create<AdminLayoutState>((set) => ({
  isMobileSidebarOpen: false,
  toggleMobileSidebar: () => set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
  closeMobileSidebar: () => set({ isMobileSidebarOpen: false }),
}));
