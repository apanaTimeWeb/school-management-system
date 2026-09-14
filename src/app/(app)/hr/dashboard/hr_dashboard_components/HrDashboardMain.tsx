"use client";

// RESPONSIBILITY: Orchestrates the HR Dashboard by fetching data and rendering sub-components.

import { useHrDashboard } from "./useHrDashboard";
import HrDashboardKpis from "./HrDashboardKpis";
import HrDashboardAttendance from "./HrDashboardAttendance";
import HrDashboardPendingItems from "./HrDashboardPendingItems";
import HrDashboardEvents from "./HrDashboardEvents";
import HrDashboardQuickActions from "./HrDashboardQuickActions";
import HrDashboardAlerts from "./HrDashboardAlerts";

export default function HrDashboardMain() {
  const { stats, isLoading, error } = useHrDashboard();

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
      <HrDashboardAlerts alerts={stats.alerts} />
      
      <HrDashboardKpis stats={stats} />
      <HrDashboardAttendance stats={stats} />
      <HrDashboardPendingItems stats={stats} />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <HrDashboardEvents stats={stats} />
        </div>
        <div className="xl:col-span-1">
          <HrDashboardQuickActions />
        </div>
      </div>
    </div>
  );
}

