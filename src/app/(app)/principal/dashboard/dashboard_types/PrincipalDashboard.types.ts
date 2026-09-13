export interface PrincipalDashboardKPIs {
  totalStudents: number;
  totalStudentsTrend: string;
  totalStaff: number;
  totalStaffTrend: string;
  todaysAttendance: number; // percentage
  attendanceTrend: string;
  newAdmissions: number;
  newAdmissionsTrend: string;
  pendingApprovals: number;
}

export interface AbsenteeRecord {
  id: string;
  name: string;
  role: 'student' | 'staff';
  departmentOrClass: string;
  reason: string;
  status: 'pending' | 'approved' | 'unexcused';
}

export interface FeeCollectionData {
  month: string;
  collected: number;
  pending: number;
}

export interface AcademicPerformanceData {
  subject: string;
  averageScore: number;
}

export interface UpcomingExam {
  id: string;
  name: string;
  date: string;
  classes: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

export interface LeaveRequest {
  id: string;
  requesterName: string;
  role: 'student' | 'staff';
  dateRange: string;
  reason: string;
}

export interface DisciplineAlert {
  id: string;
  studentName: string;
  class: string;
  incident: string;
  date: string;
  severity: 'low' | 'medium' | 'high';
}

export interface ImportantNotice {
  id: string;
  title: string;
  date: string;
  priority: 'normal' | 'high';
}

export interface RecentActivity {
  id: string;
  description: string;
  time: string;
  type: 'admission' | 'fee' | 'attendance' | 'general';
}
