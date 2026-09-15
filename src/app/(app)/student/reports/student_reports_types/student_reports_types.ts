export type ReportType = 
  | 'Attendance Report' 
  | 'Academic Report' 
  | 'Result Report' 
  | 'Assignment Report' 
  | 'Homework Status' 
  | 'Fee Statement' 
  | 'Library Statement' 
  | 'Certificate Status';

export interface ReportConfig {
  id: string;
  type: ReportType;
  description: string;
  lastUpdated: string;
  isAvailable: boolean; // Some reports might not be generated yet
}

export interface StudentReportsData {
  reports: ReportConfig[];
}
