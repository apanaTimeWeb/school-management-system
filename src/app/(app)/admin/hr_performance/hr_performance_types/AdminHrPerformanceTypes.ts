export type AppraisalStatus = 'Draft' | 'In Review' | 'Completed';

export interface PerformanceGoal {
  id: string;
  description: string;
  weightage: number; // percentage e.g. 30%
  achieved: number; // percentage e.g. 25%
}

export interface EmployeePerformanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  designation: string;
  department: string;
  
  cycle: string; // e.g. "FY 2024-25 Mid Year"
  status: AppraisalStatus;
  
  goals: PerformanceGoal[];
  overallRating: number; // 1 to 5
  managerRemarks: string;
  hrReview: string;
  
  promotionRecommended: boolean;
  
  completedDate?: string;
}

export interface FetchPerformanceParams {
  cycle?: string;
  status?: string;
  search?: string;
}

export interface PerformanceResponse<T> {
  success: boolean;
  data: T;
}
