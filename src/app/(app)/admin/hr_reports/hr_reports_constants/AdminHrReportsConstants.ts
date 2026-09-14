import type { ReportDefinition } from "../hr_reports_types/AdminHrReportsTypes";

export const REPORT_DEFINITIONS: ReportDefinition[] = [
  // Demographics
  { id: "rep-01", title: "Employee Report", description: "Comprehensive list of all employees and their base details.", category: "Demographics" },
  { id: "rep-02", title: "Staff Strength", description: "Headcount summaries across branches and departments.", category: "Demographics" },
  { id: "rep-03", title: "Department Report", description: "Metrics grouped strictly by departments.", category: "Demographics" },
  { id: "rep-04", title: "Designation Report", description: "Staff distribution across various hierarchies and roles.", category: "Demographics" },
  { id: "rep-11", title: "Qualification Report", description: "Educational backgrounds and degrees of staff.", category: "Demographics" },
  { id: "rep-12", title: "Experience Report", description: "Total years of experience and past tenures.", category: "Demographics" },
  
  // Lifecycle
  { id: "rep-05", title: "Attendance Report", description: "Present, Absent, and Late records over time.", category: "Lifecycle" },
  { id: "rep-06", title: "Leave Report", description: "Approved, Rejected, and Pending leave applications.", category: "Lifecycle" },
  { id: "rep-07", title: "Recruitment Report", description: "Applicant pipeline and interview status.", category: "Lifecycle" },
  { id: "rep-08", title: "Joining Report", description: "New hires onboarded within the time frame.", category: "Lifecycle" },
  { id: "rep-09", title: "Exit Report", description: "Resignations, terminations, and clearance status.", category: "Lifecycle" },
  
  // Compliance
  { id: "rep-10", title: "Document Expiry Report", description: "Alerts for expiring IDs, contracts, and certifications.", category: "Compliance" },
  { id: "rep-15", title: "Asset Assignment Report", description: "Current holder and history of physical assets.", category: "Compliance" },

  // Performance & Pay
  { id: "rep-14", title: "Performance Report", description: "Appraisal ratings, goals, and feedback.", category: "Performance & Pay" },
  { id: "rep-13", title: "Payroll Report", description: "Salary disbursements, deductions, and tax summaries.", category: "Performance & Pay", isRestricted: true }
];
