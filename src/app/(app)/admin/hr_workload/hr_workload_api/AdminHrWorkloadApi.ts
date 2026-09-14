import type { TeacherWorkloadRecord, FetchWorkloadParams, WorkloadResponse } from '../hr_workload_types/AdminHrWorkloadTypes';
import { MOCK_WORKLOAD_RECORDS } from '../hr_workload_constants/AdminHrWorkloadConstants';

export async function fetchWorkloadList(params?: FetchWorkloadParams): Promise<WorkloadResponse<TeacherWorkloadRecord[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_WORKLOAD_RECORDS];

  if (params?.department && params.department !== "All") {
    filtered = filtered.filter(r => r.department === params.department);
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
