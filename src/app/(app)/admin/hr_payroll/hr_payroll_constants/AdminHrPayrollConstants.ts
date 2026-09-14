import type { EmployeePayrollRecord } from "../hr_payroll_types/AdminHrPayrollTypes";

export const MOCK_PAYROLL_RECORDS: EmployeePayrollRecord[] = [
  {
    id: "pay-1", employeeId: "EMP-045", employeeName: "Priya Sharma", designation: "Teacher", department: "Science",
    payrollPeriod: "August 2024", status: "Pending",
    basicSalary: 45000,
    components: [
      { id: "c-1", name: "House Rent Allowance (HRA)", type: "Earning", amount: 12000 },
      { id: "c-2", name: "Transport Allowance", type: "Earning", amount: 3000 },
      { id: "c-3", name: "Provident Fund (PF)", type: "Deduction", amount: 3600 },
      { id: "c-4", name: "Professional Tax", type: "Deduction", amount: 200 }
    ],
    netSalary: 56200, grossSalary: 60000, payslipGenerated: false
  },
  {
    id: "pay-2", employeeId: "EMP-088", employeeName: "Rakesh Singh", designation: "HR Exec", department: "Administration",
    payrollPeriod: "August 2024", status: "Processed",
    basicSalary: 35000,
    components: [
      { id: "c-5", name: "House Rent Allowance (HRA)", type: "Earning", amount: 10000 },
      { id: "c-6", name: "Provident Fund (PF)", type: "Deduction", amount: 2800 }
    ],
    netSalary: 42200, grossSalary: 45000, payslipGenerated: true
  },
  {
    id: "pay-3", employeeId: "EMP-012", employeeName: "Sunita Rao", designation: "Senior Teacher", department: "Mathematics",
    payrollPeriod: "August 2024", status: "On Hold",
    basicSalary: 60000,
    components: [
      { id: "c-7", name: "Special Allowance", type: "Earning", amount: 15000 },
      { id: "c-8", name: "Provident Fund (PF)", type: "Deduction", amount: 4800 },
      { id: "c-9", name: "Income Tax (TDS)", type: "Deduction", amount: 5000 }
    ],
    netSalary: 65200, grossSalary: 75000, payslipGenerated: false
  }
];
