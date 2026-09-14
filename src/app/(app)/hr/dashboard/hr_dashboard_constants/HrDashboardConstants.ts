import { HrDashboardStats } from "../hr_dashboard_types/HrDashboardTypes";

// Mock data until real API is integrated
export const MOCK_HR_DASHBOARD_STATS: HrDashboardStats = {
  totalEmployees: 145,
  activeStaff: 138,
  teachers: 85,
  nonTeachingStaff: 53,
  attendanceTodayPercent: 92.5,
  absentStaff: 4,
  onLeave: 6,
  newJoinings: 2,
  alerts: [
    { id: "1", type: "warning", message: "3 Teachers are on unapproved leave today." },
    { id: "2", type: "danger", message: "2 Staff documents expiring this week." }
  ],
  pendingDocuments: [
    { id: "d1", staffName: "Amit Kumar", description: "Aadhar Card missing", date: "Joined 2 days ago", status: "pending" },
    { id: "d2", staffName: "Priya Sharma", description: "Experience Certificate", date: "Joined 1 week ago", status: "pending" }
  ],
  expiringDocuments: [
    { id: "e1", staffName: "Rajesh Singh", description: "Police Verification", date: "Expires in 3 days", status: "expiring" }
  ],
  pendingLeaveRequests: [
    { id: "l1", staffName: "Sita Verma", description: "Sick Leave (2 days)", date: "Starts Tomorrow", status: "pending" },
    { id: "l2", staffName: "Karan Johar", description: "Casual Leave (1 day)", date: "Starts 15 Oct", status: "pending" }
  ],
  upcomingBirthdays: [
    { id: "b1", staffName: "Vikram Rathore", eventType: "birthday", date: "16 Oct" },
    { id: "b2", staffName: "Neha Gupta", eventType: "birthday", date: "18 Oct" }
  ],
  upcomingAnniversaries: [
    { id: "a1", staffName: "Arjun Reddy", eventType: "anniversary", date: "20 Oct", years: 3 }
  ]
};

