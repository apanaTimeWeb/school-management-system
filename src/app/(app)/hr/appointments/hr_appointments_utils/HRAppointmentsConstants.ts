import { HRLetter } from '../hr_appointments_types/HRAppointmentsTypes';

export const MOCK_HR_LETTERS: HRLetter[] = [
  {
    id: "LTR-001",
    recipientName: "Aakash Gupta",
    recipientRole: "System Admin",
    letterType: "Offer Letter",
    issueDate: "2026-09-08",
    status: "Signed"
  },
  {
    id: "LTR-002",
    recipientName: "Sunil Das",
    recipientRole: "TGT Mathematics",
    letterType: "Appointment Letter",
    issueDate: "2026-09-12",
    status: "Sent"
  },
  {
    id: "LTR-003",
    recipientName: "Priya Singh",
    recipientRole: "Teacher",
    letterType: "Warning Letter",
    issueDate: "2026-09-10",
    status: "Draft"
  },
  {
    id: "LTR-004",
    recipientName: "Ramesh Kumar",
    recipientRole: "Admin",
    letterType: "Relieving Letter",
    issueDate: "2026-08-30",
    status: "Signed"
  }
];
