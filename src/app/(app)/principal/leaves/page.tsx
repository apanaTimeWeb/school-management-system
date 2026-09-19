import PrincipalLeavesMain from './leaves_components/PrincipalLeavesMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalLeavesPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalLeavesMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
