export type HRTransferRecord = {
  id: string;
  employeeId: string;
  name: string;
  type: 'Transfer' | 'Promotion';
  currentRole: string;
  newRole: string;
  currentDepartment: string;
  newDepartment: string;
  effectiveDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
};
