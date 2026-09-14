import type { EmployeePayrollRecord, FetchPayrollParams, PayrollResponse } from '../hr_payroll_types/AdminHrPayrollTypes';
import { MOCK_PAYROLL_RECORDS } from '../hr_payroll_constants/AdminHrPayrollConstants';

export async function fetchPayrollRecords(params?: FetchPayrollParams): Promise<PayrollResponse<EmployeePayrollRecord[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_PAYROLL_RECORDS];

  if (params?.period && params.period !== "All") {
    filtered = filtered.filter(r => r.payrollPeriod === params.period);
  }
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
