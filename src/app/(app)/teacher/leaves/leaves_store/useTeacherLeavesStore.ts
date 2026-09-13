import { create } from 'zustand';
import { TEACHER_LEAVES_MOCK } from '../leaves_constants/TeacherLeavesMockData';

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

export interface PunchLog {
  id: string;
  date: string;
  inTime: string | null;
  outTime: string | null;
  status: 'Present' | 'Absent' | 'Half Day' | 'On Leave';
}

interface TeacherLeavesState {
  isApplyLeaveModalOpen: boolean;
  leavesList: LeaveData[];
  punchLogs: PunchLog[];
  
  openApplyLeaveModal: () => void;
  closeApplyLeaveModal: () => void;
  
  addLeave: (leave: LeaveData) => void;
  punchIn: () => void;
  punchOut: () => void;
}

export const useTeacherLeavesStore = create<TeacherLeavesState>((set) => ({
  isApplyLeaveModalOpen: false,
  leavesList: TEACHER_LEAVES_MOCK,
  punchLogs: [
    { id: '1', date: new Date().toLocaleDateString('en-GB'), inTime: null, outTime: null, status: 'Absent' },
    { id: '2', date: '10/10/2023', inTime: '08:00 AM', outTime: '03:00 PM', status: 'Present' },
    { id: '3', date: '09/10/2023', inTime: '08:15 AM', outTime: '03:10 PM', status: 'Present' },
  ],

  openApplyLeaveModal: () => set({ isApplyLeaveModalOpen: true }),
  closeApplyLeaveModal: () => set({ isApplyLeaveModalOpen: false }),

  addLeave: (leave) => set((state) => ({ leavesList: [leave, ...state.leavesList] })),
  
  punchIn: () => set((state) => {
    const today = new Date().toLocaleDateString('en-GB');
    const logs = [...state.punchLogs];
    const todayLog = logs.find(l => l.date === today);
    const timeNow = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    if (todayLog) {
      todayLog.inTime = timeNow;
      todayLog.status = 'Present';
    } else {
      logs.unshift({ id: Date.now().toString(), date: today, inTime: timeNow, outTime: null, status: 'Present' });
    }
    return { punchLogs: [...logs] };
  }),
  
  punchOut: () => set((state) => {
    const today = new Date().toLocaleDateString('en-GB');
    const logs = [...state.punchLogs];
    const todayLog = logs.find(l => l.date === today);
    const timeNow = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    if (todayLog && todayLog.inTime) {
      todayLog.outTime = timeNow;
    }
    return { punchLogs: [...logs] };
  }),
}));
