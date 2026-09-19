import PrincipalStaffMain from './staff_components/PrincipalStaffMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalStaffPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalStaffMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
