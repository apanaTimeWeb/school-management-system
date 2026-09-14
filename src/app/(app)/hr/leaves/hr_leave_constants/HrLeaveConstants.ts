import type { LeaveApplication, LeaveBalance, LeaveType, Holiday } from "../hr_leave_types/HrLeaveTypes";

export const MOCK_LEAVE_TYPES: LeaveType[] = [
  { id: "lt-1", name: "Casual Leave (CL)", totalDaysAllowed: 12, carryForward: false, description: "For personal reasons.", status: "Active" },
  { id: "lt-2", name: "Sick Leave (SL)", totalDaysAllowed: 10, carryForward: true, description: "For medical emergencies.", status: "Active" },
  { id: "lt-3", name: "Maternity Leave", totalDaysAllowed: 180, carryForward: false, description: "Paid maternity leave.", status: "Active" },
  { id: "lt-4", name: "Earned Leave (EL)", totalDaysAllowed: 15, carryForward: true, description: "Accumulated leaves.", status: "Active" },
];

export const MOCK_HOLIDAYS: Holiday[] = [
  { id: "h-1", name: "Republic Day", date: "2024-01-26", dayOfWeek: "Friday", type: "National" },
  { id: "h-2", name: "Holi", date: "2024-03-25", dayOfWeek: "Monday", type: "State" },
  { id: "h-3", name: "Independence Day", date: "2024-08-15", dayOfWeek: "Thursday", type: "National" },
  { id: "h-4", name: "Diwali", date: "2024-11-01", dayOfWeek: "Friday", type: "National" },
  { id: "h-5", name: "Christmas", date: "2024-12-25", dayOfWeek: "Wednesday", type: "National" },
];

export const MOCK_LEAVE_APPLICATIONS: LeaveApplication[] = [
  { id: "app-1", employeeId: "EMP-001", employeeName: "Amit Kumar", employeeType: "Teacher", department: "Mathematics", leaveType: "Casual Leave (CL)", startDate: "2024-05-10", endDate: "2024-05-11", days: 2, reason: "Attending a family function.", status: "Pending", appliedOn: "2024-05-01" },
  { id: "app-2", employeeId: "EMP-005", employeeName: "Suresh Patel", employeeType: "Staff", department: "Support", leaveType: "Sick Leave (SL)", startDate: "2024-05-15", endDate: "2024-05-17", days: 3, reason: "Severe viral fever.", status: "Approved", appliedOn: "2024-05-14", attachmentUrl: "#" },
  { id: "app-3", employeeId: "EMP-002", employeeName: "Priya Sharma", employeeType: "Teacher", department: "Science", leaveType: "Casual Leave (CL)", startDate: "2024-06-01", endDate: "2024-06-01", days: 1, reason: "Personal errand.", status: "Rejected", appliedOn: "2024-05-20" },
  { id: "app-4", employeeId: "EMP-008", employeeName: "Rohan Das", employeeType: "Staff", department: "Administration", leaveType: "Earned Leave (EL)", startDate: "2024-07-10", endDate: "2024-07-20", days: 10, reason: "Planned vacation trip.", status: "Pending", appliedOn: "2024-06-01" },
];

export const MOCK_LEAVE_BALANCES: LeaveBalance[] = [
  {
    employeeId: "EMP-001", employeeName: "Amit Kumar", employeeType: "Teacher", department: "Mathematics",
    balances: [
      { type: "Casual Leave (CL)", total: 12, used: 2, available: 10 },
      { type: "Sick Leave (SL)", total: 10, used: 0, available: 10 },
      { type: "Earned Leave (EL)", total: 15, used: 5, available: 10 },
    ]
  },
  {
    employeeId: "EMP-005", employeeName: "Suresh Patel", employeeType: "Staff", department: "Support",
    balances: [
      { type: "Casual Leave (CL)", total: 12, used: 12, available: 0 },
      { type: "Sick Leave (SL)", total: 10, used: 5, available: 5 },
      { type: "Earned Leave (EL)", total: 15, used: 0, available: 15 },
    ]
  }
];

