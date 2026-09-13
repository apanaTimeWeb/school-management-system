import { create } from 'zustand';
import { TEACHER_DOCUMENTS_MOCK } from '../documents_constants/TeacherDocumentsMockData';

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
  documentsList: DocumentData[];
  
  openUploadModal: () => void;
  closeUploadModal: () => void;
  addDocument: (doc: DocumentData) => void;
}

export const useTeacherDocumentsStore = create<TeacherDocumentsState>((set) => ({
  isUploadModalOpen: false,
  documentsList: TEACHER_DOCUMENTS_MOCK,

  openUploadModal: () => set({ isUploadModalOpen: true }),
  closeUploadModal: () => set({ isUploadModalOpen: false }),

  addDocument: (doc) => set((state) => ({ documentsList: [doc, ...state.documentsList] })),
}));
