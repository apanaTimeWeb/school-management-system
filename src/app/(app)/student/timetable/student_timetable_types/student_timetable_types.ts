export interface TimetablePeriod {
  id: string;
  periodNumber: number | string; // e.g. 1, 2, "Break"
  startTime: string;
  endTime: string;
  type: 'class' | 'break' | 'lab';
  subject?: string;
  teacher?: string;
  room?: string;
  isSubstitute?: boolean;
  substituteTeacherName?: string;
}

export interface DailyTimetable {
  dayName: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  date?: string;
  periods: TimetablePeriod[];
}

export interface TimetableUpdate {
  id: string;
  date: string;
  message: string;
  type: 'substitute' | 'cancellation' | 'room_change';
}

export interface StudentTimetableData {
  weeklySchedule: DailyTimetable[];
  updates: TimetableUpdate[];
}
