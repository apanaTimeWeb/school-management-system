import { HRWorkloadRecord } from '../hr_workload_types/HRWorkloadTypes';

export const MOCK_HR_WORKLOAD: HRWorkloadRecord[] = [
  {
    id: "WRK-001",
    employeeId: "T101",
    name: "Dr. Ananya Sharma",
    role: "PGT Math",
    department: "Teaching",
    assignedClasses: ["XI-A", "XI-B", "XII-A"],
    totalHours: 25,
    status: "Optimal"
  },
  {
    id: "WRK-002",
    employeeId: "T105",
    name: "Mr. Rajeev Kumar",
    role: "TGT Science",
    department: "Teaching",
    assignedClasses: ["VIII-A", "VIII-B", "IX-A", "IX-B", "X-A", "X-B"],
    totalHours: 35,
    status: "Overloaded"
  },
  {
    id: "WRK-003",
    employeeId: "E112",
    name: "Aakash Gupta",
    role: "System Admin",
    department: "IT",
    assignedClasses: [],
    totalHours: 40,
    status: "Optimal"
  },
  {
    id: "WRK-004",
    employeeId: "T108",
    name: "Ms. Priya Singh",
    role: "PRT English",
    department: "Teaching",
    assignedClasses: ["I-A", "I-B"],
    totalHours: 12,
    status: "Underutilized"
  }
];
