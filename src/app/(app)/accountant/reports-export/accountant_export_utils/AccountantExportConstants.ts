import { ExportHistoryRecord } from "../accountant_export_types/AccountantExportTypes";

export const CLASSES_LIST = [
  "Pre-Nursery", "Nursery", "LKG", "UKG",
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  "Class 11 - Sci", "Class 11 - Com", "Class 11 - Arts",
  "Class 12 - Sci", "Class 12 - Com", "Class 12 - Arts"
];

export const FEE_TYPES_LIST = [
  "Tuition Fee", "Admission Fee", "Transport Fee",
  "Hostel Fee", "Library Fee", "Laboratory Fee",
  "Annual Activity Fee", "Examination Fee", "Late Fine"
];

export const PAYMENT_METHODS_LIST = [
  "Cash", "UPI", "Credit/Debit Card", "Net Banking", "Cheque", "Demand Draft"
];

export const MOCK_EXPORT_HISTORY: ExportHistoryRecord[] = [
  {
    id: "EXP-8890",
    timestamp: "2024-04-18 10:30 AM",
    reportName: "Master Collection Dump",
    format: "Excel",
    status: "Completed",
    fileSize: "2.4 MB",
    filtersUsed: "Date: This Month, Class: All, Method: Online",
    requestedBy: "Admin (You)",
  },
  {
    id: "EXP-8889",
    timestamp: "2024-04-17 04:15 PM",
    reportName: "Defaulters List (High Priority)",
    format: "PDF",
    status: "Completed",
    fileSize: "1.1 MB",
    filtersUsed: "Date: Q1, Class: Class 10, Fee Type: Tuition",
    requestedBy: "Admin (You)",
  },
  {
    id: "EXP-8888",
    timestamp: "2024-04-17 09:00 AM",
    reportName: "Transport Fee Collection",
    format: "CSV",
    status: "Processing",
    filtersUsed: "Class: All, Fee Type: Transport",
    requestedBy: "Admin (You)",
  }
];
