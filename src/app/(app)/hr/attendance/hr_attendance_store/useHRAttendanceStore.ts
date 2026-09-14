import { create } from 'zustand';
import { HRAttendanceRecord } from '../hr_attendance_types/HRAttendanceTypes';
import { MOCK_HR_ATTENDANCE } from '../hr_attendance_utils/HRAttendanceConstants';

interface HRAttendanceState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  roleFilter: string;
  setRoleFilter: (role: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  dateFilter: string;
  setDateFilter: (date: string) => void;

  attendanceData: HRAttendanceRecord[];
}

export const useHRAttendanceStore = create<HRAttendanceState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  roleFilter: "All",
  setRoleFilter: (role) => set({ roleFilter: role }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  dateFilter: new Date().toISOString().split('T')[0],
  setDateFilter: (date) => set({ dateFilter: date }),

  attendanceData: MOCK_HR_ATTENDANCE,
}));
