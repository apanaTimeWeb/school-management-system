export type HRPayrollRecord = {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  month: string;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'Paid' | 'Pending' | 'Processing';
};
