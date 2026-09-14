export type DocumentCategory = 'ID Proof' | 'Address Proof' | 'Qualification' | 'Experience' | 'Certificates' | 'Joining Documents' | 'Contract' | 'Appointment Letter' | 'Other Documents';
export type VerificationStatus = 'Pending' | 'Verified' | 'Rejected';

export interface EmployeeDocument {
  id: string;
  name: string;
  category: DocumentCategory;
  isUploaded: boolean;
  status: VerificationStatus;
  uploadedAt?: string;
  expiryDate?: string;
  fileUrl?: string;
}

export interface EmployeeVault {
  employeeId: string;
  firstName: string;
  lastName: string;
  department: string;
  designation: string;
  documents: EmployeeDocument[];
}

export interface DocumentAlert {
  id: string;
  employeeId: string;
  employeeName: string;
  documentName: string;
  category: DocumentCategory;
  alertType: 'Expired' | 'Expiring Soon' | 'Missing Critical';
  dueDate: string;
}

export interface FetchVaultParams {
  department?: string;
  search?: string;
}

export interface DocumentsResponse<T> {
  success: boolean;
  data: T;
}
