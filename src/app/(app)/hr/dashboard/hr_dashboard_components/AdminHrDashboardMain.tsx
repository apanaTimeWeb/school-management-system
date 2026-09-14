"use client";

// RESPONSIBILITY: Orchestrates the HR Dashboard by fetching data and rendering sub-components.

import { useAdminHrDashboard } from "./useAdminHrDashboard";
import AdminHrDashboardKpis from "./AdminHrDashboardKpis";
import AdminHrDashboardAttendance from "./AdminHrDashboardAttendance";
import AdminHrDashboardPendingItems from "./AdminHrDashboardPendingItems";
import AdminHrDashboardEvents from "./AdminHrDashboardEvents";
import AdminHrDashboardQuickActions from "./AdminHrDashboardQuickActions";
import AdminHrDashboardAlerts from "./AdminHrDashboardAlerts";

export default function AdminHrDashboardMain() {
  const { stats, isLoading, error } = useAdminHrDashboard();

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary motion-reduce:animate-none"></div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="w-full p-6 text-center text-danger bg-danger/10 rounded-md border border-danger">
        {error || "Failed to load HR dashboard."}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <AdminHrDashboardAlerts alerts={stats.alerts} />
      
      <AdminHrDashboardKpis stats={stats} />
      <AdminHrDashboardAttendance stats={stats} />
      <AdminHrDashboardPendingItems stats={stats} />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <AdminHrDashboardEvents stats={stats} />
        </div>
        <div className="xl:col-span-1">
          <AdminHrDashboardQuickActions />
        </div>
      </div>
    </div>
  );
}
