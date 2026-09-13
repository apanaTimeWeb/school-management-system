import { create } from 'zustand';
import { PrincipalCertificateRequest, PrincipalStudentDocument } from '../documents_types/PrincipalDocuments.types';

interface PrincipalDocumentsState {
  activeTab: 'requests' | 'verification' | 'history';
  setActiveTab: (tab: 'requests' | 'verification' | 'history') => void;

  selectedRequest: PrincipalCertificateRequest | null;
  setSelectedRequest: (request: PrincipalCertificateRequest | null) => void;

  selectedDocument: PrincipalStudentDocument | null;
  setSelectedDocument: (doc: PrincipalStudentDocument | null) => void;
}

export const usePrincipalDocumentsStore = create<PrincipalDocumentsState>((set) => ({
  activeTab: 'requests',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedRequest: null,
  setSelectedRequest: (request) => set({ selectedRequest: request }),

  selectedDocument: null,
  setSelectedDocument: (doc) => set({ selectedDocument: doc }),
}));
