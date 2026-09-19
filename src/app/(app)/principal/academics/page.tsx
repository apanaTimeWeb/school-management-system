import PrincipalAcademicsMain from './academics_components/PrincipalAcademicsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalAcademicsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalAcademicsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
