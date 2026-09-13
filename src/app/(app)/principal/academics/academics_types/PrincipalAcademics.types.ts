export interface PrincipalAcademicClass {
  id: string;
  className: string;
  level: 'Primary' | 'Middle' | 'High' | 'Senior Secondary';
  sections: PrincipalAcademicSection[];
  totalStudents: number;
  hodName?: string;
  hodContact?: string;
}

export interface PrincipalAcademicSection {
  id: string;
  sectionName: string;
  classTeacher: string;
  roomNo: string;
  studentCount: number;
  maxCapacity: number;
}

export interface PrincipalAcademicSubject {
  id: string;
  subjectName: string;
  department: string;
  classesTaught: string[]; // e.g. ["Class 9", "Class 10"]
  hodAssigned: string;
  totalTeachers: number;
}

export interface PrincipalSyllabusProgress {
  id: string;
  className: string;
  sectionName: string;
  subjectName: string;
  teacherName: string;
  completionPercentage: number;
  chaptersCompleted: number;
  totalChapters: number;
  status: 'On Track' | 'Delayed' | 'Ahead';
}

export interface PrincipalAcademicCalendarEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  type: 'Exam' | 'Holiday' | 'Activity' | 'Term Break';
}
