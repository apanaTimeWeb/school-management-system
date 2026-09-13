import { 
  PrincipalDashboardKPIs,
  AbsenteeRecord,
  FeeCollectionData,
  AcademicPerformanceData,
  UpcomingExam,
  UpcomingEvent,
  LeaveRequest,
  DisciplineAlert,
  ImportantNotice,
  RecentActivity
} from '../dashboard_types/PrincipalDashboard.types';

export const PRINCIPAL_DASHBOARD_MOCK_KPIS: PrincipalDashboardKPIs = {
  totalStudents: 1254,
  totalStudentsTrend: '+12 vs last month',
  totalStaff: 112,
  totalStaffTrend: '+2 vs last month',
  todaysAttendance: 94.5,
  attendanceTrend: '-1.2% vs yesterday',
  newAdmissions: 28,
  newAdmissionsTrend: '+5 vs last month',
  pendingApprovals: 15,
};

export const PRINCIPAL_DASHBOARD_MOCK_ABSENTEES: AbsenteeRecord[] = [
  { id: '1', name: 'Aarav Sharma', role: 'student', departmentOrClass: 'Class 10-A', reason: 'Fever', status: 'pending' },
  { id: '2', name: 'Riya Gupta', role: 'student', departmentOrClass: 'Class 8-C', reason: 'Family Event', status: 'approved' },
  { id: '3', name: 'Mr. Rajesh Kumar', role: 'staff', departmentOrClass: 'Mathematics', reason: 'Personal', status: 'approved' },
  { id: '4', name: 'Ms. Anita Desai', role: 'staff', departmentOrClass: 'Science', reason: 'Sick Leave', status: 'pending' },
];

export const PRINCIPAL_DASHBOARD_MOCK_FEE_COLLECTION: FeeCollectionData[] = [
  { month: 'Apr', collected: 1500000, pending: 200000 },
  { month: 'May', collected: 1200000, pending: 300000 },
  { month: 'Jun', collected: 1600000, pending: 150000 },
  { month: 'Jul', collected: 1800000, pending: 100000 },
  { month: 'Aug', collected: 1400000, pending: 250000 },
  { month: 'Sep', collected: 900000, pending: 800000 },
];

export const PRINCIPAL_DASHBOARD_MOCK_ACADEMICS: AcademicPerformanceData[] = [
  { subject: 'Mathematics', averageScore: 78 },
  { subject: 'Science', averageScore: 82 },
  { subject: 'English', averageScore: 85 },
  { subject: 'Hindi', averageScore: 88 },
  { subject: 'Social Science', averageScore: 75 },
];

export const PRINCIPAL_DASHBOARD_MOCK_EXAMS: UpcomingExam[] = [
  { id: 'e1', name: 'Mid-Term Examination', date: '2023-10-15', classes: 'VI to XII' },
  { id: 'e2', name: 'Unit Test 2', date: '2023-11-05', classes: 'I to V' },
];

export const PRINCIPAL_DASHBOARD_MOCK_EVENTS: UpcomingEvent[] = [
  { id: 'ev1', title: 'Annual Sports Day', date: '2023-10-20', time: '09:00 AM', location: 'School Ground' },
  { id: 'ev2', title: 'Science Exhibition', date: '2023-11-10', time: '10:00 AM', location: 'Auditorium' },
];

export const PRINCIPAL_DASHBOARD_MOCK_LEAVES: LeaveRequest[] = [
  { id: 'l1', requesterName: 'Mrs. Sunita Verma', role: 'staff', dateRange: 'Oct 12 - Oct 14', reason: 'Medical' },
  { id: 'l2', requesterName: 'Rohan Mehta', role: 'student', dateRange: 'Oct 05 - Oct 07', reason: 'Out of station' },
];

export const PRINCIPAL_DASHBOARD_MOCK_ALERTS: DisciplineAlert[] = [
  { id: 'd1', studentName: 'Vikram Singh', class: '11-B', incident: 'Bunking Classes', date: '2023-10-01', severity: 'medium' },
  { id: 'd2', studentName: 'Neha Sharma', class: '9-A', incident: 'Disrespectful Behavior', date: '2023-10-02', severity: 'low' },
];

export const PRINCIPAL_DASHBOARD_MOCK_NOTICES: ImportantNotice[] = [
  { id: 'n1', title: 'Change in School Timings for Winter', date: '2023-10-05', priority: 'high' },
  { id: 'n2', title: 'Staff Meeting regarding Sports Day', date: '2023-10-06', priority: 'normal' },
];

export const PRINCIPAL_DASHBOARD_MOCK_ACTIVITIES: RecentActivity[] = [
  { id: 'a1', description: 'New admission approved for Class 5', time: '10:30 AM', type: 'admission' },
  { id: 'a2', description: 'Fee collection of ₹50,000 processed', time: '11:15 AM', type: 'fee' },
  { id: 'a3', description: 'Staff attendance marked (98% present)', time: '08:30 AM', type: 'attendance' },
  { id: 'a4', description: 'Notice sent to all parents regarding PTM', time: 'Yesterday', type: 'general' },
];
