import PrincipalLibraryMain from './library_components/PrincipalLibraryMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalLibraryPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalLibraryMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
