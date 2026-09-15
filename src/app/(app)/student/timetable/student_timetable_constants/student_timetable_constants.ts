import type { StudentTimetableData, DailyTimetable, TimetablePeriod } from '../student_timetable_types/student_timetable_types';

const COMMON_BREAK: TimetablePeriod = {
  id: "break_1",
  periodNumber: "Lunch",
  startTime: "11:15 AM",
  endTime: "11:45 AM",
  type: "break",
};

const mondayPeriods: TimetablePeriod[] = [
  { id: "p1", periodNumber: 1, startTime: "08:00 AM", endTime: "08:45 AM", type: "class", subject: "Mathematics", teacher: "Mr. R.K. Singh", room: "Room 101" },
  { id: "p2", periodNumber: 2, startTime: "08:45 AM", endTime: "09:30 AM", type: "class", subject: "Physics", teacher: "Mrs. N. Patel", room: "Lab 2" },
  { id: "p3", periodNumber: 3, startTime: "09:30 AM", endTime: "10:15 AM", type: "class", subject: "English", teacher: "Ms. S. Gupta", room: "Room 101" },
  { id: "p4", periodNumber: 4, startTime: "10:30 AM", endTime: "11:15 AM", type: "class", subject: "Chemistry", teacher: "Mr. V. Kumar", room: "Lab 1", isSubstitute: true, substituteTeacherName: "Mr. A. Sharma" },
  COMMON_BREAK,
  { id: "p5", periodNumber: 5, startTime: "11:45 AM", endTime: "12:30 PM", type: "class", subject: "Social Science", teacher: "Mrs. K. Reddy", room: "Room 101" },
  { id: "p6", periodNumber: 6, startTime: "12:30 PM", endTime: "01:15 PM", type: "lab", subject: "Computer Science", teacher: "Mr. D. Joshi", room: "Computer Lab 1" },
];

export const MOCK_TIMETABLE_DATA: StudentTimetableData = {
  weeklySchedule: [
    { dayName: "Monday", date: "Aug 12", periods: mondayPeriods },
    { dayName: "Tuesday", date: "Aug 13", periods: mondayPeriods }, // Reusing for mock simplicity
    { dayName: "Wednesday", date: "Aug 14", periods: mondayPeriods },
    { dayName: "Thursday", date: "Aug 15", periods: mondayPeriods },
    { dayName: "Friday", date: "Aug 16", periods: mondayPeriods },
    { dayName: "Saturday", date: "Aug 17", periods: mondayPeriods },
  ],
  updates: [
    { id: "upd1", date: "Today", message: "Mr. V. Kumar is on leave. Chemistry will be taken by Mr. A. Sharma.", type: "substitute" },
    { id: "upd2", date: "Tomorrow", message: "PT period changed to Room 104.", type: "room_change" },
  ]
};
