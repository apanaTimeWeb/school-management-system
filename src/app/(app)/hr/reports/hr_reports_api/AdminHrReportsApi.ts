import type { GeneratedReportRow, GenerateReportParams, ReportResponse } from '../hr_reports_types/AdminHrReportsTypes';

export async function generateReportData(params: GenerateReportParams): Promise<ReportResponse<GeneratedReportRow[]>> {
  await new Promise(resolve => setTimeout(resolve, 800)); // Simulate slow report generation
  
  // Create mock columns based on report ID to make it look realistic
  let cols = ["EMP ID", "Name", "Department", "Date", "Status"];
  if (params.reportId === 'rep-13') {
    cols = ["EMP ID", "Name", "Basic Salary", "Deductions", "Net Pay"];
  } else if (params.reportId === 'rep-10') {
    cols = ["EMP ID", "Name", "Document Type", "Expiry Date", "Days Left"];
  } else if (params.reportId === 'rep-05') {
    cols = ["EMP ID", "Name", "Total Present", "Total Absent", "Late Marks"];
  }

  // Generate 5 mock rows
  const mockData: GeneratedReportRow[] = Array.from({ length: 5 }).map((_, i) => ({
    id: `row-${i}`,
    col1: `EMP-00${i+1}`,
    col2: ["Amit Kumar", "Neha Sharma", "Rahul Verma", "Sunita Rao", "Vikas Singh"][i],
    col3: ["Science", "Admin", "Sports", "Library", "Security"][i],
    col4: params.filters.fromDate || "2024-10-01",
    col5: ["Active", "Pending", "Completed", "Expired", "Approved"][i % 5],
  }));

  return { success: true, columns: cols, data: mockData };
}
