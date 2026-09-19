import PrincipalAdmissionsMain from './admissions_components/PrincipalAdmissionsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalAdmissionsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalAdmissionsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
