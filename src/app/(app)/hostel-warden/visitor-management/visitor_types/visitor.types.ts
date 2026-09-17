export type VisitorStatus = 'CHECKED_IN' | 'CHECKED_OUT';

export interface VisitorRecord {
  id: string;
  visitorName: string;
  relation: string;
  studentName: string;
  studentId: string;
  roomNumber: string;
  purpose: string;
  checkInTime: string;
  checkOutTime?: string;
  idProofType: string;
  idProofNumber: string;
  status: VisitorStatus;
}
