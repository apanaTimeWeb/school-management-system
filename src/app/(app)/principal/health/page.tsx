import PrincipalHealthMain from './health_components/PrincipalHealthMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalHealthPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalHealthMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
