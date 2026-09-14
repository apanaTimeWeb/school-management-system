export type HRReportRecord = {
  id: string;
  reportName: string;
  category: 'Attendance' | 'Payroll' | 'Performance' | 'Recruitment' | 'General';
  generatedBy: string;
  date: string;
  format: 'PDF' | 'Excel' | 'CSV';
  status: 'Ready' | 'Generating' | 'Failed';
};
