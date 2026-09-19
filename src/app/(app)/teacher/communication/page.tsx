import TeacherCommunicationMain from './communication_components/TeacherCommunicationMain';
import ImportantUpdatesSection from './ImportantUpdatesSection';

export default function TeacherCommunicationPage() {
  return (
    <div className="w-full h-full relative">
      <TeacherCommunicationMain />
          <ImportantUpdatesSection />
    </div>
  );
}
