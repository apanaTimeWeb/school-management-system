import { create } from 'zustand';
import { TEACHER_MEETINGS_MOCK } from '../meetings_constants/TeacherMeetingsMockData';

export type MeetingStatus = 'Scheduled' | 'Completed' | 'Cancelled';

export interface MeetingData {
  id: string;
  studentName: string;
  parentName: string;
  class: string;
  date: string;
  time: string;
  reason: string;
  status: MeetingStatus;
  notes?: string;
  parentFeedback?: string;
  teacherRemarks?: string;
  followUpDate?: string;
}

interface TeacherMeetingsState {
  isScheduleModalOpen: boolean;
  isActionModalOpen: boolean;
  selectedMeeting: MeetingData | null;
  meetingsList: MeetingData[];
  
  openScheduleModal: () => void;
  closeScheduleModal: () => void;
  
  openActionModal: (meeting: MeetingData) => void;
  closeActionModal: () => void;

  scheduleMeeting: (meeting: MeetingData) => void;
  completeMeeting: (id: string, updateData: Partial<MeetingData>) => void;
}

export const useTeacherMeetingsStore = create<TeacherMeetingsState>((set) => ({
  isScheduleModalOpen: false,
  isActionModalOpen: false,
  selectedMeeting: null,
  meetingsList: TEACHER_MEETINGS_MOCK,

  openScheduleModal: () => set({ isScheduleModalOpen: true }),
  closeScheduleModal: () => set({ isScheduleModalOpen: false }),

  openActionModal: (meeting) => set({ selectedMeeting: meeting, isActionModalOpen: true }),
  closeActionModal: () => set({ selectedMeeting: null, isActionModalOpen: false }),

  scheduleMeeting: (meeting) => set((state) => ({ meetingsList: [meeting, ...state.meetingsList] })),
  completeMeeting: (id, updateData) => set((state) => ({
    meetingsList: state.meetingsList.map(m => m.id === id ? { ...m, ...updateData, status: 'Completed' } : m)
  })),
}));
