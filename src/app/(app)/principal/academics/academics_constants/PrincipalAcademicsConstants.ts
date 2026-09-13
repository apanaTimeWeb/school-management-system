import { 
  PrincipalAcademicClass, 
  PrincipalAcademicSubject, 
  PrincipalSyllabusProgress, 
  PrincipalAcademicCalendarEvent 
} from '../academics_types/PrincipalAcademics.types';

export const PRINCIPAL_MOCK_CLASSES: PrincipalAcademicClass[] = [
  {
    id: 'CLS-10',
    className: 'Class 10',
    level: 'High',
    totalStudents: 120,
    hodName: 'Dr. R. Sharma (Sciences)',
    sections: [
      { id: 'SEC-10A', sectionName: 'A', classTeacher: 'Mr. Arvind Kumar', roomNo: '201', studentCount: 40, maxCapacity: 40 },
      { id: 'SEC-10B', sectionName: 'B', classTeacher: 'Ms. Sunita Rao', roomNo: '202', studentCount: 38, maxCapacity: 40 },
      { id: 'SEC-10C', sectionName: 'C', classTeacher: 'Mr. John Doe', roomNo: '203', studentCount: 42, maxCapacity: 40 },
    ]
  },
  {
    id: 'CLS-9',
    className: 'Class 9',
    level: 'High',
    totalStudents: 110,
    hodName: 'Dr. R. Sharma (Sciences)',
    sections: [
      { id: 'SEC-9A', sectionName: 'A', classTeacher: 'Ms. Rekha', roomNo: '101', studentCount: 35, maxCapacity: 40 },
      { id: 'SEC-9B', sectionName: 'B', classTeacher: 'Mr. Vikram', roomNo: '102', studentCount: 38, maxCapacity: 40 },
      { id: 'SEC-9C', sectionName: 'C', classTeacher: 'Mr. Salim', roomNo: '103', studentCount: 37, maxCapacity: 40 },
    ]
  }
];

export const PRINCIPAL_MOCK_SUBJECTS: PrincipalAcademicSubject[] = [
  { id: 'SUB-MATH', subjectName: 'Mathematics', department: 'Math', classesTaught: ['Class 9', 'Class 10', 'Class 11', 'Class 12'], hodAssigned: 'Mr. V. Raman', totalTeachers: 8 },
  { id: 'SUB-SCI', subjectName: 'Science', department: 'Science', classesTaught: ['Class 9', 'Class 10'], hodAssigned: 'Dr. R. Sharma', totalTeachers: 6 },
  { id: 'SUB-ENG', subjectName: 'English', department: 'Languages', classesTaught: ['Class 1 to 12'], hodAssigned: 'Ms. Anita Desai', totalTeachers: 12 },
];

export const PRINCIPAL_MOCK_PROGRESS: PrincipalSyllabusProgress[] = [
  { id: 'PROG-1', className: 'Class 10', sectionName: 'A', subjectName: 'Mathematics', teacherName: 'Mr. Arvind Kumar', completionPercentage: 75, chaptersCompleted: 12, totalChapters: 16, status: 'On Track' },
  { id: 'PROG-2', className: 'Class 10', sectionName: 'B', subjectName: 'Science', teacherName: 'Ms. Sunita Rao', completionPercentage: 45, chaptersCompleted: 6, totalChapters: 15, status: 'Delayed' },
  { id: 'PROG-3', className: 'Class 9', sectionName: 'A', subjectName: 'English', teacherName: 'Ms. Rekha', completionPercentage: 80, chaptersCompleted: 16, totalChapters: 20, status: 'Ahead' },
];

export const PRINCIPAL_MOCK_CALENDAR: PrincipalAcademicCalendarEvent[] = [
  { id: 'EV-1', title: 'Mid-Term Examinations', date: '2024-10-15', endDate: '2024-10-25', type: 'Exam' },
  { id: 'EV-2', title: 'Diwali Break', date: '2024-11-01', endDate: '2024-11-05', type: 'Holiday' },
  { id: 'EV-3', title: 'Annual Science Exhibition', date: '2024-12-10', type: 'Activity' },
];
