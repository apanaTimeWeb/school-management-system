import { create } from 'zustand';

export type LeaveType = 'Casual Leave' | 'Sick Leave' | 'Earned Leave' | 'Maternity Leave' | 'Other';
export type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';

export interface LeaveData {
  id: string;
  type: LeaveType;
  fromDate: string;
  toDate: string;
  reason: string;
  status: LeaveStatus;
  appliedOn: string;
  attachment?: string;
  adminRemarks?: string;
}

interface TeacherLeavesState {
  isApplyLeaveModalOpen: boolean;
  
  openApplyLeaveModal: () => void;
  closeApplyLeaveModal: () => void;
}

export const useTeacherLeavesStore = create<TeacherLeavesState>((set) => ({
  isApplyLeaveModalOpen: false,

  openApplyLeaveModal: () => set({ isApplyLeaveModalOpen: true }),
  closeApplyLeaveModal: () => set({ isApplyLeaveModalOpen: false }),
}));
