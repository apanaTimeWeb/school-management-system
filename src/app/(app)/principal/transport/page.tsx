import PrincipalTransportMain from './transport_components/PrincipalTransportMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalTransportPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalTransportMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
