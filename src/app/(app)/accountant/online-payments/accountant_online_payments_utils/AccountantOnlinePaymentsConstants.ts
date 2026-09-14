import { OnlinePaymentRecord } from "../accountant_online_payments_types/AccountantOnlinePaymentsTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_ONLINE_PAYMENTS: OnlinePaymentRecord[] = [
  { id: "TXN-2024-001", gatewayTransactionId: "pay_xyz123456", paymentReference: "INV-001", studentName: "Rohan Sharma", admissionNo: "ADM-2023-001", amount: 25000, date: "2024-01-15 10:30 AM", method: "UPI", status: "Successful", reconciliationStatus: "Reconciled" },
  { id: "TXN-2024-002", gatewayTransactionId: "pay_abc987654", paymentReference: "INV-002", studentName: "Priya Singh", admissionNo: "ADM-2023-045", amount: 15000, date: "2024-01-16 11:45 AM", method: "Card", status: "Successful", reconciliationStatus: "Pending" },
  { id: "TXN-2024-003", gatewayTransactionId: "pay_fail11223", paymentReference: "INV-003", studentName: "Amit Kumar", admissionNo: "ADM-2022-112", amount: 12000, date: "2024-01-18 09:15 AM", method: "NetBanking", status: "Failed", reconciliationStatus: "Mismatch", failureReason: "Bank server timeout" },
  { id: "TXN-2024-004", gatewayTransactionId: "pay_pnd88776", paymentReference: "INV-004", studentName: "Sneha Patil", admissionNo: "ADM-2023-089", amount: 50000, date: "2024-01-20 02:20 PM", method: "UPI", status: "Pending", reconciliationStatus: "Pending" },
  { id: "TXN-2024-005", gatewayTransactionId: "pay_ref44556", paymentReference: "INV-005", studentName: "Karan Johar", admissionNo: "ADM-2021-004", amount: 35000, date: "2024-01-21 04:10 PM", method: "Card", status: "Refunded", reconciliationStatus: "Reconciled" },
  { id: "TXN-2024-006", gatewayTransactionId: "pay_can99001", paymentReference: "INV-006", studentName: "Rahul Verma", admissionNo: "ADM-2022-099", amount: 18000, date: "2024-01-22 10:05 AM", method: "UPI", status: "Cancelled", reconciliationStatus: "Reconciled", failureReason: "User cancelled at gateway" },
];
