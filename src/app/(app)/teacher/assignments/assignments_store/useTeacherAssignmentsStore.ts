import { create } from 'zustand';

export interface HomeworkData {
  id: string;
  title: string;
  subject: string;
  class: string;
  description: string;
  attachment: string | null;
  dueDate: string;
  isPublished: boolean;
  stats: {
    total: number;
    completed: number;
    pending: number;
  };
}

interface TeacherAssignmentsState {
  // Modals
  isFormModalOpen: boolean;
  isSubmissionModalOpen: boolean;
  isReviewModalOpen: boolean;
  
  // Data
  selectedHomework: HomeworkData | null;
  selectedSubmissionForReview: any | null;
  
  // Actions
  openCreateModal: () => void;
  openEditModal: (hw: HomeworkData) => void;
  closeFormModal: () => void;
  openSubmissionModal: (hw: HomeworkData) => void;
  closeSubmissionModal: () => void;
  openReviewModal: (submission: any) => void;
  closeReviewModal: () => void;
}

export const useTeacherAssignmentsStore = create<TeacherAssignmentsState>((set) => ({
  isFormModalOpen: false,
  isSubmissionModalOpen: false,
  isReviewModalOpen: false,
  selectedHomework: null,
  selectedSubmissionForReview: null,

  openCreateModal: () => set({ selectedHomework: null, isFormModalOpen: true }),
  openEditModal: (hw) => set({ selectedHomework: hw, isFormModalOpen: true }),
  closeFormModal: () => set({ selectedHomework: null, isFormModalOpen: false }),
  
  openSubmissionModal: (hw) => set({ selectedHomework: hw, isSubmissionModalOpen: true }),
  closeSubmissionModal: () => set({ selectedHomework: null, isSubmissionModalOpen: false }),
  
  openReviewModal: (submission) => set({ selectedSubmissionForReview: submission, isReviewModalOpen: true }),
  closeReviewModal: () => set({ selectedSubmissionForReview: null, isReviewModalOpen: false }),
}));
