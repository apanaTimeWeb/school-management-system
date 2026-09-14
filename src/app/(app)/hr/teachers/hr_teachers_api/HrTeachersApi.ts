import type { TeacherListResponse, TeacherDetailResponse, FetchTeachersParams } from '../hr_teachers_types/HrTeachersTypes';
import { MOCK_TEACHERS } from '../hr_teachers_constants/HrTeachersConstants';

export async function fetchTeachers(params?: FetchTeachersParams): Promise<TeacherListResponse> {
  await new Promise(resolve => setTimeout(resolve, 600));

  let filtered = [...MOCK_TEACHERS];
  
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(t => 
      t.firstName.toLowerCase().includes(q) || 
      t.lastName.toLowerCase().includes(q) ||
      t.teacherId.toLowerCase().includes(q)
    );
  }

  if (params?.status && params.status !== "All") {
    filtered = filtered.filter(t => t.status.toLowerCase() === params.status?.toLowerCase());
  }
  
  if (params?.department && params.department !== "All") {
    filtered = filtered.filter(t => t.department.toLowerCase() === params.department?.toLowerCase());
  }

  return {
    success: true,
    data: filtered,
  };
}

export async function fetchTeacherById(id: string): Promise<TeacherDetailResponse> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const teacher = MOCK_TEACHERS.find(t => t.id === id);
  
  if (!teacher) {
    return {
      success: false,
      data: null
    };
  }

  return {
    success: true,
    data: teacher
  };
}

