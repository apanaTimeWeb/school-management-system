import type { EmployeePerformanceRecord, FetchPerformanceParams, PerformanceResponse } from '../hr_performance_types/HrPerformanceTypes';
import { MOCK_PERFORMANCE_RECORDS } from '../hr_performance_constants/HrPerformanceConstants';

export async function fetchActiveAppraisals(params?: FetchPerformanceParams): Promise<PerformanceResponse<EmployeePerformanceRecord[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_PERFORMANCE_RECORDS].filter(r => r.status !== 'Completed');

  if (params?.status && params.status !== "All") {
    filtered = filtered.filter(r => r.status === params.status);
  }
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r => 
      r.employeeName.toLowerCase().includes(q) || 
      r.employeeId.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}

export async function fetchPerformanceHistory(params?: FetchPerformanceParams): Promise<PerformanceResponse<EmployeePerformanceRecord[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_PERFORMANCE_RECORDS].filter(r => r.status === 'Completed');

  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r => 
      r.employeeName.toLowerCase().includes(q) || 
      r.employeeId.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}

