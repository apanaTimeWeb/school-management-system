export const TEACHER_CLASSES_LIST = [
  {
    id: 'CLS-10A-MATH',
    class: '10',
    section: 'A',
    subject: 'Mathematics',
    room: 'Room 201',
    strength: 40,
    attendanceToday: 95,
    avgPerformance: 82,
    students: [
      { id: 'STU-10A-01', rollNo: 1, name: 'Aarav Sharma', gender: 'Male', status: 'Active', attendance: 98, performance: 88, parentName: 'Rajesh Sharma', parentContact: '9876543210' },
      { id: 'STU-10A-02', rollNo: 2, name: 'Aditi Verma', gender: 'Female', status: 'Active', attendance: 92, performance: 91, parentName: 'Sanjay Verma', parentContact: '9876543211' },
      { id: 'STU-10A-03', rollNo: 3, name: 'Kabir Das', gender: 'Male', status: 'Active', attendance: 85, performance: 76, parentName: 'Amit Das', parentContact: '9876543212' },
      { id: 'STU-10A-04', rollNo: 4, name: 'Neha Gupta', gender: 'Female', status: 'Active', attendance: 100, performance: 95, parentName: 'Sunil Gupta', parentContact: '9876543213' },
    ]
  },
  {
    id: 'CLS-9B-MATH',
    class: '9',
    section: 'B',
    subject: 'Mathematics',
    room: 'Room 204',
    strength: 38,
    attendanceToday: 92,
    avgPerformance: 78,
    students: [
      { id: 'STU-9B-01', rollNo: 1, name: 'Rohan Singh', gender: 'Male', status: 'Active', attendance: 88, performance: 81, parentName: 'Rakesh Singh', parentContact: '9876543220' },
      { id: 'STU-9B-02', rollNo: 2, name: 'Sriya Patel', gender: 'Female', status: 'Active', attendance: 95, performance: 89, parentName: 'Mahesh Patel', parentContact: '9876543221' },
    ]
  },
  {
    id: 'CLS-11SCI-PHY',
    class: '11',
    section: 'Science',
    subject: 'Physics',
    room: 'Physics Lab',
    strength: 35,
    attendanceToday: 100,
    avgPerformance: 85,
    students: [
      { id: 'STU-11S-01', rollNo: 1, name: 'Vikram Joshi', gender: 'Male', status: 'Active', attendance: 99, performance: 92, parentName: 'Anil Joshi', parentContact: '9876543230' },
    ]
  },
];

export const TEACHER_STUDENT_PROFILE_MOCK = {
  profile: {
    dob: '15-May-2007',
    bloodGroup: 'O+',
    address: '123 Palm Grove, Sector 4, Mumbai',
    email: 'student@example.com',
    contact: '+91 98765 00000',
    admissionDate: '01-Apr-2021'
  },
  academicPerformance: [
    { exam: 'Term 1', math: 85, physics: 88, chemistry: 79, english: 92, status: 'Passed' },
    { exam: 'Unit Test 2', math: 90, physics: 85, chemistry: 82, english: 88, status: 'Passed' },
  ]
};
