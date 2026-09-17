"use client";

import React from 'react';
import { ShieldAlert, Wrench, FileWarning, AlertTriangle } from 'lucide-react';
import type { TransportMaintenanceAlert } from '../transport_dashboard_types/transport_dashboard.types';

// RESPONSIBILITY: Renders the list of maintenance, insurance, and permit alerts

interface TransportMaintenanceAlertsProps {
  alerts: TransportMaintenanceAlert[];
}

export default function TransportMaintenanceAlerts({ alerts }: TransportMaintenanceAlertsProps) {
  const getAlertIcon = (type: TransportMaintenanceAlert['alertType']) => {
    switch (type) {
      case 'MAINTENANCE_DUE': return <Wrench size={16} className="text-amber-500" />;
      case 'INSURANCE_EXPIRY': return <ShieldAlert size={16} className="text-red-500" />;
      case 'PERMIT_EXPIRY': return <FileWarning size={16} className="text-orange-500" />;
      case 'EMISSION_EXPIRY': return <AlertTriangle size={16} className="text-yellow-500" />;
      default: return <AlertTriangle size={16} className="text-zinc-500" />;
    }
  };

  const getSeverityBadge = (severity: TransportMaintenanceAlert['severity']) => {
    switch (severity) {
      case 'HIGH': return <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#450A0A] text-[#EF4444]">HIGH</span>;
      case 'MEDIUM': return <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#451A03] text-[#F59E0B]">MEDIUM</span>;
      case 'LOW': return <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1E3A5F] text-[#3B82F6]">LOW</span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden h-full">
      <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
        <h2 className="text-base font-semibold text-[var(--text-primary)]">Maintenance & Alerts</h2>
        <span className="text-xs font-medium text-[var(--text-secondary)]">{alerts.length} Active</span>
      </div>
      <div className="p-2 overflow-y-auto max-h-[300px]">
        {alerts.length > 0 ? (
          <div className="space-y-2">
            {alerts.map(alert => (
              <div 
                key={alert.id} 
                className="flex gap-3 p-3 rounded-lg hover:bg-[rgba(255,255,255,0.02)] border border-transparent hover:border-[var(--border)] motion-safe:transition-colors cursor-pointer"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] flex items-center justify-center border border-[var(--border)]">
                    {getAlertIcon(alert.alertType)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{alert.vehicleNumber}</span>
                    {getSeverityBadge(alert.severity)}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 mb-1">{alert.description}</p>
                  <p className="text-[11px] font-medium text-amber-500">Due: {alert.dueDate}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-[var(--text-secondary)]">
            <CheckCircle2 size={32} className="mb-2 text-emerald-500 opacity-50" />
            <p className="text-sm">All vehicles up to date</p>
          </div>
        )}
      </div>
      <div className="p-3 border-t border-[var(--border)] bg-[var(--bg-page)] mt-auto">
        <button className="w-full py-1.5 text-sm font-medium text-[var(--primary)] hover:underline text-center">
          View Maintenance Log
        </button>
      </div>
    </div>
  );
}
