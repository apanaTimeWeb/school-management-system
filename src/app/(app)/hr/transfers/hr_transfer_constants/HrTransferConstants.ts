import type { TransferRequest } from "../hr_transfer_types/HrTransferTypes";

export const MOCK_TRANSFER_REQUESTS: TransferRequest[] = [
  {
    id: "req-1", employeeId: "EMP-045", employeeName: "Priya Sharma", type: "Promotion",
    currentValue: "Teacher", proposedValue: "Senior Teacher",
    effectiveDate: "2024-08-01", reason: "Exceptional performance over last 3 years.",
    requestedBy: "Principal", requestedOn: "2024-06-15", status: "Pending Approval"
  },
  {
    id: "req-2", employeeId: "EMP-088", employeeName: "Rakesh Singh", type: "Branch/Campus Transfer",
    currentValue: "Main Campus", proposedValue: "North Campus",
    effectiveDate: "2024-07-01", reason: "Shortage of staff at North Campus.",
    requestedBy: "HR Admin", requestedOn: "2024-06-20", status: "Pending Approval"
  },
  {
    id: "req-3", employeeId: "EMP-012", employeeName: "Sunita Rao", type: "Department Transfer",
    currentValue: "Science Dept", proposedValue: "Administration Dept",
    effectiveDate: "2024-06-01", reason: "Internal mobility and skill alignment.",
    requestedBy: "Self", requestedOn: "2024-05-15", status: "Approved"
  },
  {
    id: "req-4", employeeId: "EMP-005", employeeName: "Suresh Patel", type: "Demotion",
    currentValue: "Head Janitor", proposedValue: "Janitor",
    effectiveDate: "2024-05-01", reason: "Disciplinary action.",
    requestedBy: "Facilities Manager", requestedOn: "2024-04-10", status: "Completed"
  },
  {
    id: "req-5", employeeId: "EMP-034", employeeName: "Anil Kapoor", type: "Designation Change",
    currentValue: "Admin Assistant", proposedValue: "IT Assistant",
    effectiveDate: "2024-06-10", reason: "Completed IT certification.",
    requestedBy: "Self", requestedOn: "2024-06-05", status: "Rejected"
  }
];

