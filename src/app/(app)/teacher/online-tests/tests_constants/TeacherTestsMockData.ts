export const TEACHER_ONLINE_TESTS = [
  {
    id: 'TEST-001',
    title: 'Algebra Quick Quiz',
    class: 'Class 10 A',
    subject: 'Mathematics',
    scheduleDate: '2023-11-15',
    scheduleTime: '10:00 AM',
    timeLimitMins: 30,
    totalMarks: 20,
    totalQuestions: 10,
    status: 'Upcoming'
  },
  {
    id: 'TEST-002',
    title: 'Laws of Motion - Concept Check',
    class: 'Class 11 Sci',
    subject: 'Physics',
    scheduleDate: '2023-11-14',
    scheduleTime: '11:00 AM',
    timeLimitMins: 45,
    totalMarks: 30,
    totalQuestions: 15,
    status: 'Active'
  },
  {
    id: 'TEST-003',
    title: 'Acids, Bases and Salts',
    class: 'Class 9 B',
    subject: 'Chemistry',
    scheduleDate: '2023-11-10',
    scheduleTime: '09:00 AM',
    timeLimitMins: 60,
    totalMarks: 50,
    totalQuestions: 25,
    status: 'Completed',
    attempts: 42,
    avgScore: 35
  },
  {
    id: 'TEST-004',
    title: 'Trigonometry Mega Quiz',
    class: 'Class 10 A',
    subject: 'Mathematics',
    scheduleDate: '',
    scheduleTime: '',
    timeLimitMins: 90,
    totalMarks: 100,
    totalQuestions: 50,
    status: 'Draft'
  }
];

export const TEST_STUDENT_ATTEMPTS = [
  { id: 'SA-1', studentName: 'Aarav Sharma', score: 45, timeTaken: '40 mins', status: 'Passed' },
  { id: 'SA-2', studentName: 'Aditi Verma', score: 48, timeTaken: '45 mins', status: 'Passed' },
  { id: 'SA-3', studentName: 'Kabir Das', score: 20, timeTaken: '30 mins', status: 'Failed' },
  { id: 'SA-4', studentName: 'Neha Gupta', score: 35, timeTaken: '50 mins', status: 'Passed' },
  { id: 'SA-5', studentName: 'Rahul Singh', score: 15, timeTaken: '20 mins', status: 'Failed' },
];
