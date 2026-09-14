import { create } from 'zustand';
import { HREmployee } from '../hr_employees_types/HREmployeesTypes';
import { MOCK_HR_EMPLOYEES } from '../hr_employees_utils/HREmployeesConstants';

interface HREmployeesState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  departmentFilter: string;
  setDepartmentFilter: (dept: string) => void;

  statusFilter: string;
  setStatusFilter: (status: string) => void;

  isAddModalOpen: boolean;
  setAddModalOpen: (isOpen: boolean) => void;

  isViewModalOpen: boolean;
  setViewModalOpen: (isOpen: boolean) => void;

  selectedEmployee: HREmployee | null;
  setSelectedEmployee: (emp: HREmployee | null) => void;

  employees: HREmployee[];
}

export const useHREmployeesStore = create<HREmployeesState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  departmentFilter: "All",
  setDepartmentFilter: (dept) => set({ departmentFilter: dept }),

  statusFilter: "All",
  setStatusFilter: (status) => set({ statusFilter: status }),

  isAddModalOpen: false,
  setAddModalOpen: (isOpen) => set({ isAddModalOpen: isOpen }),

  isViewModalOpen: false,
  setViewModalOpen: (isOpen) => set({ isViewModalOpen: isOpen }),

  selectedEmployee: null,
  setSelectedEmployee: (emp) => set({ selectedEmployee: emp }),

  employees: MOCK_HR_EMPLOYEES,
}));
