import { CashTransaction, DailyCashSummary } from "../accountant_cashbook_types/AccountantCashbookTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_DAILY_SUMMARY: DailyCashSummary = {
  date: new Date().toISOString().split('T')[0],
  openingCash: 5000,
  totalCollection: 45000,
  totalExpense: 12000,
  cashHandover: 0,
  closingBalance: 38000, // 5000 + 45000 - 12000
  isClosed: false,
};

export const MOCK_CASH_TRANSACTIONS: CashTransaction[] = [
  { id: "CSH-001", time: "09:00 AM", type: "Opening Balance", particulars: "Cash from previous day", inflow: 5000, outflow: 0, balance: 5000, handledBy: "System" },
  { id: "CSH-002", time: "09:30 AM", type: "Collection", particulars: "Admission Fee - Rahul Verma", inflow: 15000, outflow: 0, balance: 20000, referenceNo: "REC-101", handledBy: "Accountant" },
  { id: "CSH-003", time: "10:15 AM", type: "Collection", particulars: "Tuition Fee - Sneha Sharma", inflow: 20000, outflow: 0, balance: 40000, referenceNo: "REC-102", handledBy: "Accountant" },
  { id: "CSH-004", time: "11:00 AM", type: "Expense", particulars: "Stationery Purchase", inflow: 0, outflow: 2000, balance: 38000, referenceNo: "EXP-55", handledBy: "Accountant" },
  { id: "CSH-005", time: "12:45 PM", type: "Collection", particulars: "Transport Fee - Aman", inflow: 10000, outflow: 0, balance: 48000, referenceNo: "REC-103", handledBy: "Accountant" },
  { id: "CSH-006", time: "02:30 PM", type: "Expense", particulars: "Plumbing Repair Vendor", inflow: 0, outflow: 10000, balance: 38000, referenceNo: "EXP-56", handledBy: "Accountant" },
];
