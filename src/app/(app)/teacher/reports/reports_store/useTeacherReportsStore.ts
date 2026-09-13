import { create } from 'zustand';

export type ReportType = 
  'Attendance Report' | 
  'Homework Report' | 
  'Assignment Report' | 
  'Marks Report' | 
  'Result Report' | 
  'Student Performance' | 
  'Class Performance' | 
  'Syllabus Progress' | 
  'Academic Progress';

interface TeacherReportsState {
  isGeneratorModalOpen: boolean;
  selectedReportType: ReportType | null;
  
  openGeneratorModal: (type: ReportType) => void;
  closeGeneratorModal: () => void;
}

export const useTeacherReportsStore = create<TeacherReportsState>((set) => ({
  isGeneratorModalOpen: false,
  selectedReportType: null,

  openGeneratorModal: (type) => set({ selectedReportType: type, isGeneratorModalOpen: true }),
  closeGeneratorModal: () => set({ selectedReportType: null, isGeneratorModalOpen: false }),
}));
