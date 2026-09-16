export interface StudentProfile {
  id: string;
  name: string;
  class: string;
  section: string;
  rollNo: string;
  avatarUrl: string;
  academicYear: string;
}

export interface TimetableClass {
  id: string;
  subject: string;
  teacher: string;
  startTime: string;
  endTime: string;
  room: string;
  status: 'completed' | 'ongoing' | 'upcoming';
}

export interface DashboardKpi {
  attendancePercentage: number;
  totalPresent: number;
  totalWorkingDays: number;
  feeDueAmount: number;
  feeDueDate: string;
}

export interface AcademicTask {
  id: string;
  type: 'homework' | 'assignment';
  subject: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
}

export interface ExamInfo {
  id: string;
  title: string;
  subject: string;
  type: string;
  date: string;
  time: string;
  daysLeft: number;
}

export interface RecentResult {
  id: string;
  examName: string;
  subject: string;
  type: string;
  marksObtained: number;
  totalMarks: number;
  grade: string;
}

export interface DashboardUpdate {
  id: string;
  type: 'notice' | 'announcement' | 'event' | 'notification';
  title: string;
  date: string;
  isUnread: boolean;
  priority: 'normal' | 'high' | 'urgent';
}

export interface StudentDashboardData {
  profile: StudentProfile;
  kpis: DashboardKpi;
  todayClasses: TimetableClass[];
  pendingTasks: AcademicTask[];
  upcomingExams: ExamInfo[];
  recentResults: RecentResult[];
  updates: DashboardUpdate[];
}
