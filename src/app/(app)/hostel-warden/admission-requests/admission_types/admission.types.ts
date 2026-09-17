export type RequestStatus = 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED' | 'ALLOCATED' | 'ACTIVE';

export interface AdmissionRequest {
  id: string;
  studentName: string;
  studentId: string;
  class: string;
  preferredHostel: string;
  roomPreference: 'AC' | 'Non-AC' | 'Premium' | 'Standard';
  reason: string;
  documentsAttached: boolean;
  requestDate: string;
  status: RequestStatus;
  guardianName: string;
  guardianContact: string;
}
