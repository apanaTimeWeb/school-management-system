"use client";
import React from "react";
import { AlertTriangle, X } from "lucide-react";
import { useAccountantDashboardStore } from "../accountant_dashboard_store/useAccountantDashboardStore";

// RESPONSIBILITY: Renders global alerts at the top of the dashboard.

export default function AccountantDashboardAlerts() {
  const { isImportantAlertsVisible, dismissAlerts } = useAccountantDashboardStore();

  if (!isImportantAlertsVisible) return null;

  return (
    <div className="bg-warning/10 border-l-4 border-warning rounded-r-lg p-4 flex items-start sm:items-center justify-between gap-4 mb-2 fade-in">
      <div className="flex items-start sm:items-center gap-3">
        <AlertTriangle size={20} className="text-warning shrink-0 mt-0.5 sm:mt-0" />
        <div>
          <h4 className="text-sm font-bold text-warning">Financial Year Closing Warning</h4>
          <p className="text-xs text-warning/80 mt-1">Please ensure all pending refunds and concessions are cleared by March 31st.</p>
        </div>
      </div>
      <button 
        onClick={dismissAlerts}
        className="p-1 rounded-md text-warning/70 hover:bg-warning/20 hover:text-warning transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
