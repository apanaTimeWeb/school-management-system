import TeacherDashboardMain from './dashboard_components/TeacherDashboardMain';
import TodaysClassesSection from './TodaysClassesSection';

export default function TeacherDashboardPage() {
  return (
    <div className="w-full h-full">
      <TeacherDashboardMain />
          <TodaysClassesSection />
    </div>
  );
}
