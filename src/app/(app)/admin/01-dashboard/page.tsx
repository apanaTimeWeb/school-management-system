import AdminDashboardKPIs from "./dashboard_components/AdminDashboardKPIs";
import AdminQuickActions from "./dashboard_components/AdminQuickActions";
import AdminDashboardCharts from "./dashboard_components/AdminDashboardCharts";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Overview of school administration and management.</p>
        </div>
      </div>

      {/* KPI Metrics */}
      <AdminDashboardKPIs />

      {/* Main Content Grid: Charts and Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Charts (2/3 width on large screens) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <AdminDashboardCharts />
        </div>

        {/* Right Column: Quick Actions & Alerts (1/3 width on large screens) */}
        <div className="flex flex-col gap-6">
          <AdminQuickActions />
        </div>

      </div>

    </div>
  );
}
