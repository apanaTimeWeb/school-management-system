import PrincipalStudentsMain from './students_components/PrincipalStudentsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalStudentsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalStudentsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
