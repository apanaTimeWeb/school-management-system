export interface SearchFiltersState {
  keyword: string; // Employee ID or Name
  department: string;
  designation: string;
  employmentType: string;
  joiningDateFrom: string;
  joiningDateTo: string;
  status: string;
  qualification: string;
  location: string;
  documentStatus: string;
}

export interface EmployeeSearchResult {
  id: string;
  employeeId: string;
  name: string;
  department: string;
  designation: string;
  employmentType: 'Full-Time' | 'Part-Time' | 'Contract';
  joiningDate: string;
  status: 'Active' | 'On Leave' | 'Resigned' | 'Terminated';
  qualification: string;
  location: string;
  documentStatus: 'Verified' | 'Pending' | 'Expired';
  avatar?: string;
  email: string;
  phone: string;
}

export interface SearchResponse<T> {
  success: boolean;
  data: T;
  totalCount: number;
}
