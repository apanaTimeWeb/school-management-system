import { ConcessionRecord } from "../accountant_concessions_types/AccountantConcessionsTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_CONCESSIONS: ConcessionRecord[] = [
  { id: "REQ-2024-101", studentName: "Rakesh Roshan", admissionNo: "ADM-2022-10", className: "10th A", concessionType: "Scholarship", amount: 25000, requestedBy: "Accountant (Rahul)", requestedDate: "2024-02-10", reason: "Merit based scholarship 95%+", status: "Approved", approvedBy: "Principal (Dr. Smith)", approvalDate: "2024-02-12" },
  { id: "REQ-2024-102", studentName: "Sita Sharma", admissionNo: "ADM-2023-44", className: "9th B", concessionType: "Staff Concession", amount: 15000, requestedBy: "Accountant (Rahul)", requestedDate: "2024-02-14", reason: "Mother is a teacher here", status: "Pending Approval" },
  { id: "REQ-2024-103", studentName: "Vikas Patel", admissionNo: "ADM-2021-05", className: "12th Sci", concessionType: "Discount", amount: 5000, requestedBy: "Accountant (Rahul)", requestedDate: "2024-02-15", reason: "Early bird fee payment discount", status: "Rejected", approvedBy: "Admin (Vikram)", approvalDate: "2024-02-16", remarks: "Date passed for early bird." },
  { id: "REQ-2024-104", studentName: "Neha Gupta", admissionNo: "ADM-2023-88", className: "8th A", concessionType: "Discount", amount: 10000, requestedBy: "Accountant (Rahul)", requestedDate: "2024-02-18", reason: "Sibling discount applied", status: "Approved", approvedBy: "Admin (Vikram)", approvalDate: "2024-02-19" },
  { id: "REQ-2024-105", studentName: "Aryan Khan", admissionNo: "ADM-2022-55", className: "10th B", concessionType: "Scholarship", amount: 30000, requestedBy: "Accountant (Rahul)", requestedDate: "2024-02-20", reason: "Sports quota concession", status: "Pending Approval" },
];
