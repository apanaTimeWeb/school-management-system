export const TEACHER_TIMETABLE_NOTIFICATIONS = [
  { id: 1, text: "You have been assigned a Substitute Period for Class 9B (3rd Period).", type: "warning" },
  { id: 2, text: "Tomorrow's 1st period will be shifted to the Physics Lab.", type: "info" }
];

export const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const PERIOD_TIMES = [
  { num: 1, time: '08:00 AM - 08:45 AM' },
  { num: 2, time: '08:45 AM - 09:30 AM' },
  { num: 3, time: '09:30 AM - 10:15 AM' },
  { num: 4, time: '10:30 AM - 11:15 AM' }, // After break
  { num: 5, time: '11:15 AM - 12:00 PM' },
  { num: 6, time: '12:00 PM - 12:45 PM' },
];

export const TEACHER_WEEKLY_TIMETABLE: any[] = [
  { id: '1-1', day: 'Monday', periodNumber: 1, time: '08:00 AM - 08:45 AM', subject: 'Mathematics', class: 'Class 10 A', room: 'Room 201', type: 'regular' },
  { id: '1-2', day: 'Monday', periodNumber: 2, time: '08:45 AM - 09:30 AM', subject: 'Mathematics', class: 'Class 9 B', room: 'Room 204', type: 'regular' },
  { id: '1-3', day: 'Monday', periodNumber: 3, time: '09:30 AM - 10:15 AM', subject: 'English (Sub)', class: 'Class 9 B', room: 'Room 204', type: 'substitute', originalTeacher: 'Ms. Kavita', notes: 'Please take revision test.' },
  { id: '1-4', day: 'Monday', periodNumber: 4, time: '10:30 AM - 11:15 AM', subject: 'Physics', class: 'Class 11 Sci', room: 'Physics Lab', type: 'lab' },
  { id: '1-5', day: 'Monday', periodNumber: 5, time: '11:15 AM - 12:00 PM', subject: 'Free', class: '-', room: 'Staff Room', type: 'free' },
  { id: '1-6', day: 'Monday', periodNumber: 6, time: '12:00 PM - 12:45 PM', subject: 'Mathematics', class: 'Class 12 Sci', room: 'Room 302', type: 'regular' },

  { id: '2-1', day: 'Tuesday', periodNumber: 1, time: '08:00 AM - 08:45 AM', subject: 'Free', class: '-', room: 'Staff Room', type: 'free' },
  { id: '2-2', day: 'Tuesday', periodNumber: 2, time: '08:45 AM - 09:30 AM', subject: 'Mathematics', class: 'Class 10 A', room: 'Room 201', type: 'regular' },
  { id: '2-3', day: 'Tuesday', periodNumber: 3, time: '09:30 AM - 10:15 AM', subject: 'Physics', class: 'Class 11 Sci', room: 'Physics Lab', type: 'lab' },
  { id: '2-4', day: 'Tuesday', periodNumber: 4, time: '10:30 AM - 11:15 AM', subject: 'Mathematics', class: 'Class 9 B', room: 'Room 204', type: 'regular' },
  { id: '2-5', day: 'Tuesday', periodNumber: 5, time: '11:15 AM - 12:00 PM', subject: 'Mathematics', class: 'Class 12 Sci', room: 'Room 302', type: 'regular' },
  { id: '2-6', day: 'Tuesday', periodNumber: 6, time: '12:00 PM - 12:45 PM', subject: 'Free', class: '-', room: 'Staff Room', type: 'free' },
  
  // Generating sparse data for rest of week to avoid clutter, will use free periods as filler
];

// Fill rest of the week with some dummy data
WEEK_DAYS.slice(2).forEach((day, dayIndex) => {
  PERIOD_TIMES.forEach(pt => {
    TEACHER_WEEKLY_TIMETABLE.push({
      id: `${dayIndex+3}-${pt.num}`, day, periodNumber: pt.num, time: pt.time,
      subject: pt.num % 2 === 0 ? 'Mathematics' : 'Free',
      class: pt.num % 2 === 0 ? 'Class 10 A' : '-',
      room: pt.num % 2 === 0 ? 'Room 201' : 'Staff Room',
      type: pt.num % 2 === 0 ? 'regular' : 'free'
    });
  });
});
