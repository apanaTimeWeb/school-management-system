export type DocumentCategory = 
  | 'VEHICLE_DOCUMENT'
  | 'DRIVER_DOCUMENT'
  | 'MAINTENANCE_BILL'
  | 'INSPECTION_REPORT'
  | 'ACCIDENT_REPORT'
  | 'OTHER';

export type DocumentType = 
  | 'INSURANCE'
  | 'PERMIT'
  | 'FITNESS_CERTIFICATE'
  | 'REGISTRATION_RC'
  | 'POLLUTION_PUC'
  | 'DRIVING_LICENSE'
  | 'BACKGROUND_CHECK'
  | 'MEDICAL_CERTIFICATE'
  | 'BILL'
  | 'REPORT'
  | 'MISC';

export type DocumentStatus = 'ACTIVE' | 'EXPIRING_SOON' | 'EXPIRED' | 'ARCHIVED';

export interface TransportDocumentRecord {
  id: string;
  category: DocumentCategory;
  documentType: DocumentType;
  
  title: string;
  referenceId: string; // e.g. Policy Number, License Number
  
  associatedEntity: string; // e.g., 'VEH-001', 'Driver Amit', or 'General'
  
  issueDate: string; // YYYY-MM-DD
  expiryDate: string | null; // null if it doesn't expire
  
  fileUrl: string;
  uploadedBy: string;
  uploadDate: string;
}

export interface TransportDocumentFormData {
  category: DocumentCategory;
  documentType: DocumentType;
  title: string;
  referenceId: string;
  associatedEntity: string;
  issueDate: string;
  expiryDate: string;
  hasExpiry: boolean;
  // fileUrl would typically be handled via a file upload input
}
