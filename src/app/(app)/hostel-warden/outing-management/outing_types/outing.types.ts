export type OutingType = 'Local Outing' | 'Home Visit' | 'Medical Emergency' | 'Overnight Leave Pass';
export type GatePassStatus = 'PENDING_WARDEN' | 'PENDING_GUARDIAN' | 'APPROVED' | 'REJECTED' | 'ACTIVE_OUT' | 'RETURNED' | 'LATE';

export interface GatePassRequest {
  id: string;
  studentName: string;
  studentId: string;
  roomNumber: string;
  outingType: OutingType;
  reason: string;
  requestedExitTime: string;
  expectedReturnTime: string;
  actualExitTime?: string;
  actualReturnTime?: string;
  guardianApprovalRequired: boolean;
  guardianApprovalStatus: 'APPROVED' | 'PENDING' | 'REJECTED' | 'NA';
  wardenApprovalStatus: 'APPROVED' | 'PENDING' | 'REJECTED';
  status: GatePassStatus;
  isOvernight: boolean;
}
