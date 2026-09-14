export type HRExitRecord = {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  department: string;
  resignationDate: string;
  lastWorkingDay: string;
  reason: string;
  status: 'Resigned' | 'Notice Period' | 'Clearance Pending' | 'Terminated' | 'Relieved';
};
