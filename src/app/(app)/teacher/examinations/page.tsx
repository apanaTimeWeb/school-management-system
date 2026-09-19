import TeacherExaminationsMain from './examinations_components/TeacherExaminationsMain';
import InternalAssessmentUI from './InternalAssessmentUI';

export default function TeacherExaminationsPage() {
  return (
    <div className="w-full h-full relative">
      <TeacherExaminationsMain />
          <InternalAssessmentUI />
    </div>
  );
}
