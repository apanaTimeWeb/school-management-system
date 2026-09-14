export type ReportCategory = 'Demographics' | 'Lifecycle' | 'Performance & Pay' | 'Compliance';

export interface ReportDefinition {
  id: string;
  title: string;
  description: string;
  category: ReportCategory;
  isRestricted?: boolean; // For Payroll Report
}

export interface ReportFilterState {
  fromDate: string;
  toDate: string;
  department: string;
  status: string;
}

export interface GeneratedReportRow {
  id: string;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}

export interface GenerateReportParams {
  reportId: string;
  filters: ReportFilterState;
}

export interface ReportResponse<T> {
  success: boolean;
  data: T;
  columns?: string[]; // Dynamic column headers based on report type
}
