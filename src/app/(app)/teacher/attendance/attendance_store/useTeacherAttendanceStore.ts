import { create } from 'zustand';

interface TeacherAttendanceState {
  activeTab: 'mark' | 'history' | 'leaves';
  selectedClassId: string | null;
  selectedDate: string;
  isCorrectionModalOpen: boolean;
  correctionRecordId: string | null;

  setActiveTab: (tab: 'mark' | 'history' | 'leaves') => void;
  setSelectedClassId: (classId: string | null) => void;
  setSelectedDate: (date: string) => void;
  openCorrectionModal: (recordId: string) => void;
  closeCorrectionModal: () => void;
}

export const useTeacherAttendanceStore = create<TeacherAttendanceState>((set) => ({
  activeTab: 'mark',
  selectedClassId: null,
  selectedDate: new Date().toISOString().split('T')[0],
  isCorrectionModalOpen: false,
  correctionRecordId: null,

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedClassId: (classId) => set({ selectedClassId: classId }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  
  openCorrectionModal: (recordId) => set({ 
    isCorrectionModalOpen: true, 
    correctionRecordId: recordId 
  }),
  
  closeCorrectionModal: () => set({ 
    isCorrectionModalOpen: false, 
    correctionRecordId: null 
  }),
}));
