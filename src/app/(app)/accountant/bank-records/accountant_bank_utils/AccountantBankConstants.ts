import { BankTransactionRecord } from "../accountant_bank_types/AccountantBankTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_BANK_TRANSACTIONS: BankTransactionRecord[] = [
  { id: "TXN-B-001", date: "2024-04-10", type: "Cheque", bankName: "SBI Bank", referenceNo: "CHQ-001234", payer: "Aarav Sharma", amount: 45000, status: "Cleared", clearanceDate: "2024-04-12", remarks: "Tuition Fee" },
  { id: "TXN-B-002", date: "2024-04-12", type: "Cheque", bankName: "ICICI Bank", referenceNo: "CHQ-009876", payer: "Meera Reddy", amount: 25000, status: "Pending Clearance", remarks: "Hostel Fee" },
  { id: "TXN-B-003", date: "2024-04-14", type: "Bank Transfer (NEFT/RTGS)", bankName: "HDFC Bank", referenceNo: "UTR-HDFC12345", payer: "Vikram Das", amount: 50000, status: "Reconciled", clearanceDate: "2024-04-14", remarks: "Admission Fee" },
  { id: "TXN-B-004", date: "2024-04-15", type: "Cheque", bankName: "Axis Bank", referenceNo: "CHQ-005544", payer: "Rohan Verma", amount: 30000, status: "Bounced", clearanceDate: "2024-04-16", remarks: "Insufficient Funds. Penalty applied." },
  { id: "TXN-B-005", date: "2024-04-16", type: "UPI", bankName: "Paytm Payments Bank", referenceNo: "UPI-41009988", payer: "Sneha Gupta", amount: 5000, status: "Reconciled", clearanceDate: "2024-04-16", remarks: "Transport Fee" },
  { id: "TXN-B-006", date: "2024-04-17", type: "Cheque", bankName: "Bank of Baroda", referenceNo: "CHQ-003322", payer: "Amit Kumar", amount: 12000, status: "Pending Clearance", remarks: "Tuition Fee" },
];
