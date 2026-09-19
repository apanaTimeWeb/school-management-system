import PrincipalExaminationsMain from './examinations_components/PrincipalExaminationsMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalExaminationsPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalExaminationsMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
