export type CertificateType = 'Bonafide Certificate' | 'Character Certificate' | 'Study Certificate' | 'Transfer Certificate' | 'Migration Certificate' | 'Other';

export interface GeneratedCertificate {
  id: string;
  type: CertificateType;
  issueDate: string;
  referenceNo: string;
  hasQR: boolean;
  downloadUrl: string; // Mock URL
}

export interface CertificateRequest {
  id: string;
  type: CertificateType;
  requestDate: string;
  reason: string;
  status: 'Pending' | 'In Process' | 'Generated' | 'Rejected';
  remarks?: string;
}

export interface StudentCertificatesData {
  generated: GeneratedCertificate[];
  requests: CertificateRequest[];
}
