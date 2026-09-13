// RESPONSIBILITY: Provides API fetching wrappers for the Principal Student Management module.
import { PrincipalStudent, PrincipalStudentProfileData, PrincipalStudentsFilters } from '../students_types/PrincipalStudents.types';
import { PRINCIPAL_STUDENTS_MOCK_LIST, PRINCIPAL_STUDENT_MOCK_PROFILE } from '../students_constants/PrincipalStudentsConstants';

const MOCK_DELAY = 600; // Simulate network latency

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchPrincipalStudentsList = async (filters: PrincipalStudentsFilters): Promise<PrincipalStudent[]> => {
  await delay(MOCK_DELAY);
  
  let filtered = [...PRINCIPAL_STUDENTS_MOCK_LIST];
  
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(s => 
      s.firstName.toLowerCase().includes(query) || 
      s.lastName.toLowerCase().includes(query) ||
      s.admissionNo.toLowerCase().includes(query) ||
      s.rollNo.includes(query)
    );
  }
  
  if (filters.classFilter) {
    filtered = filtered.filter(s => s.class === filters.classFilter);
  }
  
  if (filters.sectionFilter) {
    filtered = filtered.filter(s => s.section === filters.sectionFilter);
  }
  
  if (filters.statusFilter) {
    filtered = filtered.filter(s => s.status === filters.statusFilter);
  }
  
  return filtered;
};

export const fetchPrincipalStudentProfile = async (studentId: string): Promise<PrincipalStudentProfileData | null> => {
  await delay(MOCK_DELAY);
  
  // In a real app, this would fetch specific student data based on ID.
  // For mock, we just return the hardcoded mock profile but override the core student data if found in list.
  const studentInfo = PRINCIPAL_STUDENTS_MOCK_LIST.find(s => s.id === studentId);
  
  if (!studentInfo) return null;
  
  return {
    ...PRINCIPAL_STUDENT_MOCK_PROFILE,
    profile: studentInfo
  };
};
