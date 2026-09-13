export const TEACHER_MOCK_DATA = {
  stats: {
    assignedClasses: 4,
    assignedSubjects: 2, // Math, Physics
    pendingAttendance: 1, // 1 class left to mark today
    pendingMarksEntry: 2, // 2 upcoming exams to grade
    homeworkPendingReview: 45, // 45 student submissions to review
    activeAssignments: 3,
    leaveStatus: 'Approved (Next Week)'
  },
  todayTimetable: [
    { id: 1, period: '1st Period', time: '08:00 AM - 08:45 AM', class: 'Class 10 A', subject: 'Mathematics', type: 'Theory', completed: true },
    { id: 2, period: '2nd Period', time: '08:45 AM - 09:30 AM', class: 'Class 9 B', subject: 'Mathematics', type: 'Theory', completed: true },
    { id: 3, period: '3rd Period', time: '09:30 AM - 10:15 AM', class: 'Free', subject: '-', type: '-', completed: false },
    { id: 4, period: '4th Period', time: '10:30 AM - 11:15 AM', class: 'Class 11 Sci', subject: 'Physics', type: 'Lab', completed: false },
    { id: 5, period: '5th Period', time: '11:15 AM - 12:00 PM', class: 'Class 10 A', subject: 'Mathematics', type: 'Remedial', completed: false },
  ],
  upcomingExams: [
    { id: 1, name: 'Mid-Term Math', date: '2023-10-15', class: 'Class 10 A' },
    { id: 2, name: 'Physics Unit Test', date: '2023-10-18', class: 'Class 11 Sci' },
  ],
  notifications: [
    { id: 1, title: 'Staff Meeting at 2 PM', type: 'alert', time: '1 hour ago' },
    { id: 2, title: 'Exam duties assigned', type: 'info', time: '3 hours ago' },
  ],
  announcements: [
    { id: 1, title: 'Annual Day Preparations', desc: 'All teachers must submit student lists for cultural activities by Friday.' },
  ],
  assignedClasses: [
    { id: 1, name: 'Class 10 A', subject: 'Mathematics', strength: 40 },
    { id: 2, name: 'Class 9 B', subject: 'Mathematics', strength: 38 },
    { id: 3, name: 'Class 11 Sci', subject: 'Physics (Lab)', strength: 35 },
    { id: 4, name: 'Class 12 Sci', subject: 'Physics (Lab)', strength: 32 },
  ]
};
