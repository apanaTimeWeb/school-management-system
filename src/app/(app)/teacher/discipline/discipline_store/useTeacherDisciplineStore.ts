import { create } from 'zustand';
import { TEACHER_DISCIPLINE_MOCK } from '../discipline_constants/TeacherDisciplineMockData';

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
  incidentsList: DisciplineData[];
  
  openLogIncidentModal: (incident?: DisciplineData) => void;
  closeLogIncidentModal: () => void;
  addIncident: (incident: DisciplineData) => void;
}

export const useTeacherDisciplineStore = create<TeacherDisciplineState>((set) => ({
  isLogIncidentModalOpen: false,
  selectedIncident: null,
  incidentsList: TEACHER_DISCIPLINE_MOCK,

  openLogIncidentModal: (incident) => set({ selectedIncident: incident || null, isLogIncidentModalOpen: true }),
  closeLogIncidentModal: () => set({ selectedIncident: null, isLogIncidentModalOpen: false }),
  addIncident: (incident) => set((state) => ({ incidentsList: [incident, ...state.incidentsList] })),
}));
