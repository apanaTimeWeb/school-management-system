import { create } from 'zustand';

export interface StudyMaterialData {
  id: string;
  title: string;
  type: 'Notes' | 'PDF' | 'Document' | 'Video' | 'Link';
  class: string;
  subject: string;
  chapter: string;
  description: string;
  attachment: string; // URL or File Name
  isPublished: boolean;
  uploadedAt: string;
}

interface TeacherMaterialState {
  isFormModalOpen: boolean;
  isAnalyticsModalOpen: boolean;
  selectedMaterial: StudyMaterialData | null;
  
  openCreateModal: () => void;
  openEditModal: (material: StudyMaterialData) => void;
  openAnalyticsModal: (material: StudyMaterialData) => void;
  closeFormModal: () => void;
  closeAnalyticsModal: () => void;
}

export const useTeacherMaterialStore = create<TeacherMaterialState>((set) => ({
  isFormModalOpen: false,
  isAnalyticsModalOpen: false,
  selectedMaterial: null,

  openCreateModal: () => set({ selectedMaterial: null, isFormModalOpen: true }),
  openEditModal: (material) => set({ selectedMaterial: material, isFormModalOpen: true }),
  openAnalyticsModal: (material) => set({ selectedMaterial: material, isAnalyticsModalOpen: true }),
  closeFormModal: () => set({ selectedMaterial: null, isFormModalOpen: false }),
  closeAnalyticsModal: () => set({ selectedMaterial: null, isAnalyticsModalOpen: false }),
}));
