import { RefundRecord } from "../accountant_refunds_types/AccountantRefundsTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_REFUNDS: RefundRecord[] = [
  { id: "REF-2024-001", studentName: "Rohan Kumar", admissionNo: "ADM-2022-10", className: "10th A", amount: 15000, reason: "Excess fee paid by mistake", eligibility: "Eligible", status: "Processed", requestedDate: "2024-03-01", approvedBy: "Principal", approvalDate: "2024-03-02", processedDate: "2024-03-03", refundReference: "TXN-REF-889900" },
  { id: "REF-2024-002", studentName: "Amit Singh", admissionNo: "ADM-2023-44", className: "9th B", amount: 25000, reason: "Admission Cancelled (Moving out of city)", eligibility: "Eligible", status: "Approved", requestedDate: "2024-03-10", approvedBy: "Admin", approvalDate: "2024-03-12" },
  { id: "REF-2024-003", studentName: "Priya Sharma", admissionNo: "ADM-2021-05", className: "12th Sci", amount: 5000, reason: "Security Deposit Refund", eligibility: "Under Review", status: "Pending Approval", requestedDate: "2024-03-12" },
  { id: "REF-2024-004", studentName: "Vikram Das", admissionNo: "ADM-2023-88", className: "8th A", amount: 8000, reason: "Transport fee cancelled mid-year", eligibility: "Not Eligible", status: "Rejected", requestedDate: "2024-03-14", approvedBy: "Principal", approvalDate: "2024-03-15", remarks: "Transport fee is non-refundable mid-session." },
  { id: "REF-2024-005", studentName: "Sanya Ali", admissionNo: "ADM-2022-55", className: "10th B", amount: 12000, reason: "Double payment issue on gateway", eligibility: "Eligible", status: "Pending Approval", requestedDate: "2024-03-18" },
];
