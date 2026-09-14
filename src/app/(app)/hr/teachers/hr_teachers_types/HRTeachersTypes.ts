export type HRTeacher = {
  id: string;
  teacherId: string;
  name: string;
  qualification: string;
  subjects: string[];
  email: string;
  phone: string;
  dateOfJoin: string;
  status: 'Active' | 'On Leave' | 'Resigned';
  salary: number;
};
