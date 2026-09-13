export const TEACHER_ASSIGNED_STUDENTS = [
  { id: 'STU-10A-01', rollNo: 1, name: 'Aarav Sharma', class: '10 A', gender: 'Male', status: 'Active', attendance: 98, avgMarks: 88, parentName: 'Rajesh Sharma', parentContact: '9876543210' },
  { id: 'STU-10A-02', rollNo: 2, name: 'Aditi Verma', class: '10 A', gender: 'Female', status: 'Active', attendance: 92, avgMarks: 91, parentName: 'Sanjay Verma', parentContact: '9876543211' },
  { id: 'STU-9B-01', rollNo: 1, name: 'Rohan Singh', class: '9 B', gender: 'Male', status: 'Active', attendance: 85, avgMarks: 76, parentName: 'Rakesh Singh', parentContact: '9876543220' },
  { id: 'STU-11S-01', rollNo: 1, name: 'Vikram Joshi', class: '11 Sci', gender: 'Male', status: 'Active', attendance: 99, avgMarks: 95, parentName: 'Anil Joshi', parentContact: '9876543230' },
  { id: 'STU-10A-03', rollNo: 3, name: 'Sneha Patel', class: '10 A', gender: 'Female', status: 'Active', attendance: 78, avgMarks: 65, parentName: 'Mahesh Patel', parentContact: '9876543214' },
];

export const TEACHER_ADVANCED_STUDENT_MOCK = {
  profile: {
    dob: '15-May-2007',
    bloodGroup: 'O+',
    address: '123 Palm Grove, Sector 4, Mumbai',
    email: 'student@example.com',
    history: 'Joined in Grade 6. No major disciplinary issues. Consistent performer.'
  },
  academicPerformance: [
    { exam: 'Term 1', math: 85, physics: 88, chemistry: 79, english: 92 },
    { exam: 'Unit Test 2', math: 90, physics: 85, chemistry: 82, english: 88 },
  ],
  attendance: {
    totalDays: 120, present: 110, absent: 8, late: 2,
    recentAbsences: ['2023-10-12', '2023-10-13']
  },
  assignments: [
    { title: 'Algebra Worksheet', subject: 'Math', status: 'Submitted', grade: 'A' },
    { title: 'Physics Lab Report', subject: 'Physics', status: 'Pending', grade: '-' },
    { title: 'Geometry Project', subject: 'Math', status: 'Late Submission', grade: 'B' },
  ],
  behaviour: [
    { date: '2023-09-15', incident: 'Disrupted class', action: 'Warning issued', severity: 'Low' },
    { date: '2023-08-20', incident: 'Helped organize science fair', action: 'Appreciation noted', severity: 'Positive' },
  ]
};
