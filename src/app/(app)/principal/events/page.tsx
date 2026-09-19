import PrincipalEventsMain from './events_components/PrincipalEventsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalEventsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalEventsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
