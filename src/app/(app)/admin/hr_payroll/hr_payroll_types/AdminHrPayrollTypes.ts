export type PayrollStatus = 'Pending' | 'Processed' | 'On Hold';

export interface SalaryComponent {
  id: string;
  name: string;
  type: 'Earning' | 'Deduction';
  amount: number;
}

export interface EmployeePayrollRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  designation: string;
  department: string;
  
  payrollPeriod: string; // e.g. "August 2024"
  status: PayrollStatus;
  
  basicSalary: number;
  components: SalaryComponent[];
  
  netSalary: number; // calculated
  grossSalary: number; // calculated
  
  payslipGenerated: boolean;
}

export interface FetchPayrollParams {
  period?: string;
  status?: string;
  search?: string;
}

export interface PayrollResponse<T> {
  success: boolean;
  data: T;
}
