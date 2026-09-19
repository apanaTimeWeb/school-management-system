import PrincipalAttendanceMain from './attendance_components/PrincipalAttendanceMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalAttendancePage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalAttendanceMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
