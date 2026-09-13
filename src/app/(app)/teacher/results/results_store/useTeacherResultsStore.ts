import { create } from 'zustand';

export interface ResultClassData {
  id: string;
  className: string;
  subject: string;
  examName: string;
  totalStudents: number;
  passedStudents: number;
  highestPercentage: number;
  averagePercentage: number;
  isPublished: boolean;
}

export interface StudentResultData {
  id: string;
  rollNo: number;
  name: string;
  marksObtained: number;
  totalMarks: number;
  percentage: number;
  grade: string;
  remarks: string;
  history?: { exam: string, percentage: number }[];
}

interface TeacherResultsState {
  isPerformanceModalOpen: boolean;
  selectedClassResult: ResultClassData | null;
  
  openPerformanceModal: (resultClass: ResultClassData) => void;
  closePerformanceModal: () => void;
}

export const useTeacherResultsStore = create<TeacherResultsState>((set) => ({
  isPerformanceModalOpen: false,
  selectedClassResult: null,

  openPerformanceModal: (resultClass) => set({ selectedClassResult: resultClass, isPerformanceModalOpen: true }),
  closePerformanceModal: () => set({ selectedClassResult: null, isPerformanceModalOpen: false }),
}));
