import { DailyClosingSummary } from "../accountant_closing_types/AccountantClosingTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const TODAY_SUMMARY: DailyClosingSummary = {
  id: "EOD-TODAY",
  date: new Date().toISOString().split('T')[0],
  cashCollection: 45000,
  onlineCollection: 120000,
  bankCollection: 85000,
  grossCollection: 250000, // 45k + 120k + 85k
  refunds: 5000,
  expenses: 15000,
  netCollection: 230000, // 250k - 5k - 15k
  openingBalance: 150000,
  closingBalance: 380000, // 150k + 230k
  status: "Draft",
};

export const MOCK_CLOSING_HISTORY: DailyClosingSummary[] = [
  {
    id: "EOD-2024-04-17", date: "2024-04-17",
    cashCollection: 30000, onlineCollection: 80000, bankCollection: 50000,
    grossCollection: 160000, refunds: 0, expenses: 10000, netCollection: 150000,
    openingBalance: 0, closingBalance: 150000, status: "Verified", closedBy: "Accountant"
  },
  {
    id: "EOD-2024-04-16", date: "2024-04-16",
    cashCollection: 50000, onlineCollection: 100000, bankCollection: 20000,
    grossCollection: 170000, refunds: 5000, expenses: 5000, netCollection: 160000,
    openingBalance: -160000, closingBalance: 0, status: "Closed", closedBy: "Accountant"
  },
];
