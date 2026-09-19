import PrincipalResultsMain from './results_components/PrincipalResultsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalResultsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalResultsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
