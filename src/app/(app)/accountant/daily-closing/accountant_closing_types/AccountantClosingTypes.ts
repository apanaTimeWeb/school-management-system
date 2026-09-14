export interface DailyClosingSummary {
  id: string; // Closing ID, e.g. EOD-2024-04-18
  date: string;
  cashCollection: number;
  onlineCollection: number;
  bankCollection: number; // Cheque, NEFT
  grossCollection: number; // Cash + Online + Bank
  refunds: number;
  expenses: number;
  netCollection: number; // Gross - Refunds - Expenses
  openingBalance: number; // EOD from yesterday
  closingBalance: number; // Opening Balance + Net Collection
  status: 'Draft' | 'Closed' | 'Verified'; // Verified by Principal
  closedBy?: string;
  remarks?: string;
}
