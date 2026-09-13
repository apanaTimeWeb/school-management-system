export type PrincipalReportCategory = 
  | 'Student' | 'Attendance' | 'Academic' | 'Examination' | 'Result' 
  | 'Teacher' | 'Admission' | 'Fee' | 'Discipline' | 'Event' 
  | 'Leave' | 'Library' | 'Transport' | 'Hostel' | 'Custom';

export interface PrincipalReportConfig {
  id: string;
  title: string;
  category: PrincipalReportCategory;
  description: string;
  iconName: string;
  colorClass: string;
}

export interface PrincipalReportDataColumn {
  key: string;
  label: string;
}

export interface PrincipalGeneratedReport {
  title: string;
  generatedAt: string;
  columns: PrincipalReportDataColumn[];
  data: Record<string, any>[];
}
