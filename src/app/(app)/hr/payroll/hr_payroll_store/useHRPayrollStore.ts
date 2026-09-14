import { create } from 'zustand';
import { HRPayrollRecord } from '../hr_payroll_types/HRPayrollTypes';
import { MOCK_HR_PAYROLL } from '../hr_payroll_utils/HRPayrollConstants';

interface HRPayrollState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  monthFilter: string;
  setMonthFilter: (month: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isActionModalOpen: boolean;
  setActionModalOpen: (isOpen: boolean) => void;

  selectedRecord: HRPayrollRecord | null;
  setSelectedRecord: (record: HRPayrollRecord | null) => void;

  payrollData: HRPayrollRecord[];
}

export const useHRPayrollStore = create<HRPayrollState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  monthFilter: "September",
  setMonthFilter: (month) => set({ monthFilter: month }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isActionModalOpen: false,
  setActionModalOpen: (isOpen) => set({ isActionModalOpen: isOpen }),

  selectedRecord: null,
  setSelectedRecord: (record) => set({ selectedRecord: record }),

  payrollData: MOCK_HR_PAYROLL,
}));
