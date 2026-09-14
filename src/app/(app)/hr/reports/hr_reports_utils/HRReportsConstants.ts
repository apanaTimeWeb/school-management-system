import { HRReportRecord } from '../hr_reports_types/HRReportsTypes';

export const MOCK_HR_REPORTS: HRReportRecord[] = [
  {
    id: "REP-001",
    reportName: "Monthly Attendance Summary - September 2026",
    category: "Attendance",
    generatedBy: "System",
    date: "2026-10-01",
    format: "PDF",
    status: "Ready"
  },
  {
    id: "REP-002",
    reportName: "Q3 Performance Evaluation Ratings",
    category: "Performance",
    generatedBy: "Neha K.",
    date: "2026-09-30",
    format: "Excel",
    status: "Generating"
  },
  {
    id: "REP-003",
    reportName: "New Hires Onboarding Status",
    category: "Recruitment",
    generatedBy: "HR Assistant",
    date: "2026-09-15",
    format: "CSV",
    status: "Ready"
  },
  {
    id: "REP-004",
    reportName: "Payroll Discrepancy Report",
    category: "Payroll",
    generatedBy: "System",
    date: "2026-09-28",
    format: "Excel",
    status: "Failed"
  }
];
