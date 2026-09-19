import PrincipalDisciplineMain from './discipline_components/PrincipalDisciplineMain';
import MissingFeaturesRichUI from './MissingFeaturesRichUI';

export default function PrincipalDisciplinePage() {
  return (
    <div className="min-h-screen p-6 relative">
      <PrincipalDisciplineMain />
          <MissingFeaturesRichUI />
    </div>
  );
}
