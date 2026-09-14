import { StudentFeeSummary, FeeStructureItem, FeePaymentRecord, DiscountRecord, FineRecord } from "../accountant_student_fees_types/AccountantStudentFeesTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_STUDENTS_LIST: StudentFeeSummary[] = [
  { id: "STU-001", studentName: "Rohan Sharma", admissionNo: "ADM-2023-001", className: "10th A", totalFees: 85000, paidAmount: 85000, pendingAmount: 0, overdueAmount: 0, status: "Clear" },
  { id: "STU-002", studentName: "Priya Singh", admissionNo: "ADM-2023-045", className: "9th B", totalFees: 75000, paidAmount: 45000, pendingAmount: 30000, overdueAmount: 15000, status: "Overdue" },
  { id: "STU-003", studentName: "Amit Kumar", admissionNo: "ADM-2022-112", className: "12th Sci", totalFees: 120000, paidAmount: 60000, pendingAmount: 60000, overdueAmount: 0, status: "Pending" },
  { id: "STU-004", studentName: "Sneha Patil", admissionNo: "ADM-2023-089", className: "8th A", totalFees: 65000, paidAmount: 20000, pendingAmount: 45000, overdueAmount: 5000, status: "Overdue" },
  { id: "STU-005", studentName: "Karan Johar", admissionNo: "ADM-2021-004", className: "11th Com", totalFees: 95000, paidAmount: 95000, pendingAmount: 0, overdueAmount: 0, status: "Clear" },
];

export const MOCK_FEE_STRUCTURE: FeeStructureItem[] = [
  { id: "FEE-01", name: "Admission Fee (One-time)", amount: 15000, dueDate: "2023-04-01", status: "Paid", isInstallment: false },
  { id: "FEE-02", name: "Tuition Fee - Term 1", amount: 25000, dueDate: "2023-05-15", status: "Paid", isInstallment: true },
  { id: "FEE-03", name: "Tuition Fee - Term 2", amount: 25000, dueDate: "2023-09-15", status: "Overdue", isInstallment: true },
  { id: "FEE-04", name: "Tuition Fee - Term 3", amount: 25000, dueDate: "2024-01-15", status: "Pending", isInstallment: true },
  { id: "FEE-05", name: "Library & Lab Charges", amount: 5000, dueDate: "2023-06-01", status: "Paid", isInstallment: false },
];

export const MOCK_PAYMENT_HISTORY: FeePaymentRecord[] = [
  { id: "TXN-101", receiptNo: "REC-2324-0012", amount: 15000, date: "2023-04-02", method: "UPI", status: "Successful" },
  { id: "TXN-102", receiptNo: "REC-2324-0455", amount: 25000, date: "2023-05-10", method: "Card", status: "Successful" },
  { id: "TXN-103", receiptNo: "REC-2324-0899", amount: 5000, date: "2023-06-05", method: "Cash", status: "Successful" },
];

export const MOCK_DISCOUNTS: DiscountRecord[] = [
  { id: "DIS-01", type: "Scholarship", name: "Merit Scholarship (95%+)", amount: 10000, approvedBy: "Principal", date: "2023-04-10" },
  { id: "DIS-02", type: "Concession", name: "Sibling Concession", amount: 5000, approvedBy: "Management", date: "2023-04-12" },
];

export const MOCK_FINES: FineRecord[] = [
  { id: "FIN-01", reason: "Late Fee - Term 1 Tuition", amount: 500, dateApplied: "2023-05-20", status: "Paid" },
  { id: "FIN-02", reason: "Library Book Damage", amount: 250, dateApplied: "2023-08-14", status: "Waived" },
  { id: "FIN-03", reason: "Late Fee - Term 2 Tuition", amount: 1000, dateApplied: "2023-09-20", status: "Pending" },
];
