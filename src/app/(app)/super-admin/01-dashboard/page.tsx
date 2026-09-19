import React from 'react';
import DashboardKPIs from './dashboard_components/DashboardKPIs';
import SuperAdminDashboardFilters from './dashboard_components/SuperAdminDashboardFilters';
import SystemAlerts from './dashboard_components/SystemAlerts';
import QuickActions from './dashboard_components/QuickActions';
import AttendanceSummary from './dashboard_components/AttendanceSummary';
import FeeCollectionSummary from './dashboard_components/FeeCollectionSummary';
import RecentActivities from './dashboard_components/RecentActivities';
import RecentLoginActivity from './dashboard_components/RecentLoginActivity';
import SystemNotifications from './dashboard_components/SystemNotifications';
import MissingFeaturesUI from './MissingFeaturesUI';

export default function SuperAdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Super Admin Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Overview of the entire school group ecosystem</p>
        </div>
      </div>
      
      {/* Top Level Filters & Alerts */}
      <SuperAdminDashboardFilters />
      <SystemAlerts />
      
      {/* Core KPIs */}
      <DashboardKPIs />
      
      {/* Middle Section: Quick Actions & Summaries */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AttendanceSummary />
            <FeeCollectionSummary />
          </div>
          <RecentActivities />
        </div>
        <div className="flex flex-col gap-6">
          <QuickActions />
          <SystemNotifications />
          <RecentLoginActivity />
        </div>
      </div>
          <MissingFeaturesUI />
    </div>
  );
}
