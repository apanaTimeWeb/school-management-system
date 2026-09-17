"use client";

import React from 'react';
import TransportDashboardKPIs from './TransportDashboardKPIs';
import TransportTripsStatus from './TransportTripsStatus';
import TransportMaintenanceAlerts from './TransportMaintenanceAlerts';
import TransportFeeSummary from './TransportFeeSummary';
import TransportRecentActivities from './TransportRecentActivities';

import { 
  TRANSPORT_DASHBOARD_KPIS, 
  TRANSPORT_DASHBOARD_TRIPS,
  TRANSPORT_MAINTENANCE_ALERTS,
  TRANSPORT_FEE_SUMMARY,
  TRANSPORT_RECENT_ACTIVITIES
} from '../transport_dashboard_constants/transport_dashboard.constants';

// RESPONSIBILITY: Root client component for Transport Dashboard orchestrating all sub-components

export default function TransportDashboardMain() {
  return (
    <div className="flex flex-col w-full h-full space-y-6">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)]">Transport Manager Dashboard</h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Overview of vehicles, routes, and daily transport operations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium rounded-md border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-input)] transition-colors">
            Generate Report
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)]">
            + New Trip
          </button>
        </div>
      </div>

      {/* KPIs Row */}
      <TransportDashboardKPIs kpis={TRANSPORT_DASHBOARD_KPIS} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Trips Table (Takes up 2 columns on large screens) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="h-[400px]">
            <TransportTripsStatus trips={TRANSPORT_DASHBOARD_TRIPS} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[320px]">
             <TransportFeeSummary data={TRANSPORT_FEE_SUMMARY} />
             <TransportRecentActivities activities={TRANSPORT_RECENT_ACTIVITIES} />
          </div>
        </div>

        {/* Right Column - Alerts & Maintenance */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="h-[400px]">
            <TransportMaintenanceAlerts alerts={TRANSPORT_MAINTENANCE_ALERTS} />
          </div>
          
          {/* We can add a quick stats or driver status panel here */}
          <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] p-5 flex flex-col h-[320px]">
             <h2 className="text-base font-semibold text-[var(--text-primary)] mb-4">Quick Actions</h2>
             <div className="grid grid-cols-2 gap-3 mt-2">
                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-[rgba(250,204,21,0.05)] hover:bg-[rgba(250,204,21,0.1)] border border-[rgba(250,204,21,0.1)] transition-colors text-[var(--primary)]">
                  <span className="text-2xl">🚌</span>
                  <span className="text-xs font-semibold text-center text-[var(--text-primary)]">Add Vehicle</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-[rgba(34,197,94,0.05)] hover:bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.1)] transition-colors text-emerald-500">
                  <span className="text-2xl">🛣️</span>
                  <span className="text-xs font-semibold text-center text-[var(--text-primary)]">Manage Routes</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-[rgba(59,130,246,0.05)] hover:bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.1)] transition-colors text-blue-500">
                  <span className="text-2xl">👨‍✈️</span>
                  <span className="text-xs font-semibold text-center text-[var(--text-primary)]">Driver Directory</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-[rgba(239,68,68,0.05)] hover:bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.1)] transition-colors text-red-500">
                  <span className="text-2xl">🚨</span>
                  <span className="text-xs font-semibold text-center text-[var(--text-primary)]">Emergency SOS</span>
                </button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
