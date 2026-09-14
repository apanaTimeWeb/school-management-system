import type { LeaveApplication, LeaveBalance, LeaveType, Holiday, FetchLeaveParams, LeaveResponse } from '../hr_leave_types/AdminHrLeaveTypes';
import { MOCK_LEAVE_APPLICATIONS, MOCK_LEAVE_BALANCES, MOCK_LEAVE_TYPES, MOCK_HOLIDAYS } from '../hr_leave_constants/AdminHrLeaveConstants';

export async function fetchLeaveApplications(params?: FetchLeaveParams): Promise<LeaveResponse<LeaveApplication[]>> {
  await new Promise(resolve => setTimeout(resolve, 600));

  let filtered = [...MOCK_LEAVE_APPLICATIONS];

  if (params?.status && params.status !== "All") {
    filtered = filtered.filter(a => a.status === params.status);
  }
  
  if (params?.employeeType && params.employeeType !== "All") {
    filtered = filtered.filter(a => a.employeeType === params.employeeType);
  }

  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(a => 
      a.employeeName.toLowerCase().includes(q) || 
      a.employeeId.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}

export async function fetchLeaveBalances(): Promise<LeaveResponse<LeaveBalance[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, data: MOCK_LEAVE_BALANCES };
}

export async function fetchLeaveTypes(): Promise<LeaveResponse<LeaveType[]>> {
  await new Promise(resolve => setTimeout(resolve, 400));
  return { success: true, data: MOCK_LEAVE_TYPES };
}

export async function fetchHolidays(): Promise<LeaveResponse<Holiday[]>> {
  await new Promise(resolve => setTimeout(resolve, 400));
  return { success: true, data: MOCK_HOLIDAYS };
}
