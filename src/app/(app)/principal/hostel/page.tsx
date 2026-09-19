import PrincipalHostelMain from './hostel_components/PrincipalHostelMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalHostelPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalHostelMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
