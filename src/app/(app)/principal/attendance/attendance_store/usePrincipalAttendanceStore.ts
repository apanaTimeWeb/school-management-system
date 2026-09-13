import { create } from 'zustand';

interface PrincipalAttendanceState {
  activeTab: 'overview' | 'students' | 'staff' | 'requests';
  setActiveTab: (tab: 'overview' | 'students' | 'staff' | 'requests') => void;

  // Correction Modal State
  isCorrectionModalOpen: boolean;
  selectedRequestId: string | null;
  setCorrectionModalOpen: (isOpen: boolean, requestId?: string) => void;
}

export const usePrincipalAttendanceStore = create<PrincipalAttendanceState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),

  isCorrectionModalOpen: false,
  selectedRequestId: null,
  setCorrectionModalOpen: (isOpen, requestId) => set({
    isCorrectionModalOpen: isOpen,
    selectedRequestId: requestId || null
  })
}));
