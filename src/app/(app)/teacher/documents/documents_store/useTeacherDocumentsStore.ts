import { create } from 'zustand';

export type DocumentCategory = 'Lesson Plan' | 'Notes' | 'Study Material' | 'Assigned Document';

export interface DocumentData {
  id: string;
  title: string;
  category: DocumentCategory;
  class: string;
  subject: string;
  uploadDate: string;
  fileSize: string;
  fileType: 'PDF' | 'DOCX' | 'PPTX' | 'XLSX' | 'ZIP';
  uploadedBy?: string; // e.g. Admin assigned it to teacher
}

interface TeacherDocumentsState {
  isUploadModalOpen: boolean;
  
  openUploadModal: () => void;
  closeUploadModal: () => void;
}

export const useTeacherDocumentsStore = create<TeacherDocumentsState>((set) => ({
  isUploadModalOpen: false,

  openUploadModal: () => set({ isUploadModalOpen: true }),
  closeUploadModal: () => set({ isUploadModalOpen: false }),
}));
