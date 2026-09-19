import PrincipalParentsMain from './parents_components/PrincipalParentsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalParentsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalParentsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
