import { create } from 'zustand';
import { PrincipalIncidentRecord } from '../discipline_types/PrincipalDiscipline.types';

interface PrincipalDisciplineState {
  activeTab: 'incidents' | 'counselling';
  setActiveTab: (tab: 'incidents' | 'counselling') => void;

  selectedIncident: PrincipalIncidentRecord | null;
  setSelectedIncident: (incident: PrincipalIncidentRecord | null) => void;
}

export const usePrincipalDisciplineStore = create<PrincipalDisciplineState>((set) => ({
  activeTab: 'incidents',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedIncident: null,
  setSelectedIncident: (incident) => set({ selectedIncident: incident }),
}));
