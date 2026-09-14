import { StudentSearchRecord } from "../accountant_collect_fee_types/AccountantCollectFeeTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_STUDENT_RESULTS: StudentSearchRecord[] = [
  { id: "STU-002", studentName: "Priya Singh", admissionNo: "ADM-2023-045", className: "9th B", totalPending: 45000, installmentsPending: 2 },
  { id: "STU-003", studentName: "Amit Kumar", admissionNo: "ADM-2022-112", className: "12th Sci", totalPending: 60000, installmentsPending: 3 },
  { id: "STU-004", studentName: "Sneha Patil", admissionNo: "ADM-2023-089", className: "8th A", totalPending: 50000, installmentsPending: 2 },
];
