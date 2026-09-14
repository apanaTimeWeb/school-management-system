import HrPerformanceMain from "./hr_performance_components/HrPerformanceMain";

export const metadata = {
  title: "Employee Performance | Smart Gym 360",
  description: "Track performance goals, conduct appraisals, and manage promotion recommendations.",
};

export default function HrPerformancePage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Employee Performance Appraisals</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Conduct evaluations, track goal achievement, log manager remarks, and recommend promotions.</p>
      </div>
      <HrPerformanceMain />
    </main>
  );
}

