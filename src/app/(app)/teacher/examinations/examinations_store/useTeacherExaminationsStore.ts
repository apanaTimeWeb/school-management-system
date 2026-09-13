import { create } from 'zustand';

export interface ExamData {
  id: string;
  name: string; // e.g., Mid-Term Exam 2023
  class: string;
  subject: string;
  date: string;
  time: string;
  instructions: string;
  syllabus: string;
  status: 'Upcoming' | 'Marks Entry Open' | 'Submitted';
  totalTheory: number;
  totalPractical: number;
  totalInternal: number;
}

interface TeacherExaminationsState {
  // Modals
  isMarksEntryOpen: boolean;
  isCorrectionModalOpen: boolean;
  
  // Data
  selectedExam: ExamData | null;
  
  // Actions
  openMarksEntry: (exam: ExamData) => void;
  closeMarksEntry: () => void;
  openCorrectionModal: (exam: ExamData) => void;
  closeCorrectionModal: () => void;
}

export const useTeacherExaminationsStore = create<TeacherExaminationsState>((set) => ({
  isMarksEntryOpen: false,
  isCorrectionModalOpen: false,
  selectedExam: null,

  openMarksEntry: (exam) => set({ selectedExam: exam, isMarksEntryOpen: true }),
  closeMarksEntry: () => set({ selectedExam: null, isMarksEntryOpen: false }),
  
  openCorrectionModal: (exam) => set({ selectedExam: exam, isCorrectionModalOpen: true }),
  closeCorrectionModal: () => set({ selectedExam: null, isCorrectionModalOpen: false }),
}));
