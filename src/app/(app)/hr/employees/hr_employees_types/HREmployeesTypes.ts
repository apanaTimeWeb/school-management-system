export type HREmployee = {
  id: string;
  employeeId: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  dateOfJoin: string;
  status: 'Active' | 'On Leave' | 'Resigned';
  salary: number;
};
