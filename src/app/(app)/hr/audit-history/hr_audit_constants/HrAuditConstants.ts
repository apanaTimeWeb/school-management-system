import type { AuditLog } from "../hr_audit_types/HrAuditTypes";

export const MOCK_AUDIT_LOGS: AuditLog[] = [
  {
    id: "aud-001", timestamp: "2024-10-21T14:30:00Z", action: "Salary Data Changed",
    performedBy: "Payroll Admin (pay@school.edu)", targetEmployeeId: "EMP-045", targetEmployeeName: "Amit Sharma", ipAddress: "192.168.1.45",
    changes: [
      { field: "Basic Salary", before: "₹ 45,000", after: "₹ 52,000" },
      { field: "HRA", before: "₹ 10,000", after: "₹ 12,000" }
    ]
  },
  {
    id: "aud-002", timestamp: "2024-10-21T11:15:22Z", action: "Promotion",
    performedBy: "HR Manager (hr@school.edu)", targetEmployeeId: "EMP-012", targetEmployeeName: "Neha Gupta", ipAddress: "192.168.1.12",
    changes: [
      { field: "Designation", before: "Teacher", after: "Senior Teacher" },
      { field: "Department", before: "Science", after: "Science (Head)" }
    ]
  },
  {
    id: "aud-003", timestamp: "2024-10-20T09:45:10Z", action: "Employee Created",
    performedBy: "Super Admin (admin@school.edu)", targetEmployeeId: "EMP-089", targetEmployeeName: "Rahul Verma", ipAddress: "10.0.0.5",
    changes: [
      { field: "Account Status", before: "Null", after: "Active" },
      { field: "Role Assigned", before: "Null", after: "PTI" }
    ]
  },
  {
    id: "aud-004", timestamp: "2024-10-19T16:20:05Z", action: "Leave Approved",
    performedBy: "HOD Mathematics", targetEmployeeId: "EMP-033", targetEmployeeName: "Priya Das", ipAddress: "192.168.1.22",
    changes: [
      { field: "Leave Status (Sick)", before: "Pending", after: "Approved (2 Days)" }
    ]
  },
  {
    id: "aud-005", timestamp: "2024-10-18T10:05:00Z", action: "Access Request",
    performedBy: "IT Admin (it@school.edu)", targetEmployeeId: "EMP-055", targetEmployeeName: "Vikas Singh", ipAddress: "10.0.0.8",
    changes: [
      { field: "ERP Modules Access", before: "Basic", after: "Security Dashboard Granted" }
    ]
  },
  {
    id: "aud-006", timestamp: "2024-10-17T15:30:00Z", action: "Document Updated",
    performedBy: "Compliance Bot", targetEmployeeId: "EMP-004", targetEmployeeName: "Sunita Rao", ipAddress: "System",
    changes: [
      { field: "ID Proof Expiry", before: "2024-10-10", after: "2025-10-10 (Renewed)" },
      { field: "Verification Status", before: "Expired", after: "Verified" }
    ]
  },
  {
    id: "aud-007", timestamp: "2024-10-15T12:00:00Z", action: "Exit",
    performedBy: "HR Manager (hr@school.edu)", targetEmployeeId: "EMP-021", targetEmployeeName: "Rajesh Kumar", ipAddress: "192.168.1.12",
    changes: [
      { field: "Employment Status", before: "Active", after: "Terminated" },
      { field: "System Access", before: "Granted", after: "Revoked" }
    ]
  }
];

