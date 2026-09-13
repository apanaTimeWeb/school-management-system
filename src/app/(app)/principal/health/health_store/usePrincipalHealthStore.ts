import { create } from 'zustand';
import { PrincipalHealthStudent, PrincipalMedicalIncident } from '../health_types/PrincipalHealth.types';

interface PrincipalHealthState {
  activeTab: 'overview' | 'records' | 'incidents';
  setActiveTab: (tab: 'overview' | 'records' | 'incidents') => void;

  selectedStudent: PrincipalHealthStudent | null;
  setSelectedStudent: (student: PrincipalHealthStudent | null) => void;

  selectedIncident: PrincipalMedicalIncident | null;
  setSelectedIncident: (incident: PrincipalMedicalIncident | null) => void;
}

export const usePrincipalHealthStore = create<PrincipalHealthState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedStudent: null,
  setSelectedStudent: (student) => set({ selectedStudent: student }),

  selectedIncident: null,
  setSelectedIncident: (incident) => set({ selectedIncident: incident }),
}));
