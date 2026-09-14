"use client";
import React from "react";
import AccountantDashboardKPIs from "./AccountantDashboardKPIs";
import AccountantDashboardQuickActions from "./AccountantDashboardQuickActions";
import AccountantDashboardTrendChart from "./AccountantDashboardTrendChart";
import AccountantDashboardPaymentSummary from "./AccountantDashboardPaymentSummary";
import AccountantDashboardTransactions from "./AccountantDashboardTransactions";
import AccountantDashboardPending from "./AccountantDashboardPending";
import AccountantDashboardDefaulters from "./AccountantDashboardDefaulters";
import AccountantDashboardAlerts from "./AccountantDashboardAlerts";
import { useAccountantDashboardStore } from "../accountant_dashboard_store/useAccountantDashboardStore";

// RESPONSIBILITY: Orchestrates the main layout of the Accountant Dashboard using CSS Grid.

export default function AccountantDashboardMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Accountant Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Overview of today's collections, pending dues, and quick actions.</p>
        </div>
        <div className="text-sm font-semibold text-text-secondary bg-card border border-border px-4 py-2 rounded-lg">
          Last Sync: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <AccountantDashboardAlerts />

      <AccountantDashboardKPIs />

      {/* Main Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        {/* Left/Main Column - span 2 or 3 depending on screen */}
        <div className="lg:col-span-2 xl:col-span-3 space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <AccountantDashboardTrendChart />
            <AccountantDashboardPaymentSummary />
          </div>
          <AccountantDashboardTransactions />
        </div>

        {/* Right Sidebar Column */}
        <div className="lg:col-span-1 space-y-6">
          <AccountantDashboardQuickActions />
          <AccountantDashboardPending />
          <AccountantDashboardDefaulters />
        </div>

      </div>
    </div>
  );
}
