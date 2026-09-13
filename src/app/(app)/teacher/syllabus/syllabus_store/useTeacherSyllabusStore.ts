import { create } from 'zustand';

export interface TopicData {
  id: string;
  name: string;
  isCompleted: boolean;
  completionDate?: string;
  remarks?: string;
}

export interface ChapterData {
  id: string;
  name: string;
  topics: TopicData[];
  progressPercent: number;
}

export interface SyllabusData {
  id: string;
  class: string;
  subject: string;
  chapters: ChapterData[];
  overallProgress: number;
}

interface TeacherSyllabusState {
  isDetailsModalOpen: boolean;
  selectedSyllabus: SyllabusData | null;
  
  openDetailsModal: (syllabus: SyllabusData) => void;
  closeDetailsModal: () => void;
}

export const useTeacherSyllabusStore = create<TeacherSyllabusState>((set) => ({
  isDetailsModalOpen: false,
  selectedSyllabus: null,

  openDetailsModal: (syllabus) => set({ selectedSyllabus: syllabus, isDetailsModalOpen: true }),
  closeDetailsModal: () => set({ selectedSyllabus: null, isDetailsModalOpen: false }),
}));
