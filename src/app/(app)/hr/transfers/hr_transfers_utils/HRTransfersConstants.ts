import { HRTransferRecord } from '../hr_transfers_types/HRTransfersTypes';

export const MOCK_HR_TRANSFERS: HRTransferRecord[] = [
  {
    id: "TRP-001",
    employeeId: "T101",
    name: "Dr. Ananya Sharma",
    type: "Promotion",
    currentRole: "TGT Mathematics",
    newRole: "Head of Department - Math",
    currentDepartment: "Teaching",
    newDepartment: "Teaching",
    effectiveDate: "2026-10-01",
    status: "Approved"
  },
  {
    id: "TRP-002",
    employeeId: "E105",
    name: "Aakash Gupta",
    type: "Transfer",
    currentRole: "System Admin",
    newRole: "System Admin",
    currentDepartment: "IT Support",
    newDepartment: "Main Branch IT",
    effectiveDate: "2026-09-20",
    status: "Pending"
  },
  {
    id: "TRP-003",
    employeeId: "E103",
    name: "Vijay Singh",
    type: "Promotion",
    currentRole: "Support Staff",
    newRole: "Senior Support Staff",
    currentDepartment: "Administration",
    newDepartment: "Administration",
    effectiveDate: "2026-08-01",
    status: "Approved"
  },
  {
    id: "TRP-004",
    employeeId: "T102",
    name: "Mr. Rahul Verma",
    type: "Transfer",
    currentRole: "TGT English",
    newRole: "TGT English",
    currentDepartment: "Teaching",
    newDepartment: "Primary Section",
    effectiveDate: "2026-09-15",
    status: "Rejected"
  }
];
