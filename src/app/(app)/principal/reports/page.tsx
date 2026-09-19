import PrincipalReportsMain from './reports_components/PrincipalReportsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalReportsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalReportsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
