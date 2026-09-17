export type TransportDocumentType = 
  | 'REGISTRATION' 
  | 'INSURANCE' 
  | 'FITNESS' 
  | 'PERMIT' 
  | 'POLLUTION' 
  | 'TAX' 
  | 'ROADWORTHINESS' 
  | 'OTHER';

export type TransportDocumentStatus = 'VERIFIED' | 'PENDING' | 'REJECTED' | 'EXPIRED';

export type TransportDocumentAlertStatus = 'OK' | '90_DAYS' | '60_DAYS' | '30_DAYS' | '7_DAYS' | 'EXPIRED';

export interface TransportDocument {
  id: string;
  vehicleId: string;
  vehicleNumber: string;
  documentType: TransportDocumentType;
  documentNumber: string;
  issueDate: string;
  expiryDate: string;
  attachmentUrl: string | null;
  verificationStatus: TransportDocumentStatus;
  alertStatus: TransportDocumentAlertStatus;
  remindersEnabled: boolean;
}

export interface TransportDocumentFormData {
  vehicleId: string;
  documentType: TransportDocumentType;
  documentNumber: string;
  issueDate: string;
  expiryDate: string;
  attachmentFile: File | null;
  remindersEnabled: boolean;
}
