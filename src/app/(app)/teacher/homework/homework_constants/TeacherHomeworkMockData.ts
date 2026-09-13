export const TEACHER_HOMEWORK_LIST = [
  {
    id: 'HW-001',
    title: 'Algebra Variables Worksheet',
    subject: 'Mathematics',
    class: 'Class 10 A',
    description: 'Please complete all 20 questions in the attached worksheet. Show all steps.',
    attachment: 'algebra_ws_1.pdf',
    dueDate: '2023-10-20',
    isPublished: true,
    stats: {
      total: 40,
      completed: 35,
      pending: 5
    }
  },
  {
    id: 'HW-002',
    title: 'Physics Lab Report - Pendulum',
    subject: 'Physics',
    class: 'Class 11 Sci',
    description: 'Submit your observations and graphs from yesterday\'s pendulum experiment.',
    attachment: null,
    dueDate: '2023-10-22',
    isPublished: true,
    stats: {
      total: 35,
      completed: 10,
      pending: 25
    }
  },
  {
    id: 'HW-003',
    title: 'Trigonometry Basics',
    subject: 'Mathematics',
    class: 'Class 9 B',
    description: 'Read chapter 5 and solve exercises 5.1 to 5.3.',
    attachment: null,
    dueDate: '2023-10-25',
    isPublished: false, // Draft
    stats: {
      total: 38,
      completed: 0,
      pending: 38
    }
  }
];

export const TEACHER_SUBMISSIONS_MOCK = {
  completed: [
    { studentId: 'STU-01', name: 'Aarav Sharma', rollNo: 1, submittedOn: '2023-10-18 14:30', grade: 'A' },
    { studentId: 'STU-02', name: 'Aditi Verma', rollNo: 2, submittedOn: '2023-10-18 16:45', grade: 'A+' },
    { studentId: 'STU-04', name: 'Neha Gupta', rollNo: 4, submittedOn: '2023-10-19 09:15', grade: 'Pending Review' },
  ],
  pending: [
    { studentId: 'STU-03', name: 'Kabir Das', rollNo: 3, status: 'Not Viewed' },
    { studentId: 'STU-05', name: 'Rahul Singh', rollNo: 5, status: 'Viewed' },
  ]
};
