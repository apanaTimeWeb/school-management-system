import type { StudentAttendanceData } from '../student_attendance_types/student_attendance_types';

export const MOCK_ATTENDANCE_DATA: StudentAttendanceData = {
  overallPercentage: 74.5, // Intentionally low to trigger the "Low Attendance Alert"
  totalWorkingDays: 120,
  totalPresent: 82,
  totalAbsent: 15,
  totalLate: 13,
  totalLeave: 10,
  isLowAttendance: true, // Assuming threshold is 75%
  
  calendarRecords: [
    { id: "d1", date: "2024-08-01", status: "Present" },
    { id: "d2", date: "2024-08-02", status: "Present" },
    { id: "d3", date: "2024-08-03", status: "Absent", remarks: "Uninformed" },
    { id: "d4", date: "2024-08-04", status: "Holiday" },
    { id: "d5", date: "2024-08-05", status: "Late", remarks: "10 mins late" },
    { id: "d6", date: "2024-08-06", status: "Leave", remarks: "Medical" },
    { id: "d7", date: "2024-08-07", status: "Present" },
    { id: "d8", date: "2024-08-08", status: "Present" },
    { id: "d9", date: "2024-08-09", status: "Present" },
    { id: "d10", date: "2024-08-10", status: "Present" },
    { id: "d11", date: "2024-08-11", status: "Holiday" },
    { id: "d12", date: "2024-08-12", status: "Not_Marked" }, // Today, e.g.
  ],

  subjectWise: [
    { subjectId: "sub1", subjectName: "Mathematics", totalClasses: 45, attendedClasses: 35, percentage: 77.7 },
    { subjectId: "sub2", subjectName: "Physics", totalClasses: 40, attendedClasses: 28, percentage: 70.0 }, // Low
    { subjectId: "sub3", subjectName: "English", totalClasses: 30, attendedClasses: 29, percentage: 96.6 },
    { subjectId: "sub4", subjectName: "Chemistry", totalClasses: 35, attendedClasses: 22, percentage: 62.8 }, // Very Low
  ],

  history: [
    { month: "August 2024", totalWorkingDays: 10, present: 7, absent: 1, late: 1, leave: 1 },
    { month: "July 2024", totalWorkingDays: 22, present: 18, absent: 2, late: 0, leave: 2 },
    { month: "June 2024", totalWorkingDays: 20, present: 10, absent: 5, late: 5, leave: 0 },
    { month: "May 2024", totalWorkingDays: 15, present: 15, absent: 0, late: 0, leave: 0 },
  ]
};
