export type PrincipalHealthAlertLevel = 'High' | 'Medium' | 'Low';

export interface PrincipalHealthStudent {
  id: string;
  studentId: string;
  studentName: string;
  classAndSection: string;
  bloodGroup: string;
  heightCm: number;
  weightKg: number;
  allergies: string[];
  medicalConditions: string[];
  lastCheckupDate: string;
  alertLevel?: PrincipalHealthAlertLevel;
}

export type PrincipalMedicalIncidentSeverity = 'Minor' | 'Major' | 'Emergency';

export interface PrincipalMedicalIncident {
  id: string;
  studentId: string;
  studentName: string;
  classAndSection: string;
  date: string;
  time: string;
  severity: PrincipalMedicalIncidentSeverity;
  incidentType: string;
  description: string;
  actionTaken: string;
  parentNotified: boolean;
  status: 'Open' | 'Resolved';
}

export interface PrincipalHealthStats {
  totalStudents: number;
  studentsWithCheckups: number;
  activeMedicalAlerts: number;
  emergenciesThisMonth: number;
}
