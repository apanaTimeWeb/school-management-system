import HrDashboardMain from "./hr_dashboard_components/HrDashboardMain";

export const metadata = {
  title: "HR & Office Dashboard | Smart Gym 360",
  description: "Manage staff, attendance, leaves, and HR operations.",
};

export default function HrDashboardPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">HR / Office Dashboard</h1>
          <p className="text-sm text-muted-foreground">Overview of staff, attendance, and pending requests.</p>
        </div>
      </div>

      <HrDashboardMain />
    </main>
  );
}

