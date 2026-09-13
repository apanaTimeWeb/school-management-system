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
  selectedMaterial: StudyMaterialData | null;
  
  openCreateModal: () => void;
  openEditModal: (material: StudyMaterialData) => void;
  closeFormModal: () => void;
}

export const useTeacherMaterialStore = create<TeacherMaterialState>((set) => ({
  isFormModalOpen: false,
  selectedMaterial: null,

  openCreateModal: () => set({ selectedMaterial: null, isFormModalOpen: true }),
  openEditModal: (material) => set({ selectedMaterial: material, isFormModalOpen: true }),
  closeFormModal: () => set({ selectedMaterial: null, isFormModalOpen: false }),
}));
