export type CashTransactionType = 'Opening Balance' | 'Collection' | 'Expense' | 'Handover' | 'Closing Balance';

export interface CashTransaction {
  id: string; // e.g., CSH-001
  time: string;
  type: CashTransactionType;
  particulars: string; // e.g. "Fee Collection from Amit", "Electricity Bill"
  inflow: number;
  outflow: number;
  balance: number;
  referenceNo?: string;
  handledBy: string;
}

export interface DailyCashSummary {
  date: string;
  openingCash: number;
  totalCollection: number;
  totalExpense: number;
  cashHandover: number;
  closingBalance: number;
  isClosed: boolean;
  verifiedBy?: string;
}
