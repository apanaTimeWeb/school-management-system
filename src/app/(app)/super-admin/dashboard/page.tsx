"use client";

import DashboardKPIs from "./super_admin_dashboard_components/DashboardKPIs";
import QuickActions from "./super_admin_dashboard_components/QuickActions";
import SuperAdminDashboardFilters from "./super_admin_dashboard_components/SuperAdminDashboardFilters";
import SystemAlerts from "./super_admin_dashboard_components/SystemAlerts";
import SystemNotifications from "./super_admin_dashboard_components/SystemNotifications";
import RecentActivities from "./super_admin_dashboard_components/RecentActivities";
import RecentLoginActivity from "./super_admin_dashboard_components/RecentLoginActivity";
import FeeCollectionSummary from "./super_admin_dashboard_components/FeeCollectionSummary";
import AttendanceSummary from "./super_admin_dashboard_components/AttendanceSummary";

export default function SuperAdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Header & Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Super Admin Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Overview and system-level control for School ERP 360.</p>
        </div>
        <SuperAdminDashboardFilters />
      </div>

      {/* KPI Cards Row */}
      <DashboardKPIs />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (takes 2/3 space) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <QuickActions />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeeCollectionSummary />
            <AttendanceSummary />
          </div>

          <RecentActivities />
        </div>

        {/* Right Column (takes 1/3 space) */}
        <div className="flex flex-col gap-6">
          <SystemAlerts />
          <SystemNotifications />
          <RecentLoginActivity />
        </div>
      </div>
      
    </div>
  );
}
