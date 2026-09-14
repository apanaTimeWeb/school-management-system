import { IncomeRecord, IncomeCategory } from "../accountant_income_types/AccountantIncomeTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const INCOME_CATEGORIES: IncomeCategory[] = [
  "Admission Fees",
  "Tuition Fees",
  "Transport Fees",
  "Hostel Fees",
  "Library Fine",
  "Examination Fees",
  "Other School Receipts",
  "Miscellaneous Income"
];

export const MOCK_INCOME: IncomeRecord[] = [
  { id: "REC-2024-001", category: "Admission Fees", source: "Aarav Sharma", referenceNo: "ADM-2024-100", amount: 50000, paymentMethod: "Bank Transfer", transactionId: "TXN-998877", incomeDate: "2024-04-01", status: "Realized", receivedBy: "Accountant" },
  { id: "REC-2024-002", category: "Tuition Fees", source: "Meera Reddy", referenceNo: "ADM-2022-45", amount: 12000, paymentMethod: "UPI", transactionId: "UPI-445566", incomeDate: "2024-04-05", status: "Realized", receivedBy: "Accountant" },
  { id: "REC-2024-003", category: "Miscellaneous Income", source: "Scrap Vendor", amount: 4500, paymentMethod: "Cash", incomeDate: "2024-04-10", status: "Realized", receivedBy: "Admin", remarks: "Old computer scrap sale." },
  { id: "REC-2024-004", category: "Transport Fees", source: "Vikram Das", referenceNo: "ADM-2023-12", amount: 3000, paymentMethod: "Cheque", transactionId: "CHQ-001234", incomeDate: "2024-04-12", status: "Pending Clearance", receivedBy: "Accountant" },
  { id: "REC-2024-005", category: "Library Fine", source: "Sneha Gupta", referenceNo: "ADM-2021-99", amount: 50, paymentMethod: "Cash", incomeDate: "2024-04-15", status: "Realized", receivedBy: "Librarian" },
  { id: "REC-2024-006", category: "Hostel Fees", source: "Rohan Verma", referenceNo: "ADM-2023-88", amount: 25000, paymentMethod: "Cheque", transactionId: "CHQ-005678", incomeDate: "2024-04-16", status: "Bounced", receivedBy: "Accountant", remarks: "Insufficient funds." },
];
