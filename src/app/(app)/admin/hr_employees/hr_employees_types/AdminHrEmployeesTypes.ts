export interface EmployeePersonalDetails {
  firstName: string;
  lastName: string;
  dob: string;
  gender: 'Male' | 'Female' | 'Other';
  bloodGroup: string;
}

export interface EmployeeContactDetails {
  phone: string;
  email: string;
  address: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

export interface EmployeeJoiningDetails {
  joinDate: string;
  department: string;
  designation: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Intern';
  qualification: string;
  experienceYears: number;
}

export interface EmployeeDocument {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  url: string;
}

export interface EmployeeBankDetails {
  accountName: string;
  accountNumber: string;
  bankName: string;
  ifscCode: string;
}

export interface EmployeeHistoryRecord {
  id: string;
  type: 'Transfer' | 'Promotion' | 'Resignation' | 'Exit';
  date: string;
  description: string;
}

export interface Employee {
  id: string;
  employeeId: string; // e.g., EMP-001
  status: 'Active' | 'On Leave' | 'Suspended' | 'Exited';
  personal: EmployeePersonalDetails;
  contact: EmployeeContactDetails;
  joining: EmployeeJoiningDetails;
  documents: EmployeeDocument[];
  bankDetails?: EmployeeBankDetails; // Restricted access
  history: EmployeeHistoryRecord[];
}

export interface FetchEmployeesParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  department?: string;
}

export interface EmployeeListResponse {
  success: boolean;
  message: string;
  data: Employee[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

export interface EmployeeDetailResponse {
  success: boolean;
  message: string;
  data: Employee | null;
}
