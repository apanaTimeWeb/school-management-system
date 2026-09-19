import TeacherReportsMain from './reports_components/TeacherReportsMain';
import ReportsExportControls from './ReportsExportControls';

export default function TeacherReportsPage() {
  return (
    <div className="w-full h-full relative">
      <TeacherReportsMain />
          <ReportsExportControls />
    </div>
  );
}
