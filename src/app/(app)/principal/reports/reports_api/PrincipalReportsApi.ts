import { PrincipalReportConfig, PrincipalGeneratedReport } from '../reports_types/PrincipalReports.types';
import { PRINCIPAL_REPORT_CATEGORIES, generateMockReportData } from '../reports_constants/PrincipalReportsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchReportCategories = async (): Promise<PrincipalReportConfig[]> => {
  await delay(300);
  return [...PRINCIPAL_REPORT_CATEGORIES];
};

export const fetchGeneratedReport = async (category: string, dateRange: string): Promise<PrincipalGeneratedReport> => {
  await delay(1200); // Simulate heavy generation
  return generateMockReportData(category);
};

export const exportReportFile = async (type: 'PDF' | 'EXCEL'): Promise<boolean> => {
  await delay(2000); // Simulate export
  return true;
};
