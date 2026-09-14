export interface TeacherDocument {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
}

export interface Teacher {
  id: string;
  teacherId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  
  // Academic & Experience
  department: string;
  qualification: string;
  experienceYears: number;
  
  // Teaching Assignment
  subjects: string[];
  classes: string[];
  sections: string[];
  classTeacherOf: string | null; // e.g. "10-A"
  
  // Workload
  periodsPerWeek: number;
  maxPeriods: number;
  
  // Attendance & Leave
  attendancePercentage: number;
  leavesTaken: number;
  leavesPending: number;
  
  documents: TeacherDocument[];
}

export interface FetchTeachersParams {
  search?: string;
  department?: string;
  status?: string;
}

export interface TeacherListResponse {
  success: boolean;
  data: Teacher[];
}

export interface TeacherDetailResponse {
  success: boolean;
  data: Teacher | null;
}
