export interface PrincipalStudent {
  id: string;
  admissionNo: string;
  rollNo: string;
  firstName: string;
  lastName: string;
  class: string;
  section: string;
  gender: 'Male' | 'Female' | 'Other';
  dob: string;
  status: 'Active' | 'Inactive' | 'Transferred' | 'Suspended';
  bloodGroup: string;
  contactNo: string;
  email: string;
  address: string;
  joiningDate: string;
}

export interface PrincipalStudentGuardian {
  id: string;
  studentId: string;
  fatherName: string;
  fatherContact: string;
  fatherOccupation: string;
  motherName: string;
  motherContact: string;
  motherOccupation: string;
  guardianName?: string;
  guardianContact?: string;
  guardianRelation?: string;
}

export interface PrincipalStudentAcademicRecord {
  id: string;
  studentId: string;
  academicYear: string;
  term: string;
  subject: string;
  score: number;
  maxScore: number;
  grade: string;
  remarks: string;
}

export interface PrincipalStudentAttendance {
  id: string;
  studentId: string;
  month: string;
  totalDays: number;
  presentDays: number;
  absentDays: number;
  lateDays: number;
  percentage: number;
}

export interface PrincipalStudentDisciplineRecord {
  id: string;
  studentId: string;
  date: string;
  incidentType: string;
  description: string;
  actionTaken: string;
  severity: 'low' | 'medium' | 'high';
  reportedBy: string;
}

export interface PrincipalStudentDocument {
  id: string;
  studentId: string;
  documentName: string;
  documentType: 'Birth Certificate' | 'Transfer Certificate' | 'Aadhar Card' | 'Medical Report' | 'Other';
  uploadDate: string;
  status: 'Verified' | 'Pending' | 'Rejected';
  fileUrl: string;
}

export interface PrincipalStudentLifecycle {
  id: string;
  studentId: string;
  transferStatus: 'Not Requested' | 'Requested' | 'Approved' | 'Rejected';
  promotionStatus: 'Not Eligible' | 'Eligible' | 'Promoted' | 'Detained';
  withdrawalStatus: 'Active' | 'Requested' | 'Withdrawn';
  remarks: string;
}

export interface PrincipalStudentsFilters {
  searchQuery: string;
  classFilter: string;
  sectionFilter: string;
  statusFilter: string;
}

export interface PrincipalStudentProfileData {
  profile: PrincipalStudent;
  guardian: PrincipalStudentGuardian;
  academics: PrincipalStudentAcademicRecord[];
  attendance: PrincipalStudentAttendance[];
  discipline: PrincipalStudentDisciplineRecord[];
  documents: PrincipalStudentDocument[];
  lifecycle: PrincipalStudentLifecycle;
}
