import { HRLeaveRequest } from '../hr_leaves_types/HRLeavesTypes';

export const MOCK_HR_LEAVES: HRLeaveRequest[] = [
  {
    id: "LV-001",
    employeeId: "T103",
    name: "Ms. Priya Singh",
    role: "Teacher",
    leaveType: "Sick",
    startDate: "2026-09-14",
    endDate: "2026-09-15",
    days: 2,
    reason: "Viral Fever",
    status: "Approved",
    appliedOn: "2026-09-13"
  },
  {
    id: "LV-002",
    employeeId: "E103",
    name: "Vijay Singh",
    role: "Support",
    leaveType: "Casual",
    startDate: "2026-09-16",
    endDate: "2026-09-16",
    days: 1,
    reason: "Family function",
    status: "Pending",
    appliedOn: "2026-09-14"
  },
  {
    id: "LV-003",
    employeeId: "T101",
    name: "Dr. Ananya Sharma",
    role: "Teacher",
    leaveType: "Earned",
    startDate: "2026-10-01",
    endDate: "2026-10-05",
    days: 5,
    reason: "Vacation",
    status: "Pending",
    appliedOn: "2026-09-12"
  },
  {
    id: "LV-004",
    employeeId: "E102",
    name: "Sita Verma",
    role: "Admin",
    leaveType: "Sick",
    startDate: "2026-09-10",
    endDate: "2026-09-10",
    days: 1,
    reason: "Headache",
    status: "Rejected",
    appliedOn: "2026-09-10"
  }
];
