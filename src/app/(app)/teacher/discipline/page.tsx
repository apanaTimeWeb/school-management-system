import TeacherDisciplineMain from './discipline_components/TeacherDisciplineMain';
import DisciplineActionUI from './DisciplineActionUI';

export default function TeacherDisciplinePage() {
  return (
    <div className="w-full h-full relative">
      <TeacherDisciplineMain />
          <DisciplineActionUI />
    </div>
  );
}
