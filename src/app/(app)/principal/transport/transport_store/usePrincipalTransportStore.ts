import { create } from 'zustand';
import { PrincipalTransportRoute, PrincipalTransportComplaint } from '../transport_types/PrincipalTransport.types';

interface PrincipalTransportState {
  activeTab: 'overview' | 'allocation' | 'complaints';
  setActiveTab: (tab: 'overview' | 'allocation' | 'complaints') => void;

  selectedRoute: PrincipalTransportRoute | null;
  setSelectedRoute: (route: PrincipalTransportRoute | null) => void;

  selectedComplaint: PrincipalTransportComplaint | null;
  setSelectedComplaint: (complaint: PrincipalTransportComplaint | null) => void;
}

export const usePrincipalTransportStore = create<PrincipalTransportState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedRoute: null,
  setSelectedRoute: (route) => set({ selectedRoute: route }),

  selectedComplaint: null,
  setSelectedComplaint: (complaint) => set({ selectedComplaint: complaint }),
}));
