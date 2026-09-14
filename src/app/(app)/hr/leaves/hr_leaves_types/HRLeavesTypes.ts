export type HRLeaveRequest = {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  leaveType: 'Sick' | 'Casual' | 'Earned' | 'Maternity' | 'Unpaid';
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedOn: string;
};
