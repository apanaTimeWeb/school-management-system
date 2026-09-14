import { ReconRecord, ReconSummary } from "../accountant_reconciliation_types/AccountantReconTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_RECON_SUMMARY: ReconSummary = {
  matchedCount: 145,
  unmatchedCount: 3,
  duplicateCount: 1,
  totalVolume: 1250000,
};

export const MOCK_RECON_RECORDS: ReconRecord[] = [
  {
    id: "ERP-TXN-101",
    date: "2024-04-18",
    category: "Gateway",
    erpAmount: 15000,
    sourceAmount: 15000,
    variance: 0,
    sourceReference: "pay_Razorpay9876",
    payer: "Rahul Verma",
    status: "Matched",
    reconciledBy: "System",
  },
  {
    id: "ERP-TXN-102",
    date: "2024-04-18",
    category: "Gateway",
    erpAmount: 25000,
    sourceAmount: 24500,
    variance: -500, // Gateway fee deducted
    sourceReference: "pay_Razorpay4433",
    payer: "Sneha Reddy",
    status: "Unmatched",
    remarks: "Suspected Gateway Fee Deduction",
  },
  {
    id: "ERP-TXN-103",
    date: "2024-04-17",
    category: "Bank",
    erpAmount: 40000,
    sourceAmount: 40000,
    variance: 0,
    sourceReference: "UTR-HDFC-0099",
    payer: "Amit Kumar",
    status: "Pending",
  },
  {
    id: "ERP-TXN-104",
    date: "2024-04-17",
    category: "Bank",
    erpAmount: 12000,
    sourceAmount: 12000,
    variance: 0,
    sourceReference: "UTR-ICICI-1122",
    payer: "Priya Singh",
    status: "Duplicate",
    remarks: "Logged twice in ERP by mistake",
  },
  {
    id: "ERP-TXN-105",
    date: "2024-04-16",
    category: "Cash",
    erpAmount: 5500,
    sourceAmount: 5000,
    variance: -500, // Short cash
    sourceReference: "Drawer-1",
    payer: "Multiple",
    status: "Unmatched",
    remarks: "Cash short at end of day",
  }
];
