import PrincipalMeetingsMain from './meetings_components/PrincipalMeetingsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalMeetingsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalMeetingsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
