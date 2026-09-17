export type ReportType = 'Daily Attendance' | 'Monthly Mess Bill' | 'Damage & Fine' | 'Maintenance Summary' | 'Visitor Log';

export interface ReportSummary {
  id: string;
  type: ReportType;
  generatedDate: string;
  period: string; // e.g. "Nov 2023", "21 Nov 2023"
  summaryStats: {
    label: string;
    value: string | number;
  }[];
  isDownloadable: boolean;
}
