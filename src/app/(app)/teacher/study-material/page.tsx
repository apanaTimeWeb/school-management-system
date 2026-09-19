import TeacherMaterialMain from './material_components/TeacherMaterialMain';
import StudyMaterialManagement from './StudyMaterialManagement';

export default function TeacherStudyMaterialPage() {
  return (
    <div className="w-full h-full relative">
      <TeacherMaterialMain />
          <StudyMaterialManagement />
    </div>
  );
}
