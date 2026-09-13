export const TEACHER_RESULTS_CLASSES = [
  {
    id: 'RES-001',
    className: 'Class 10 A',
    subject: 'Mathematics',
    examName: 'Mid-Term Examination 2023',
    totalStudents: 45,
    passedStudents: 40,
    highestPercentage: 98,
    averagePercentage: 75,
    isPublished: true
  },
  {
    id: 'RES-002',
    className: 'Class 11 Sci',
    subject: 'Physics',
    examName: 'Unit Test I',
    totalStudents: 40,
    passedStudents: 38,
    highestPercentage: 95,
    averagePercentage: 82,
    isPublished: true
  },
  {
    id: 'RES-003',
    className: 'Class 9 B',
    subject: 'Chemistry',
    examName: 'Half Yearly Examination',
    totalStudents: 50,
    passedStudents: 42,
    highestPercentage: 92,
    averagePercentage: 68,
    isPublished: false
  }
];

export const TEACHER_STUDENT_RESULTS_MOCK = [
  {
    id: 'STU-01',
    rollNo: 1,
    name: 'Aarav Sharma',
    marksObtained: 85,
    totalMarks: 100,
    percentage: 85,
    grade: 'A',
    remarks: 'Excellent performance. Keep it up!',
    history: [
      { exam: 'Unit Test 1', percentage: 78 },
      { exam: 'Mid-Term', percentage: 85 }
    ]
  },
  {
    id: 'STU-02',
    rollNo: 2,
    name: 'Aditi Verma',
    marksObtained: 92,
    totalMarks: 100,
    percentage: 92,
    grade: 'A+',
    remarks: 'Outstanding! Needs to focus a bit on calculus.',
    history: [
      { exam: 'Unit Test 1', percentage: 90 },
      { exam: 'Mid-Term', percentage: 92 }
    ]
  },
  {
    id: 'STU-03',
    rollNo: 3,
    name: 'Kabir Das',
    marksObtained: 45,
    totalMarks: 100,
    percentage: 45,
    grade: 'C',
    remarks: 'Needs improvement. Recommend extra classes.',
    history: [
      { exam: 'Unit Test 1', percentage: 40 },
      { exam: 'Mid-Term', percentage: 45 }
    ]
  },
  {
    id: 'STU-04',
    rollNo: 4,
    name: 'Neha Gupta',
    marksObtained: 78,
    totalMarks: 100,
    percentage: 78,
    grade: 'B+',
    remarks: 'Good progress.',
    history: [
      { exam: 'Unit Test 1', percentage: 70 },
      { exam: 'Mid-Term', percentage: 78 }
    ]
  },
  {
    id: 'STU-05',
    rollNo: 5,
    name: 'Rahul Singh',
    marksObtained: 30,
    totalMarks: 100,
    percentage: 30,
    grade: 'Fail',
    remarks: 'Failed. Needs urgent parent-teacher meeting.',
    history: [
      { exam: 'Unit Test 1', percentage: 35 },
      { exam: 'Mid-Term', percentage: 30 }
    ]
  }
];
