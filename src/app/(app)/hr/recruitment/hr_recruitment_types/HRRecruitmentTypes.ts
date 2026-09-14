export type HRCandidate = {
  id: string;
  name: string;
  appliedPosition: string;
  department: string;
  email: string;
  phone: string;
  appliedDate: string;
  status: 'Screening' | 'Interviewed' | 'Offered' | 'Rejected';
  experience: string;
};
