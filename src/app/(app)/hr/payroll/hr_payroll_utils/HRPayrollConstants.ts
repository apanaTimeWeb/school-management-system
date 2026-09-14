import { HRPayrollRecord } from '../hr_payroll_types/HRPayrollTypes';

export const MOCK_HR_PAYROLL: HRPayrollRecord[] = [
  {
    id: "PAY-001",
    employeeId: "T101",
    name: "Dr. Ananya Sharma",
    role: "Teacher",
    month: "September",
    year: 2026,
    basicSalary: 60000,
    allowances: 15000,
    deductions: 5000,
    netSalary: 70000,
    status: "Pending"
  },
  {
    id: "PAY-002",
    employeeId: "E103",
    name: "Vijay Singh",
    role: "Support Staff",
    month: "September",
    year: 2026,
    basicSalary: 25000,
    allowances: 2000,
    deductions: 1000,
    netSalary: 26000,
    status: "Processing"
  },
  {
    id: "PAY-003",
    employeeId: "T102",
    name: "Mr. Rahul Verma",
    role: "Teacher",
    month: "August",
    year: 2026,
    basicSalary: 55000,
    allowances: 10000,
    deductions: 5000,
    netSalary: 60000,
    status: "Paid"
  },
  {
    id: "PAY-004",
    employeeId: "E101",
    name: "Ramesh Kumar",
    role: "Admin",
    month: "August",
    year: 2026,
    basicSalary: 45000,
    allowances: 8000,
    deductions: 4000,
    netSalary: 49000,
    status: "Paid"
  }
];
