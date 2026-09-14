export type HRDocument = {
  id: string;
  employeeId: string;
  name: string;
  documentType: 'KYC' | 'Resume' | 'Certificate' | 'Contract' | 'Other';
  documentName: string;
  uploadedDate: string;
  status: 'Verified' | 'Pending' | 'Rejected';
  size: string;
};
