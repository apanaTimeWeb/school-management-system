import TeacherAssignmentsMain from './assignments_components/TeacherAssignmentsMain';
import AssignmentQuestionsForm from './AssignmentQuestionsForm';

export default function TeacherAssignmentsPage() {
  return (
    <div className="w-full h-full relative">
      <TeacherAssignmentsMain />
          <AssignmentQuestionsForm />
    </div>
  );
}
