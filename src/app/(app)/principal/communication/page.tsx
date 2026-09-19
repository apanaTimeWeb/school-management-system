import PrincipalCommunicationMain from './communication_components/PrincipalCommunicationMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalCommunicationPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalCommunicationMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
