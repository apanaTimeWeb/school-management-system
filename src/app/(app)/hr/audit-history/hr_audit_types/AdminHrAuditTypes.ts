export type AuditActionType = 
  | 'Employee Created' 
  | 'Employee Updated' 
  | 'Salary Data Changed' 
  | 'Leave Approved' 
  | 'Document Updated' 
  | 'Designation Changed' 
  | 'Transfer' 
  | 'Promotion' 
  | 'Exit' 
  | 'Access Request';

export type SensitivityLevel = 'High' | 'Medium' | 'Low';

export interface AuditLog {
  id: string;
  timestamp: string;
  action: AuditActionType;
  performedBy: string; // e.g. "Super Admin (admin@school.com)"
  targetEmployeeId: string;
  targetEmployeeName: string;
  ipAddress: string;
  
  // Before and After states for the diff viewer
  changes: {
    field: string;
    before: string;
    after: string;
  }[];
}

export interface AuditFiltersState {
  actionType: string;
  dateFrom: string;
  dateTo: string;
  searchStr: string; // Emp ID or Name
}

export interface AuditResponse<T> {
  success: boolean;
  data: T;
}
