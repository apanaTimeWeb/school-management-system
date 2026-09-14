import { ReceiptRecord } from "../accountant_receipts_types/AccountantReceiptsTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_RECEIPTS_HISTORY: ReceiptRecord[] = [
  { id: "REC-2024-001", studentName: "Rohan Sharma", admissionNo: "ADM-2023-001", className: "10th A", date: "2024-01-15", amount: 25000, paymentMethod: "UPI", transactionRef: "UPI1234567890", status: "Valid" },
  { id: "REC-2024-002", studentName: "Priya Singh", admissionNo: "ADM-2023-045", className: "9th B", date: "2024-01-16", amount: 15000, paymentMethod: "Card", transactionRef: "CARD-9988", status: "Valid" },
  { id: "REC-2024-003", studentName: "Amit Kumar", admissionNo: "ADM-2022-112", className: "12th Sci", date: "2024-01-18", amount: 12000, paymentMethod: "Cash", transactionRef: "N/A", status: "Voided", voidReason: "Wrong amount entered", voidedBy: "Rahul V." },
  { id: "REC-2024-004", studentName: "Sneha Patil", admissionNo: "ADM-2023-089", className: "8th A", date: "2024-01-20", amount: 50000, paymentMethod: "Bank Transfer", transactionRef: "NEFT-SBI88229", status: "Valid" },
  { id: "REC-2024-005", studentName: "Karan Johar", admissionNo: "ADM-2021-004", className: "11th Com", date: "2024-01-21", amount: 35000, paymentMethod: "UPI", transactionRef: "UPI0987654321", status: "Valid" },
];
