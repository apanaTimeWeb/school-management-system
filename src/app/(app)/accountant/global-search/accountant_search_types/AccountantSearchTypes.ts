export type GlobalSearchEntityType = 'Student' | 'Receipt' | 'Invoice' | 'Transaction';

export interface GlobalSearchResult {
  id: string; // The primary key (Admission No, Receipt No, TXN ID)
  type: GlobalSearchEntityType;
  title: string; // Name of student, or summary of transaction
  amount: number | null;
  date: string;
  status: string; // Paid, Pending, Success, etc.
  reference: string; // Payment Reference, etc.
  details: string; // Any extra context
}
