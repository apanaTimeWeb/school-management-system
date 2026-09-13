"use client";
// RESPONSIBILITY: Renders the Quick Actions buttons on the right side of the dashboard.
import React from 'react';
import { Send, FileText, UserPlus, Settings, BellRing } from 'lucide-react';

export default function PrincipalDashboardQuickActions() {
  const actions = [
    { label: 'Send Notice', icon: <Send size={16} /> },
    { label: 'View Reports', icon: <FileText size={16} /> },
    { label: 'Admit Student', icon: <UserPlus size={16} /> },
    { label: 'Approve Leaves', icon: <BellRing size={16} /> },
    { label: 'Settings', icon: <Settings size={16} /> },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-[16px] font-semibold text-text-primary mb-4">Quick Actions</h2>
      <div className="flex flex-col gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="flex items-center gap-3 p-3 rounded-md border border-border bg-page hover:bg-white/5 hover:border-primary/50 transition-all duration-200 text-[14px] font-medium text-text-primary text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            <div className="text-primary">{action.icon}</div>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
