import { create } from 'zustand';

export type RemarkCategory = 'Academic' | 'Homework' | 'Behaviour' | 'Attendance' | 'Progress' | 'Parent Meeting';
export type RemarkSentiment = 'Positive' | 'Neutral' | 'Needs Improvement';

export interface RemarkData {
  id: string;
  studentName: string;
  rollNo: string;
  class: string;
  category: RemarkCategory;
  sentiment: RemarkSentiment;
  description: string;
  date: string;
  sharedWithParents: boolean;
}

interface TeacherRemarksState {
  isAddRemarkModalOpen: boolean;
  
  openAddRemarkModal: () => void;
  closeAddRemarkModal: () => void;
}

export const useTeacherRemarksStore = create<TeacherRemarksState>((set) => ({
  isAddRemarkModalOpen: false,

  openAddRemarkModal: () => set({ isAddRemarkModalOpen: true }),
  closeAddRemarkModal: () => set({ isAddRemarkModalOpen: false }),
}));
