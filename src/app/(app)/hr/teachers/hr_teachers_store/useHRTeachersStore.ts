import { create } from 'zustand';
import { HRTeacher } from '../hr_teachers_types/HRTeachersTypes';
import { MOCK_HR_TEACHERS } from '../hr_teachers_utils/HRTeachersConstants';

interface HRTeachersState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  subjectFilter: string;
  setSubjectFilter: (subject: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isAddModalOpen: boolean;
  setAddModalOpen: (isOpen: boolean) => void;

  isViewModalOpen: boolean;
  setViewModalOpen: (isOpen: boolean) => void;

  selectedTeacher: HRTeacher | null;
  setSelectedTeacher: (teacher: HRTeacher | null) => void;

  teachers: HRTeacher[];
}

export const useHRTeachersStore = create<HRTeachersState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  subjectFilter: "All",
  setSubjectFilter: (subject) => set({ subjectFilter: subject }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isAddModalOpen: false,
  setAddModalOpen: (isOpen) => set({ isAddModalOpen: isOpen }),

  isViewModalOpen: false,
  setViewModalOpen: (isOpen) => set({ isViewModalOpen: isOpen }),

  selectedTeacher: null,
  setSelectedTeacher: (teacher) => set({ selectedTeacher: teacher }),

  teachers: MOCK_HR_TEACHERS,
}));
