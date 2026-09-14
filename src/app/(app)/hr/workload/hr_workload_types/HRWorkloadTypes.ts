export type HRWorkloadRecord = {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  department: string;
  assignedClasses: string[];
  totalHours: number;
  status: 'Optimal' | 'Overloaded' | 'Underutilized';
};
