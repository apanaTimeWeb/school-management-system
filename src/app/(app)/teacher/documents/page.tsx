import TeacherDocumentsMain from './documents_components/TeacherDocumentsMain';
import TeachingDocuments from './TeachingDocuments';

export default function TeacherDocumentsPage() {
  return (
    <div className="w-full h-full relative">
      <TeacherDocumentsMain />
          <TeachingDocuments />
    </div>
  );
}
