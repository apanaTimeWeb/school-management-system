export type RequestCategory = 'All' | 'Leave Request' | 'Certificate Request' | 'Bonafide Request' | 'Document Request' | 'Other';
export type RequestStatus = 'Pending' | 'Under Review' | 'Approved' | 'Rejected' | 'Completed';

export interface StudentRequest {
  id: string;
  category: Exclude<RequestCategory, 'All'>;
  title: string;
  description: string;
  dateSubmitted: string;
  status: RequestStatus;
  adminRemark?: string;
}

export interface StudentRequestsData {
  requests: StudentRequest[];
}
