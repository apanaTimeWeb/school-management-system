import { create } from 'zustand';

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
  
  openScheduleModal: () => void;
  closeScheduleModal: () => void;
  
  openActionModal: (meeting: MeetingData) => void;
  closeActionModal: () => void;
}

export const useTeacherMeetingsStore = create<TeacherMeetingsState>((set) => ({
  isScheduleModalOpen: false,
  isActionModalOpen: false,
  selectedMeeting: null,

  openScheduleModal: () => set({ isScheduleModalOpen: true }),
  closeScheduleModal: () => set({ isScheduleModalOpen: false }),

  openActionModal: (meeting) => set({ selectedMeeting: meeting, isActionModalOpen: true }),
  closeActionModal: () => set({ selectedMeeting: null, isActionModalOpen: false }),
}));
