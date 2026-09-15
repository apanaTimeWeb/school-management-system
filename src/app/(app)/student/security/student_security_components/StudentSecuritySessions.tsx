"use client";

import React, { useState } from 'react';
import type { ActiveSession } from '../student_security_types/student_security_types';
import { logoutDevice } from '../student_security_api/student_security_api';
import { MonitorSmartphone, Laptop, Smartphone, LogOut, Loader2, Info } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  sessions: ActiveSession[];
  onUpdate: (sessions: ActiveSession[]) => void;
}

export default function StudentSecuritySessions({ sessions, onUpdate }: Props) {
  const [isLoggingOut, setIsLoggingOut] = useState<string | null>(null);

  const handleLogout = async (id?: string) => {
    setIsLoggingOut(id || 'all');
    const res = await logoutDevice(id);
    setIsLoggingOut(null);

    if (res.success) {
      if (id) {
        onUpdate(sessions.filter(s => s.id !== id));
      } else {
        onUpdate(sessions.filter(s => s.isCurrentDevice)); // Keep only current
      }
      alert(res.message);
    }
  };

  const getDeviceIcon = (device: string) => {
    const l = device.toLowerCase();
    if (l.includes('iphone') || l.includes('android') || l.includes('phone')) return <Smartphone size={24} />;
    if (l.includes('mac') || l.includes('pc') || l.includes('windows')) return <Laptop size={24} />;
    return <MonitorSmartphone size={24} />;
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="border-b border-border bg-page/50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MonitorSmartphone size={18} className="text-primary" />
          <h2 className="text-base font-bold text-text-primary">Active Sessions</h2>
        </div>
        {sessions.length > 1 && (
          <button 
            onClick={() => handleLogout()}
            disabled={isLoggingOut === 'all'}
            className="text-[10px] font-bold uppercase tracking-wider text-danger hover:underline disabled:opacity-50 flex items-center gap-1"
          >
            {isLoggingOut === 'all' ? <Loader2 size={12} className="animate-spin" /> : <LogOut size={12} />}
            Logout All Other Devices
          </button>
        )}
      </div>

      <div className="flex flex-col">
        {sessions.map(s => (
          <div key={s.id} className="p-4 border-b border-border last:border-b-0 flex items-start gap-4">
            
            <div className={clsx(
              "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border",
              s.isCurrentDevice ? "bg-primary/10 text-primary border-primary/20" : "bg-page text-text-secondary border-border"
            )}>
              {getDeviceIcon(s.device)}
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
                {s.device} 
                {s.isCurrentDevice && <span className="bg-success/10 text-success text-[10px] px-2 py-0.5 rounded-full uppercase">Current</span>}
              </h3>
              <p className="text-xs text-text-secondary mt-1">{s.browser} • {s.ipAddress}</p>
              <p className="text-xs text-text-secondary flex items-center gap-1 mt-1">
                <Info size={12} /> {s.location} • {s.lastActive}
              </p>
            </div>

            {!s.isCurrentDevice && (
              <button 
                onClick={() => handleLogout(s.id)}
                disabled={isLoggingOut === s.id}
                className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-lg transition-colors disabled:opacity-50"
                title="Log out device"
              >
                {isLoggingOut === s.id ? <Loader2 size={18} className="animate-spin" /> : <LogOut size={18} />}
              </button>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
