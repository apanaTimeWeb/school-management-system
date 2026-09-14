import { create } from 'zustand';
import { TEACHER_REMARKS_MOCK } from '../remarks_constants/TeacherRemarksMockData';

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
  remarksList: RemarkData[];
  
  openAddRemarkModal: () => void;
  closeAddRemarkModal: () => void;
  addRemark: (remark: RemarkData) => void;
}

export const useTeacherRemarksStore = create<TeacherRemarksState>((set) => ({
  isAddRemarkModalOpen: false,
  remarksList: TEACHER_REMARKS_MOCK,

  openAddRemarkModal: () => set({ isAddRemarkModalOpen: true }),
  closeAddRemarkModal: () => set({ isAddRemarkModalOpen: false }),
  addRemark: (remark) => set((state) => ({ remarksList: [remark, ...state.remarksList] })),
}));
