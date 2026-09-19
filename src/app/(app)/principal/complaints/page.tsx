import PrincipalComplaintsMain from './complaints_components/PrincipalComplaintsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalComplaintsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalComplaintsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
