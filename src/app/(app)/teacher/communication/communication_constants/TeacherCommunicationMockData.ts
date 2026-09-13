export const TEACHER_ADMIN_LIST = [
  { id: 'ADM-1', name: 'Principal Desk', role: 'Principal' },
  { id: 'ADM-2', name: 'IT Admin', role: 'System Admin' },
];

export const TEACHER_PARENTS_LIST = [
  { id: 'PAR-1', studentId: 'STU-01', studentName: 'Aarav Sharma', parentName: 'Mr. Ramesh Sharma', class: 'Class 10 A', isApproved: true },
  { id: 'PAR-2', studentId: 'STU-02', studentName: 'Aditi Verma', parentName: 'Mrs. Sunita Verma', class: 'Class 10 A', isApproved: false },
  { id: 'PAR-3', studentId: 'STU-03', studentName: 'Kabir Das', parentName: 'Mr. Anil Das', class: 'Class 11 Sci', isApproved: true },
  { id: 'PAR-4', studentId: 'STU-04', studentName: 'Neha Gupta', parentName: 'Mr. Sanjay Gupta', class: 'Class 9 B', isApproved: true },
  { id: 'PAR-5', studentId: 'STU-05', studentName: 'Rahul Singh', parentName: 'Mrs. Meena Singh', class: 'Class 10 A', isApproved: false },
];

export const TEACHER_STUDENT_GROUPS = [
  { id: 'GRP-1', name: 'Class 10 A - Mathematics', type: 'Read-only Broadcast' },
  { id: 'GRP-2', name: 'Class 9 B - Science', type: 'Read-only Broadcast' },
];

export const TEACHER_CHAT_MESSAGES = [
  { id: 'MSG-1', sender: 'Teacher', text: 'Hello, this is a test message.', timestamp: '10:00 AM, Today' },
  { id: 'MSG-2', sender: 'Other', text: 'Got it, thank you.', timestamp: '10:15 AM, Today' },
];

export const TEACHER_ANNOUNCEMENTS = [
  { id: 'ANN-1', title: 'Extra Class for Physics', targetClass: 'Class 11 Sci', date: '2023-11-20', description: 'There will be an extra class on Friday to cover Thermodynamics.' },
  { id: 'ANN-2', title: 'Math Notebook Submission', targetClass: 'Class 10 A', date: '2023-11-18', description: 'All students must submit their Math fair notebooks on Monday.' },
];
