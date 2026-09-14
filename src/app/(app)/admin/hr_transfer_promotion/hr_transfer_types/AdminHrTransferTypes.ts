export type TransferType = 'Department Transfer' | 'Branch/Campus Transfer' | 'Designation Change' | 'Promotion' | 'Demotion';
export type TransferStatus = 'Pending Approval' | 'Approved' | 'Rejected' | 'Completed';

export interface TransferRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: TransferType;
  
  currentValue: string; // e.g. "Junior Teacher" or "Main Campus"
  proposedValue: string; // e.g. "Senior Teacher" or "North Campus"
  
  effectiveDate: string;
  reason: string;
  
  requestedBy: string;
  requestedOn: string;
  
  status: TransferStatus;
}

export interface FetchTransferParams {
  type?: string;
  status?: string;
  search?: string;
}

export interface TransferResponse<T> {
  success: boolean;
  data: T;
}
