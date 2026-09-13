import { create } from 'zustand';

export interface PerformanceData {
  id: string;
  rollNo: number;
  name: string;
  class: string;
  subject: string;
  overallGrade: string;
  isWeakStudent: boolean;
  attendanceTrend: number[]; // Array of percentages over months
  marksTrend: number[]; // Array of percentages over exams
  assignmentCompletion: number; // Percentage
  improvementStatus: 'Improving' | 'Stagnant' | 'Declining';
  teacherRemarks: string;
}

interface TeacherPerformanceState {
  isModalOpen: boolean;
  selectedStudent: PerformanceData | null;
  
  openPerformanceModal: (student: PerformanceData) => void;
  closePerformanceModal: () => void;
}

export const useTeacherPerformanceStore = create<TeacherPerformanceState>((set) => ({
  isModalOpen: false,
  selectedStudent: null,

  openPerformanceModal: (student) => set({ selectedStudent: student, isModalOpen: true }),
  closePerformanceModal: () => set({ selectedStudent: null, isModalOpen: false }),
}));
