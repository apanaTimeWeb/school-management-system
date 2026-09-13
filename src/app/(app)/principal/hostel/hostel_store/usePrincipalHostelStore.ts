import { create } from 'zustand';
import { PrincipalHostelRoom, PrincipalHostelIncident } from '../hostel_types/PrincipalHostel.types';

interface PrincipalHostelState {
  activeTab: 'overview' | 'students' | 'incidents';
  setActiveTab: (tab: 'overview' | 'students' | 'incidents') => void;

  selectedRoom: PrincipalHostelRoom | null;
  setSelectedRoom: (room: PrincipalHostelRoom | null) => void;

  selectedIncident: PrincipalHostelIncident | null;
  setSelectedIncident: (incident: PrincipalHostelIncident | null) => void;
}

export const usePrincipalHostelStore = create<PrincipalHostelState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedRoom: null,
  setSelectedRoom: (room) => set({ selectedRoom: room }),

  selectedIncident: null,
  setSelectedIncident: (incident) => set({ selectedIncident: incident }),
}));
