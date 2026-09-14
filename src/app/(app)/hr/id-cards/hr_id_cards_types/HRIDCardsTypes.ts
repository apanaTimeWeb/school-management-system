export type HRIDCardRecord = {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  department: string;
  bloodGroup: string;
  emergencyContact: string;
  status: 'Generated' | 'Pending' | 'Printed';
  issueDate?: string;
  validUntil: string;
};
