import { HRPerformanceRecord } from '../hr_performance_types/HRPerformanceTypes';

export const MOCK_HR_PERFORMANCE: HRPerformanceRecord[] = [
  {
    id: "PRF-001",
    employeeId: "T101",
    name: "Dr. Ananya Sharma",
    role: "Head of Math",
    department: "Teaching",
    appraisalCycle: "FY 2025-26",
    rating: 4.8,
    status: "Reviewed",
    reviewer: "Principal"
  },
  {
    id: "PRF-002",
    employeeId: "E105",
    name: "Aakash Gupta",
    role: "System Admin",
    department: "IT",
    appraisalCycle: "FY 2025-26",
    rating: 4.2,
    status: "Reviewed",
    reviewer: "IT Head"
  },
  {
    id: "PRF-003",
    employeeId: "E103",
    name: "Vijay Singh",
    role: "Senior Support Staff",
    department: "Administration",
    appraisalCycle: "FY 2025-26",
    rating: 0,
    status: "Pending",
    reviewer: "Admin Manager"
  },
  {
    id: "PRF-004",
    employeeId: "T102",
    name: "Mr. Rahul Verma",
    role: "TGT English",
    department: "Teaching",
    appraisalCycle: "FY 2025-26",
    rating: 3.5,
    status: "In Progress",
    reviewer: "Vice Principal"
  }
];
