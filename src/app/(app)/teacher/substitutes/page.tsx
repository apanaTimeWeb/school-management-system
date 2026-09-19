import TeacherSubstitutesMain from './substitutes_components/TeacherSubstitutesMain';
import ReplacementNotification from './ReplacementNotification';

export default function TeacherSubstitutesPage() {
  return (
    <div className="w-full h-full relative">
      <TeacherSubstitutesMain />
          <ReplacementNotification />
    </div>
  );
}
