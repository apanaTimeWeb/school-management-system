import { HRIDCardRecord } from '../hr_id_cards_types/HRIDCardsTypes';

export const MOCK_HR_ID_CARDS: HRIDCardRecord[] = [
  {
    id: "IDC-001",
    employeeId: "T101",
    name: "Dr. Ananya Sharma",
    role: "PGT Math",
    department: "Teaching",
    bloodGroup: "O+",
    emergencyContact: "+91 9876543210",
    status: "Printed",
    issueDate: "2026-04-01",
    validUntil: "2027-03-31"
  },
  {
    id: "IDC-002",
    employeeId: "E115",
    name: "Rajesh Kumar",
    role: "Security Guard",
    department: "Support Staff",
    bloodGroup: "B+",
    emergencyContact: "+91 9876543211",
    status: "Generated",
    issueDate: "2026-09-10",
    validUntil: "2027-09-09"
  },
  {
    id: "IDC-003",
    employeeId: "T110",
    name: "Meera Gupta",
    role: "TGT English",
    department: "Teaching",
    bloodGroup: "A+",
    emergencyContact: "+91 9876543212",
    status: "Pending",
    validUntil: "2027-09-09"
  },
  {
    id: "IDC-004",
    employeeId: "E105",
    name: "Aakash Gupta",
    role: "System Admin",
    department: "IT",
    bloodGroup: "AB+",
    emergencyContact: "+91 9876543213",
    status: "Printed",
    issueDate: "2026-01-15",
    validUntil: "2027-01-14"
  }
];
