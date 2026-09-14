import { HRAuditHistoryRecord } from '../hr_audit_history_types/HRAuditHistoryTypes';

export const MOCK_HR_AUDIT_HISTORY: HRAuditHistoryRecord[] = [
  {
    id: "AUD-1001",
    action: "Approved Leave Request for Amit Patel",
    module: "Attendance",
    performedBy: "Neha K. (HR Manager)",
    timestamp: "2026-09-14 10:30 AM",
    ipAddress: "192.168.1.105",
    status: "Success"
  },
  {
    id: "AUD-1002",
    action: "Failed Login Attempt (Invalid Password)",
    module: "System",
    performedBy: "Unknown User",
    timestamp: "2026-09-14 09:15 AM",
    ipAddress: "203.0.113.42",
    status: "Failed"
  },
  {
    id: "AUD-1003",
    action: "Updated Salary Structure for TGT Level",
    module: "Payroll",
    performedBy: "Rajesh S. (Admin)",
    timestamp: "2026-09-13 16:45 PM",
    ipAddress: "192.168.1.110",
    status: "Success"
  },
  {
    id: "AUD-1004",
    action: "Deleted Inactive Candidate Profile",
    module: "Recruitment",
    performedBy: "Neha K. (HR Manager)",
    timestamp: "2026-09-13 14:20 PM",
    ipAddress: "192.168.1.105",
    status: "Warning"
  }
];
