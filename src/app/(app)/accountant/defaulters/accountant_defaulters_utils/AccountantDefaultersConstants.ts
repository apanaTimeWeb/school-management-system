import { DefaulterRecord } from "../accountant_defaulters_types/AccountantDefaultersTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_DEFAULTERS: DefaulterRecord[] = [
  { id: "STU-1001", studentName: "Rakesh Roshan", admissionNo: "ADM-2022-10", classSection: "10th A", dueDate: "2023-10-15", overdueDays: 95, outstandingAmount: 45000, reminderStatus: "Sent", lastReminderDate: "2024-01-10", followUpStatus: "Promised to Pay", lastFollowUpNote: "Father promised to pay next week." },
  { id: "STU-1005", studentName: "Sita Sharma", admissionNo: "ADM-2023-44", classSection: "9th B", dueDate: "2023-11-20", overdueDays: 60, outstandingAmount: 15000, reminderStatus: "Pending", followUpStatus: "Not Contacted" },
  { id: "STU-1012", studentName: "Vikas Patel", admissionNo: "ADM-2021-05", classSection: "12th Sci", dueDate: "2023-12-10", overdueDays: 40, outstandingAmount: 25000, reminderStatus: "Sent", lastReminderDate: "2024-01-05", followUpStatus: "Unreachable", lastFollowUpNote: "Phone switched off." },
  { id: "STU-1033", studentName: "Neha Gupta", admissionNo: "ADM-2023-88", classSection: "8th A", dueDate: "2024-01-05", overdueDays: 15, outstandingAmount: 12000, reminderStatus: "Pending", followUpStatus: "Not Contacted" },
  { id: "STU-1045", studentName: "Aryan Khan", admissionNo: "ADM-2022-55", classSection: "10th B", dueDate: "2023-09-01", overdueDays: 140, outstandingAmount: 60000, reminderStatus: "Sent", lastReminderDate: "2023-12-20", followUpStatus: "Disputed", lastFollowUpNote: "Claims they already paid in cash, checking records." },
];
