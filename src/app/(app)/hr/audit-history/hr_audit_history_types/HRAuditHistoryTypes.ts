export type HRAuditHistoryRecord = {
  id: string;
  action: string;
  module: 'Payroll' | 'Recruitment' | 'Employee Management' | 'Attendance' | 'System';
  performedBy: string;
  timestamp: string;
  ipAddress: string;
  status: 'Success' | 'Failed' | 'Warning';
};
