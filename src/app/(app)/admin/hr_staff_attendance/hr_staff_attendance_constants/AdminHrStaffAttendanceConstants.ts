import type { DailyAttendanceRecord, MonthlyAttendanceRecord, AttendanceStatus } from "../hr_staff_attendance_types/AdminHrStaffAttendanceTypes";

export const MOCK_DAILY_ATTENDANCE: DailyAttendanceRecord[] = [
  { employeeId: "EMP-001", name: "Amit Kumar", department: "Mathematics", designation: "Senior Teacher", status: "Present", inTime: "07:50 AM", isBiometric: true, approvalStatus: "Auto-Approved" },
  { employeeId: "EMP-002", name: "Priya Sharma", department: "Science", designation: "Teacher", status: "Late", inTime: "08:15 AM", isBiometric: true, approvalStatus: "Pending" },
  { employeeId: "EMP-003", name: "Rajesh Singh", department: "Administration", designation: "Admin Officer", status: "Absent", isBiometric: false, approvalStatus: "Pending" },
  { employeeId: "EMP-004", name: "Neha Gupta", department: "English", designation: "Teacher", status: "Half Day", inTime: "08:00 AM", outTime: "12:00 PM", isBiometric: true, approvalStatus: "Approved" },
  { employeeId: "EMP-005", name: "Suresh Patel", department: "Support", designation: "Janitor", status: "Leave", isBiometric: false, approvalStatus: "Approved" },
  { employeeId: "EMP-006", name: "Kiran Rao", department: "Science", designation: "Lab Assistant", status: "None", isBiometric: false, approvalStatus: "Pending" },
];

const generateMockMonthDays = (baseStatus: AttendanceStatus): { [day: number]: AttendanceStatus } => {
  const days: { [day: number]: AttendanceStatus } = {};
  for (let i = 1; i <= 30; i++) {
    if (i % 7 === 0 || i % 7 === 6) { // Weekends
      days[i] = "None"; 
    } else if (i === 12) {
      days[i] = "Late";
    } else if (i === 15) {
      days[i] = "Absent";
    } else {
      days[i] = baseStatus;
    }
  }
  return days;
};

export const MOCK_MONTHLY_ATTENDANCE: MonthlyAttendanceRecord[] = [
  { 
    employeeId: "EMP-001", name: "Amit Kumar", department: "Mathematics", 
    totalPresent: 20, totalAbsent: 1, totalLate: 1, totalHalfDay: 0, totalLeave: 0,
    days: generateMockMonthDays("Present") 
  },
  { 
    employeeId: "EMP-002", name: "Priya Sharma", department: "Science", 
    totalPresent: 18, totalAbsent: 1, totalLate: 3, totalHalfDay: 0, totalLeave: 0,
    days: generateMockMonthDays("Present") 
  },
  { 
    employeeId: "EMP-003", name: "Rajesh Singh", department: "Administration", 
    totalPresent: 10, totalAbsent: 2, totalLate: 0, totalHalfDay: 0, totalLeave: 10,
    days: generateMockMonthDays("Leave") 
  },
];
