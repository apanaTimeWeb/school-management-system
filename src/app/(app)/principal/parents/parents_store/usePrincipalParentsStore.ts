import { create } from 'zustand';
import { PrincipalParentRecord, PrincipalParentMeeting } from '../parents_types/PrincipalParents.types';

interface PrincipalParentsState {
  activeTab: 'directory' | 'communication' | 'meetings';
  setActiveTab: (tab: 'directory' | 'communication' | 'meetings') => void;

  selectedParent: PrincipalParentRecord | null;
  setSelectedParent: (parent: PrincipalParentRecord | null) => void;

  selectedMeeting: PrincipalParentMeeting | null;
  setSelectedMeeting: (meeting: PrincipalParentMeeting | null) => void;
}

export const usePrincipalParentsStore = create<PrincipalParentsState>((set) => ({
  activeTab: 'directory',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedParent: null,
  setSelectedParent: (parent) => set({ selectedParent: parent }),

  selectedMeeting: null,
  setSelectedMeeting: (meeting) => set({ selectedMeeting: meeting }),
}));
