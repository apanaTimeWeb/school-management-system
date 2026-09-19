import PrincipalTimetableMain from './timetable_components/PrincipalTimetableMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalTimetablePage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalTimetableMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
