"use client";

import React from 'react';
import type { TransportNotification } from '../student_transport_types/student_transport_types';
import { Bell, Info, AlertTriangle, MessageCircleWarning } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  notifications: TransportNotification[];
}

export default function StudentTransportNotifications({ notifications }: Props) {
  
  const getTypeConfig = (type: string) => {
    switch (type) {
      case 'Info': return { color: 'text-info bg-info/10 border-info/20', icon: <Info size={18} className="text-info" /> };
      case 'Warning': return { color: 'text-amber-500 bg-amber-500/10 border-amber-500/20', icon: <AlertTriangle size={18} className="text-amber-500" /> };
      case 'Alert': return { color: 'text-danger bg-danger/10 border-danger/20', icon: <MessageCircleWarning size={18} className="text-danger" /> };
      default: return { color: 'text-text-secondary bg-page border-border', icon: <Bell size={18} /> };
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <Bell size={16} className="text-text-secondary" /> Transport Updates & Notifications
      </h3>

      {notifications.length === 0 ? (
        <p className="text-sm text-text-secondary text-center py-4">No recent updates.</p>
      ) : (
        <div className="space-y-3">
          {notifications.map(notif => {
            const config = getTypeConfig(notif.type);
            
            return (
              <div key={notif.id} className="flex gap-4 p-4 rounded-lg bg-page border border-border hover:border-primary/30 transition-colors">
                <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center shrink-0 border", config.color)}>
                  {config.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={clsx("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border", config.color)}>
                      {notif.type}
                    </span>
                    <span className="text-xs font-semibold text-text-secondary">{notif.date}</span>
                  </div>
                  <p className="text-sm font-medium text-text-primary">{notif.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
