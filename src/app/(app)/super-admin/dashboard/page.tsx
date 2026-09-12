"use client";

import DashboardKPIs from "./super_admin_dashboard_components/DashboardKPIs";
import QuickActions from "./super_admin_dashboard_components/QuickActions";

export default function SuperAdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Super Admin Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Overview and system-level control for School ERP 360.</p>
        </div>
        
        {/* Dashboard Filters (Date / Branch) */}
        <div className="flex gap-3">
          <select className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-border-focus focus:ring-1 focus:ring-primary outline-none transition-all">
            <option>All Branches</option>
            <option>Main Campus</option>
            <option>North Branch</option>
          </select>
          <select className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-border-focus focus:ring-1 focus:ring-primary outline-none transition-all">
            <option>2026-2027 (Current)</option>
            <option>2025-2026</option>
          </select>
        </div>
      </div>

      {/* KPI Cards Row */}
      <DashboardKPIs />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (takes 2/3 space) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <QuickActions />
          
          <div className="bg-card border border-border rounded-lg p-6 min-h-[300px] flex items-center justify-center">
            <p className="text-text-secondary">Charts and Analytics will be rendered here.</p>
          </div>
        </div>

        {/* Right Column (takes 1/3 space) */}
        <div className="flex flex-col gap-6">
          
          {/* System Alerts */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-danger animate-pulse"></span>
              System Alerts
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 border-l-2 border-warning pl-3">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-text-primary">Storage almost full</span>
                  <span className="text-xs text-text-secondary">Database at 85% capacity.</span>
                </div>
              </li>
              <li className="flex gap-3 border-l-2 border-danger pl-3">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-text-primary">Payment gateway failure</span>
                  <span className="text-xs text-text-secondary">3 transactions failed in last 1hr.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Recent Logins */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4">Recent Logins</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-text-primary">Principal (North Branch)</span>
                  <span className="text-xs text-text-secondary">Mac OS Safari • 192.168.1.5</span>
                </div>
                <span className="text-[10px] text-text-secondary bg-bg-page px-2 py-1 rounded">2m ago</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-text-primary">Admin (Main Campus)</span>
                  <span className="text-xs text-text-secondary">Windows Chrome • 10.0.0.5</span>
                </div>
                <span className="text-[10px] text-text-secondary bg-bg-page px-2 py-1 rounded">15m ago</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
