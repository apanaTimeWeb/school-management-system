export type FineStatus = 'Unpaid' | 'Paid' | 'Waived' | 'Waiver Pending';
export type FineCalculationType = 'Fixed' | 'Per Day';

export interface FineRecord {
  id: string; // Fine ID
  studentName: string;
  admissionNo: string;
  className: string;
  relatedFeePeriod: string; // e.g. "Q1 Fee 2024"
  daysLate: number;
  calcType: FineCalculationType;
  fineAmount: number;
  status: FineStatus;
  appliedDate: string;
  paidDate?: string;
  waivedDate?: string;
  remarks?: string;
}
