"use client";

import React from 'react';
import { Info, CheckCircle2, AlertTriangle, AlertCircle, Clock } from 'lucide-react';
import type { TransportActivity } from '../transport_dashboard_types/transport_dashboard.types';

// RESPONSIBILITY: Renders a timeline of recent activities in the transport module

interface TransportRecentActivitiesProps {
  activities: TransportActivity[];
}

export default function TransportRecentActivities({ activities }: TransportRecentActivitiesProps) {
  const getActivityIcon = (type: TransportActivity['type']) => {
    switch (type) {
      case 'SUCCESS': return <CheckCircle2 size={14} className="text-emerald-500" />;
      case 'WARNING': return <AlertTriangle size={14} className="text-amber-500" />;
      case 'DANGER': return <AlertCircle size={14} className="text-red-500" />;
      case 'INFO':
      default: return <Info size={14} className="text-blue-500" />;
    }
  };

  return (
    <div className="flex flex-col bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden h-full">
      <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
        <h2 className="text-base font-semibold text-[var(--text-primary)]">Recent Activities</h2>
      </div>
      
      <div className="p-4 overflow-y-auto max-h-[300px]">
        <div className="relative border-l-2 border-[var(--border)] ml-3 space-y-6 pb-2">
          {activities.length > 0 ? (
            activities.map(activity => (
              <div key={activity.id} className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full">
                    {getActivityIcon(activity.type)}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{activity.title}</span>
                    <span className="text-xs font-medium text-[var(--text-secondary)] flex items-center gap-1">
                      <Clock size={12} /> {activity.time}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{activity.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-[var(--text-secondary)] pl-6">No recent activities.</p>
          )}
        </div>
      </div>
    </div>
  );
}
