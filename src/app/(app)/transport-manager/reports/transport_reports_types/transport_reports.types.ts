export type ReportCategory = 
  | 'VEHICLE_REPORTS'
  | 'ROUTE_REPORTS'
  | 'STUDENT_REPORTS'
  | 'STAFF_REPORTS'
  | 'FINANCIAL_REPORTS'
  | 'SAFETY_REPORTS';

export interface ReportDefinition {
  id: string;
  categoryId: ReportCategory;
  name: string;
  description: string;
  icon: string; // lucide icon name reference
}

export interface ReportCategoryDefinition {
  id: ReportCategory;
  title: string;
  icon: string;
  color: string;
  reports: ReportDefinition[];
}
