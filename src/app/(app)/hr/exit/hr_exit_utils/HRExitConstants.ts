import { HRExitRecord } from '../hr_exit_types/HRExitTypes';

export const MOCK_HR_EXITS: HRExitRecord[] = [
  {
    id: "EXT-001",
    employeeId: "T105",
    name: "Sunita Reddy",
    role: "TGT Science",
    department: "Teaching",
    resignationDate: "2026-08-15",
    lastWorkingDay: "2026-09-15",
    reason: "Relocating to another city",
    status: "Notice Period"
  },
  {
    id: "EXT-002",
    employeeId: "E112",
    name: "Vikram Patel",
    role: "Security Guard",
    department: "Support Staff",
    resignationDate: "-",
    lastWorkingDay: "2026-09-01",
    reason: "Disciplinary action",
    status: "Terminated"
  },
  {
    id: "EXT-003",
    employeeId: "T108",
    name: "Mr. Rajeev Kumar",
    role: "PGT Physics",
    department: "Teaching",
    resignationDate: "2026-07-20",
    lastWorkingDay: "2026-08-20",
    reason: "Better opportunity",
    status: "Relieved"
  },
  {
    id: "EXT-004",
    employeeId: "E106",
    name: "Meera Gupta",
    role: "Librarian",
    department: "Administration",
    resignationDate: "2026-09-10",
    lastWorkingDay: "2026-10-10",
    reason: "Higher studies",
    status: "Clearance Pending"
  }
];
