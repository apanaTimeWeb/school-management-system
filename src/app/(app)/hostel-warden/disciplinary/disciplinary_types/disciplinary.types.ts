export type DisciplinaryCategory = 'Ragging' | 'Late Entry' | 'Property Damage' | 'Substance Abuse' | 'Misbehavior' | 'Other';
export type DisciplinaryAction = 'Warning' | 'Fine' | 'Suspension' | 'Expulsion' | 'Pending Decision';

export interface DisciplinaryRecord {
  id: string;
  studentName: string;
  studentId: string;
  roomNumber: string;
  incidentDate: string;
  category: DisciplinaryCategory;
  description: string;
  actionTaken: DisciplinaryAction;
  fineAmount?: number;
  wardenRemarks: string;
  parentNotified: boolean;
  status: 'OPEN' | 'CLOSED';
}
