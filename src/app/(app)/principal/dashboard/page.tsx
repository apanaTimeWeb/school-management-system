import PrincipalDashboardMain from './dashboard_components/PrincipalDashboardMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

// Server Component
export default function PrincipalDashboardPage() {
  return (
    <div className="min-h-screen p-6">
      <PrincipalDashboardMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
