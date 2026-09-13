import { create } from 'zustand';
import { PrincipalMeeting, PrincipalMeetingMinutes } from '../meetings_types/PrincipalMeetings.types';

interface PrincipalMeetingsState {
  activeTab: 'schedule' | 'minutes';
  setActiveTab: (tab: 'schedule' | 'minutes') => void;

  selectedMeeting: PrincipalMeeting | null;
  setSelectedMeeting: (meeting: PrincipalMeeting | null) => void;

  selectedMinutes: PrincipalMeetingMinutes | null;
  setSelectedMinutes: (minutes: PrincipalMeetingMinutes | null) => void;
}

export const usePrincipalMeetingsStore = create<PrincipalMeetingsState>((set) => ({
  activeTab: 'schedule',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedMeeting: null,
  setSelectedMeeting: (meeting) => set({ selectedMeeting: meeting }),

  selectedMinutes: null,
  setSelectedMinutes: (minutes) => set({ selectedMinutes: minutes }),
}));
