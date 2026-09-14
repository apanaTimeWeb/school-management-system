export type ExitStatus = 'Resignation Submitted' | 'Notice Period' | 'Clearance Pending' | 'Relieved';

export interface ExitClearanceItem {
  id: string;
  task: string; // e.g. "Asset Return", "Pending Dues", "Exit Interview"
  isCleared: boolean;
}

export interface EmployeeExitRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  designation: string;
  department: string;
  
  resignationDate: string;
  noticePeriodDays: number;
  expectedRelievingDate: string;
  reason: string;
  
  status: ExitStatus;
  
  clearanceChecklist: ExitClearanceItem[];
  
  relievingLetterGenerated: boolean;
  experienceCertificateGenerated: boolean;
}

export interface FetchExitParams {
  status?: string;
  search?: string;
}

export interface ExitResponse<T> {
  success: boolean;
  data: T;
}
