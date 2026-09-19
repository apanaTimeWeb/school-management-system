import PrincipalFeesMain from './fees_components/PrincipalFeesMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalFeesPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalFeesMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
