export type FeeStatus = 'PAID' | 'UNPAID' | 'PARTIAL';
export type FeeCategory = 'Room Rent' | 'Mess Fee' | 'Laundry' | 'Damages' | 'Fine';

export interface FeeRecord {
  id: string;
  studentName: string;
  studentId: string;
  roomNumber: string;
  feeCategory: FeeCategory;
  totalDue: number;
  paidAmount: number;
  balance: number;
  dueDate: string;
  status: FeeStatus;
  description: string;
}
