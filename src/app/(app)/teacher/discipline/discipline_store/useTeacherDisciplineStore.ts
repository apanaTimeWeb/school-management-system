import { create } from 'zustand';

export type IncidentSeverity = 'Low' | 'Medium' | 'High';

export interface DisciplineData {
  id: string;
  studentName: string;
  rollNo: string;
  class: string;
  incidentType: string;
  description: string;
  severity: IncidentSeverity;
  date: string;
  actionTaken: string;
  escalatedToPrincipal: boolean;
  parentNotified: boolean;
}

interface TeacherDisciplineState {
  isLogIncidentModalOpen: boolean;
  selectedIncident: DisciplineData | null;
  
  openLogIncidentModal: (incident?: DisciplineData) => void;
  closeLogIncidentModal: () => void;
}

export const useTeacherDisciplineStore = create<TeacherDisciplineState>((set) => ({
  isLogIncidentModalOpen: false,
  selectedIncident: null,

  openLogIncidentModal: (incident) => set({ selectedIncident: incident || null, isLogIncidentModalOpen: true }),
  closeLogIncidentModal: () => set({ selectedIncident: null, isLogIncidentModalOpen: false }),
}));
