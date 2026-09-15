export interface SubjectResult {
  id: string;
  subjectName: string;
  maxMarks: number;
  obtainedMarks: number;
  grade: string;
  remarks?: string;
}

export interface ExamResult {
  id: string;
  termName: string; // e.g., "Unit Test 1 (2024-25)"
  datePublished: string;
  
  // Overall stats
  totalMaxMarks: number;
  totalObtainedMarks: number;
  percentage: number;
  grade: string;
  gpa?: string; // Optional depending on school system
  rank?: string; // Optional
  status: 'Pass' | 'Fail';
  teacherRemarks: string;
  
  subjects: SubjectResult[];
}

export interface StudentResultsData {
  results: ExamResult[];
}
