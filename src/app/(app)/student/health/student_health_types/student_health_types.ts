export interface HealthProfile {
  bloodGroup: string;
  heightCm: number;
  weightKg: number;
  bmi: number;
  allergies: string[];
  chronicConditions: string[]; // E.g., Asthma. Restricted/Masked if sensitive.
}

export interface EmergencyContact {
  name: string;
  relation: string;
  phone: string;
  preferredHospital: string;
}

export interface CheckupRecord {
  id: string;
  date: string;
  conductedBy: string; // Doctor or Nurse name
  remarks: string;
  vision: string; // e.g. "6/6"
  dental: string; // e.g. "Cavity found"
  status: 'Healthy' | 'Requires Attention';
}

export interface MedicalNotice {
  id: string;
  date: string;
  title: string;
  message: string;
  isUrgent: boolean;
}

export interface StudentHealthData {
  profile: HealthProfile;
  emergency: EmergencyContact;
  checkups: CheckupRecord[];
  notices: MedicalNotice[];
}
