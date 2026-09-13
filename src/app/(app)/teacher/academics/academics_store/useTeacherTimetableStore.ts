import { create } from 'zustand';

interface PeriodData {
  id: string;
  day: string;
  periodNumber: number;
  time: string;
  subject: string;
  class: string;
  room: string;
  type: 'regular' | 'free' | 'substitute' | 'lab';
  notes?: string;
  originalTeacher?: string; // For substitute
}

interface TeacherTimetableState {
  activeTab: 'daily' | 'weekly';
  selectedDate: Date;
  
  // Modals
  selectedPeriod: PeriodData | null;
  isPeriodDetailsModalOpen: boolean;

  // Actions
  setActiveTab: (tab: 'daily' | 'weekly') => void;
  setSelectedDate: (date: Date) => void;
  openPeriodDetails: (period: PeriodData) => void;
  closePeriodDetails: () => void;
}

export const useTeacherTimetableStore = create<TeacherTimetableState>((set) => ({
  activeTab: 'daily',
  selectedDate: new Date(),
  
  selectedPeriod: null,
  isPeriodDetailsModalOpen: false,

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  
  openPeriodDetails: (period) => set({ 
    selectedPeriod: period, 
    isPeriodDetailsModalOpen: true 
  }),
  
  closePeriodDetails: () => set({ 
    selectedPeriod: null, 
    isPeriodDetailsModalOpen: false 
  }),
}));
