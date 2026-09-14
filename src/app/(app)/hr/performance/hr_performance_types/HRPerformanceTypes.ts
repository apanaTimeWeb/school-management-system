export type HRPerformanceRecord = {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  department: string;
  appraisalCycle: string;
  rating: number; // out of 5
  status: 'Reviewed' | 'Pending' | 'In Progress';
  reviewer: string;
};
