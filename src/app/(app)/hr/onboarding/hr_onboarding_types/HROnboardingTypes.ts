export type HROnboardingTask = {
  id: string;
  taskName: string;
  status: 'Pending' | 'Completed';
};

export type HROnboardingRecord = {
  id: string;
  name: string;
  position: string;
  department: string;
  joiningDate: string;
  status: 'In Progress' | 'Completed' | 'Delayed';
  progress: number;
  tasks: HROnboardingTask[];
};
