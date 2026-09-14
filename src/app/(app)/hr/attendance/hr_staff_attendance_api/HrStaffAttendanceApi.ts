import type { DailyResponse, MonthlyResponse, FetchDailyParams, FetchMonthlyParams } from '../hr_staff_attendance_types/HrStaffAttendanceTypes';
import { MOCK_DAILY_ATTENDANCE, MOCK_MONTHLY_ATTENDANCE } from '../hr_staff_attendance_constants/HrStaffAttendanceConstants';

export async function fetchDailyAttendance(params: FetchDailyParams): Promise<DailyResponse> {
  await new Promise(resolve => setTimeout(resolve, 600));

  let filtered = [...MOCK_DAILY_ATTENDANCE];
  
  if (params.department && params.department !== "All") {
    filtered = filtered.filter(a => a.department === params.department);
  }

  return {
    success: true,
    data: filtered,
  };
}

export async function fetchMonthlyAttendance(params: FetchMonthlyParams): Promise<MonthlyResponse> {
  await new Promise(resolve => setTimeout(resolve, 600));

  let filtered = [...MOCK_MONTHLY_ATTENDANCE];
  
  if (params.department && params.department !== "All") {
    filtered = filtered.filter(a => a.department === params.department);
  }

  return {
    success: true,
    data: filtered,
  };
}

