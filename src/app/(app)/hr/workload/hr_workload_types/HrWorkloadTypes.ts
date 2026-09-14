export type WorkloadStatus = 'Optimal' | 'Overloaded' | 'Underutilized';

export interface AcademicAssignment {
  id: string;
  subject: string;
  classAssigned: string; // e.g. "X-A"
  periodsPerWeek: number;
}

export interface AdditionalResponsibility {
  id: string;
  role: string; // e.g. "Class Teacher", "Sports Coordinator"
}

export interface TeacherWorkloadRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  
  maxPeriodsAllowed: number;
  
  assignments: AcademicAssignment[];
  responsibilities: AdditionalResponsibility[];
}

export interface FetchWorkloadParams {
  department?: string;
  search?: string;
}

export interface WorkloadResponse<T> {
  success: boolean;
  data: T;
}
