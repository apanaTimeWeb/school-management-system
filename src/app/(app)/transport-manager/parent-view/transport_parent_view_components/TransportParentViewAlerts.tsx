"use client";

import React from 'react';
import { Bell, Info, AlertTriangle, AlertCircle } from 'lucide-react';
import type { TransportAlert } from '../transport_parent_view_types/transport_parent_view.types';

// RESPONSIBILITY: Renders the transport alerts list for the parent

interface TransportParentViewAlertsProps {
  alerts: TransportAlert[];
}

export default function TransportParentViewAlerts({ alerts }: TransportParentViewAlertsProps) {
  
  const getAlertIcon = (type: string) => {
    switch(type) {
      case 'WARNING': return <AlertTriangle size={18} className="text-amber-500" />;
      case 'ERROR': return <AlertCircle size={18} className="text-red-500" />;
      default: return <Info size={18} className="text-blue-500" />;
    }
  };

  const getAlertBgClass = (type: string) => {
    switch(type) {
      case 'WARNING': return 'bg-[rgba(245,158,11,0.05)] border-[rgba(245,158,11,0.2)]';
      case 'ERROR': return 'bg-[rgba(239,68,68,0.05)] border-[rgba(239,68,68,0.2)]';
      default: return 'bg-[rgba(59,130,246,0.05)] border-[rgba(59,130,246,0.2)]';
    }
  };

  return (
    <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden h-full flex flex-col">
      <div className="p-5 border-b border-[var(--border)] flex items-center justify-between">
        <h3 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
          <Bell size={18} className="text-[var(--text-secondary)]" /> Transport Alerts
        </h3>
        {alerts.length > 0 && (
          <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
            {alerts.length}
          </span>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div 
              key={alert.id}
              className={`p-4 rounded-lg border ${getAlertBgClass(alert.type)} flex gap-3 items-start transition-colors`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] truncate pr-2">{alert.title}</h4>
                  <span className="text-[10px] font-medium text-[var(--text-secondary)] flex-shrink-0 whitespace-nowrap">{alert.timestamp}</span>
                </div>
                <p className="text-xs text-[var(--text-primary)] leading-relaxed">{alert.message}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center p-6">
            <Bell size={32} className="text-[var(--text-secondary)] opacity-20 mb-3" />
            <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">No New Alerts</h4>
            <p className="text-xs text-[var(--text-secondary)] max-w-[200px]">You will receive notifications here for any transport delays, route changes, or emergency updates.</p>
          </div>
        )}
      </div>
    </div>
  );
}
