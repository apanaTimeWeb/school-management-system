import type { StudentDashboardData } from "../student_dashboard_types/student_dashboard_types";

export const MOCK_STUDENT_DASHBOARD_DATA: StudentDashboardData = {
  profile: {
    id: "STU-2024-001",
    name: "Aarav Sharma",
    class: "10th",
    section: "A",
    rollNo: "14",
    avatarUrl: "",
    academicYear: "2024-25"
  },
  kpis: {
    attendancePercentage: 88.5,
    totalPresent: 145,
    totalWorkingDays: 164,
    feeDueAmount: 5400,
    feeDueDate: "2024-08-10"
  },
  todayClasses: [
    { id: "c1", subject: "Mathematics", teacher: "Mr. R.K. Singh", startTime: "08:00 AM", endTime: "08:45 AM", room: "Room 101", status: 'completed' },
    { id: "c2", subject: "Physics", teacher: "Mrs. N. Patel", startTime: "08:45 AM", endTime: "09:30 AM", room: "Lab 2", status: 'completed' },
    { id: "c3", subject: "English", teacher: "Ms. S. Gupta", startTime: "09:45 AM", endTime: "10:30 AM", room: "Room 101", status: 'ongoing' },
    { id: "c4", subject: "Chemistry", teacher: "Mr. V. Kumar", startTime: "10:30 AM", endTime: "11:15 AM", room: "Lab 1", status: 'upcoming' },
  ],
  pendingTasks: [
    { id: "t1", type: "homework", subject: "Mathematics", title: "Algebra Ex 4.2", dueDate: "Tomorrow, 08:00 AM", status: "pending" },
    { id: "t2", type: "assignment", subject: "Physics", title: "Thermodynamics Lab Report", dueDate: "Aug 15, 2024", status: "pending" },
  ],
  upcomingExams: [
    { id: "e1", title: "Half-Yearly: Mathematics", date: "Aug 20, 2024", daysLeft: 5 },
    { id: "e2", title: "Half-Yearly: Physics", date: "Aug 22, 2024", daysLeft: 7 },
  ],
  recentResults: [
    { id: "r1", examName: "Unit Test 1", subject: "Mathematics", marksObtained: 45, totalMarks: 50, grade: "A" },
    { id: "r2", examName: "Unit Test 1", subject: "Physics", marksObtained: 42, totalMarks: 50, grade: "A" },
  ],
  updates: [
    { id: "u1", type: "notice", title: "School closed on Aug 15 for Independence Day", date: "2 hours ago", isUnread: true, priority: "normal" },
    { id: "u2", type: "announcement", title: "Fee submission deadline extended to Aug 12", date: "Yesterday", isUnread: false, priority: "high" },
    { id: "u3", type: "event", title: "Annual Science Exhibition", date: "Aug 25, 2024", isUnread: true, priority: "normal" },
    { id: "u4", type: "notification", title: "Physics assignment graded", date: "2 days ago", isUnread: false, priority: "normal" }
  ]
};
