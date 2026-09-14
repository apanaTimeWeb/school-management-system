import AdminHrReportsMain from "./hr_reports_components/AdminHrReportsMain";

export const metadata = {
  title: "HR Reports | Smart Gym 360",
  description: "Generate comprehensive demographic, lifecycle, and compliance reports.",
};

export default function AdminHrReportsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">HR Reports & Analytics</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Generate and export official reports for attendance, payroll, assets, and overall staff demographics.</p>
      </div>
      <AdminHrReportsMain />
    </main>
  );
}
