import { create } from 'zustand';
import { PrincipalEvent } from '../events_types/PrincipalEvents.types';

interface PrincipalEventsState {
  activeTab: 'events' | 'participants' | 'certificates';
  setActiveTab: (tab: 'events' | 'participants' | 'certificates') => void;

  selectedEvent: PrincipalEvent | null;
  setSelectedEvent: (event: PrincipalEvent | null) => void;
}

export const usePrincipalEventsStore = create<PrincipalEventsState>((set) => ({
  activeTab: 'events',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedEvent: null,
  setSelectedEvent: (event) => set({ selectedEvent: event }),
}));
