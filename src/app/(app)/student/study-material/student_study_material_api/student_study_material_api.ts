import { MOCK_STUDY_MATERIAL_DATA } from '../student_study_material_constants/student_study_material_constants';
import type { StudentStudyMaterialData } from '../student_study_material_types/student_study_material_types';

/**
 * RESPONSIBILITY: Fetches study material data.
 */
export async function fetchStudyMaterial(): Promise<{ data: StudentStudyMaterialData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Data fetched successfully",
    data: MOCK_STUDY_MATERIAL_DATA,
  };
}
