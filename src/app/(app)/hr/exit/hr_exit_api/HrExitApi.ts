import type { EmployeeExitRecord, FetchExitParams, ExitResponse } from '../hr_exit_types/HrExitTypes';
import { MOCK_EXIT_RECORDS } from '../hr_exit_constants/HrExitConstants';

export async function fetchExitPipeline(params?: FetchExitParams): Promise<ExitResponse<EmployeeExitRecord[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_EXIT_RECORDS].filter(r => r.status !== 'Relieved');

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

export async function fetchExitHistory(params?: FetchExitParams): Promise<ExitResponse<EmployeeExitRecord[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_EXIT_RECORDS].filter(r => r.status === 'Relieved');

  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r => 
      r.employeeName.toLowerCase().includes(q) || 
      r.employeeId.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}

