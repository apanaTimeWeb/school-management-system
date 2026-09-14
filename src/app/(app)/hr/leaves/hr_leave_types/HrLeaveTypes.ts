export type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';
export type EmployeeType = 'Staff' | 'Teacher';

export interface LeaveApplication {
  id: string;
  employeeId: string;
  employeeName: string;
  employeeType: EmployeeType;
  department: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: LeaveStatus;
  appliedOn: string;
  attachmentUrl?: string;
}

export interface LeaveBalance {
  employeeId: string;
  employeeName: string;
  employeeType: EmployeeType;
  department: string;
  balances: {
    type: string;
    total: number;
    used: number;
    available: number;
  }[];
}

export interface LeaveType {
  id: string;
  name: string;
  totalDaysAllowed: number;
  carryForward: boolean;
  description: string;
  status: 'Active' | 'Inactive';
}

export interface Holiday {
  id: string;
  name: string;
  date: string;
  dayOfWeek: string;
  type: 'National' | 'State' | 'School';
}

export interface FetchLeaveParams {
  employeeType?: string;
  status?: string;
  search?: string;
}

export interface LeaveResponse<T> {
  success: boolean;
  data: T;
}
