export type PrincipalAnalyticsTab = 'trends' | 'risks';

export interface PrincipalAnalyticsTrendMetric {
  id: string;
  title: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
  percentage: string;
  description: string;
  category: 'Strength' | 'Attendance' | 'Academic' | 'Class' | 'Teacher' | 'Admission' | 'Fee' | 'Discipline';
}

export interface PrincipalRiskStudent {
  id: string;
  studentName: string;
  classSection: string;
  riskType: 'Attendance' | 'Academic' | 'Behavioral';
  riskLevel: 'High' | 'Medium';
  reason: string;
  lastActionTaken: string;
}

export interface PrincipalAnalyticsData {
  trends: PrincipalAnalyticsTrendMetric[];
  atRiskStudents: PrincipalRiskStudent[];
}
