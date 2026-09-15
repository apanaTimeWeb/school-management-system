export interface BehaviourRemark {
  id: string;
  date: string;
  teacherName: string;
  type: 'Positive' | 'Improvement Needed' | 'Negative';
  remark: string;
}

export interface DisciplineWarning {
  id: string;
  date: string;
  incidentType: string;
  description: string;
  actionTaken: string;
  status: 'Active' | 'Resolved' | 'Closed';
}

export interface CounsellingRecord {
  id: string;
  date: string;
  counsellorName: string;
  topic: string; // e.g. "Academic Stress", "Peer Conflict"
  // Note: Detailed notes are hidden as per privacy constraint
  nextSessionDate?: string;
}

export interface StudentDisciplineData {
  remarks: BehaviourRemark[];
  warnings: DisciplineWarning[];
  counselling: CounsellingRecord[];
}
