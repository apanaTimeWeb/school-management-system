export type PrincipalCertificateType = 'Transfer Certificate (TC)' | 'Bonafide Certificate' | 'Character Certificate' | 'Study Certificate';
export type PrincipalRequestStatus = 'Pending' | 'Approved' | 'Rejected' | 'Issued';

export interface PrincipalCertificateRequest {
  id: string;
  studentId: string;
  studentName: string;
  classAndSection: string;
  type: PrincipalCertificateType;
  requestDate: string;
  reason: string;
  status: PrincipalRequestStatus;
  urgency: 'Normal' | 'Urgent';
  actionDate?: string;
  actionRemarks?: string;
}

export type PrincipalDocumentStatus = 'Pending Verification' | 'Verified' | 'Rejected';

export interface PrincipalStudentDocument {
  id: string;
  studentId: string;
  studentName: string;
  classAndSection: string;
  documentName: string; // e.g. "Birth Certificate", "Previous Marksheet"
  uploadDate: string;
  status: PrincipalDocumentStatus;
  fileUrl: string; // Mock URL for viewing
  remarks?: string;
}
