import PrincipalDocumentsMain from './documents_components/PrincipalDocumentsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalDocumentsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalDocumentsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
