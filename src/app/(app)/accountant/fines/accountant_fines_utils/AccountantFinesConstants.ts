import { FineRecord } from "../accountant_fines_types/AccountantFinesTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_FINES: FineRecord[] = [
  { id: "FN-2024-001", studentName: "Arjun Verma", admissionNo: "ADM-2022-10", className: "10th A", relatedFeePeriod: "Q3 Tuition Fee", daysLate: 15, calcType: "Per Day", fineAmount: 1500, status: "Unpaid", appliedDate: "2024-01-15" },
  { id: "FN-2024-002", studentName: "Riya Singh", admissionNo: "ADM-2023-44", className: "9th B", relatedFeePeriod: "Term 1 Transport", daysLate: 5, calcType: "Fixed", fineAmount: 500, status: "Paid", appliedDate: "2024-01-05", paidDate: "2024-01-10" },
  { id: "FN-2024-003", studentName: "Karan Johar", admissionNo: "ADM-2021-05", className: "12th Sci", relatedFeePeriod: "Q3 Tuition Fee", daysLate: 30, calcType: "Per Day", fineAmount: 3000, status: "Waiver Pending", appliedDate: "2024-01-20", remarks: "Requested waiver due to medical emergency." },
  { id: "FN-2024-004", studentName: "Simran Kaur", admissionNo: "ADM-2023-88", className: "8th A", relatedFeePeriod: "Annual Charges", daysLate: 45, calcType: "Fixed", fineAmount: 1000, status: "Waived", appliedDate: "2023-12-01", waivedDate: "2024-01-02", remarks: "Waived by Principal." },
  { id: "FN-2024-005", studentName: "Vikas Patel", admissionNo: "ADM-2022-55", className: "10th B", relatedFeePeriod: "Q4 Tuition Fee", daysLate: 8, calcType: "Per Day", fineAmount: 800, status: "Unpaid", appliedDate: "2024-02-01" },
];
