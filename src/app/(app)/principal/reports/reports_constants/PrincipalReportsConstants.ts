import { PrincipalReportConfig, PrincipalGeneratedReport } from '../reports_types/PrincipalReports.types';

export const PRINCIPAL_REPORT_CATEGORIES: PrincipalReportConfig[] = [
  { id: 'rep-student', title: 'Student Reports', category: 'Student', description: 'Total strength, demographics, and class-wise lists.', iconName: 'Users', colorClass: 'text-primary' },
  { id: 'rep-attendance', title: 'Attendance Reports', category: 'Attendance', description: 'Daily/monthly attendance trends and defaulters.', iconName: 'CalendarCheck', colorClass: 'text-success' },
  { id: 'rep-academic', title: 'Academic Reports', category: 'Academic', description: 'Syllabus coverage and academic progress.', iconName: 'BookOpen', colorClass: 'text-info' },
  { id: 'rep-exam', title: 'Examination Reports', category: 'Examination', description: 'Exam schedules, seating, and invigilation.', iconName: 'FileText', colorClass: 'text-warning' },
  { id: 'rep-result', title: 'Result Reports', category: 'Result', description: 'Performance analysis, toppers, and pass percentage.', iconName: 'BarChart2', colorClass: 'text-success' },
  { id: 'rep-teacher', title: 'Teacher Reports', category: 'Teacher', description: 'Staff workload, performance, and feedback.', iconName: 'UserCheck', colorClass: 'text-primary' },
  { id: 'rep-admission', title: 'Admission Reports', category: 'Admission', description: 'New enrollments, withdrawals, and conversions.', iconName: 'UserPlus', colorClass: 'text-info' },
  { id: 'rep-fee', title: 'Fee Summary', category: 'Fee', description: 'Collection summary, outstanding dues, and discounts.', iconName: 'IndianRupee', colorClass: 'text-success' },
  { id: 'rep-discipline', title: 'Discipline Reports', category: 'Discipline', description: 'Disciplinary actions, warnings, and suspensions.', iconName: 'Scale', colorClass: 'text-danger' },
  { id: 'rep-event', title: 'Event Reports', category: 'Event', description: 'Event participation, budgets, and outcomes.', iconName: 'Ticket', colorClass: 'text-warning' },
  { id: 'rep-leave', title: 'Leave Reports', category: 'Leave', description: 'Staff and student leave history and balances.', iconName: 'CalendarOff', colorClass: 'text-danger' },
  { id: 'rep-library', title: 'Library Reports', category: 'Library', description: 'Book issuances, overdue fines, and inventory.', iconName: 'Library', colorClass: 'text-info' },
  { id: 'rep-transport', title: 'Transport Reports', category: 'Transport', description: 'Route utilization, vehicle status, and complaints.', iconName: 'Bus', colorClass: 'text-primary' },
  { id: 'rep-hostel', title: 'Hostel Reports', category: 'Hostel', description: 'Room occupancy, out-pass logs, and attendance.', iconName: 'Home', colorClass: 'text-warning' },
  { id: 'rep-custom', title: 'Custom Reports', category: 'Custom', description: 'Build a custom report using specific fields.', iconName: 'Settings', colorClass: 'text-text-secondary' },
];

export const generateMockReportData = (category: string): PrincipalGeneratedReport => {
  return {
    title: `${category} Report Data`,
    generatedAt: new Date().toLocaleString(),
    columns: [
      { key: 'col1', label: 'ID / Reference' },
      { key: 'col2', label: 'Name / Detail' },
      { key: 'col3', label: 'Date / Period' },
      { key: 'col4', label: 'Status / Metric' },
    ],
    data: Array.from({ length: 5 }).map((_, i) => ({
      id: `ROW-${i+100}`,
      col1: `REF-2023-${i+1}`,
      col2: `${category} Record Sample ${i+1}`,
      col3: `2023-11-0${i+1}`,
      col4: i % 2 === 0 ? 'Completed' : 'Pending',
    }))
  };
};
