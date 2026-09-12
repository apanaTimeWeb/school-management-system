"use client";

import { PlusCircle, FileText, Settings, HelpCircle, Mail, UserPlus, CreditCard } from "lucide-react";

export default function AdminQuickActions() {
  const actions = [
    { label: "New Admission", icon: UserPlus, color: "text-primary", bg: "bg-primary/10" },
    { label: "Collect Fee", icon: CreditCard, color: "text-success", bg: "bg-success/10" },
    { label: "Send Notification", icon: Mail, color: "text-info", bg: "bg-info/10" },
    { label: "Generate Report", icon: FileText, color: "text-warning", bg: "bg-warning/10" },
    { label: "System Settings", icon: Settings, color: "text-secondary", bg: "bg-secondary/10" },
    { label: "Help & Support", icon: HelpCircle, color: "text-primary", bg: "bg-primary/10" }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <h2 className="text-base font-bold text-text-primary tracking-wider mb-4 border-b border-border pb-2">Quick Actions</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <button key={idx} className="flex flex-col items-center justify-center p-4 border border-border rounded-lg bg-bg-page hover:border-primary hover:shadow-sm transition-all group">
              <div className={`p-3 rounded-full mb-2 ${action.bg}`}>
                <Icon size={20} className={`${action.color} group-hover:scale-110 transition-transform`} />
              </div>
              <span className="text-xs font-semibold text-text-secondary text-center">{action.label}</span>
            </button>
          );
        })}
      </div>
      
      <button className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 bg-primary-subtle text-primary text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors">
        <PlusCircle size={18} />
        View All Actions
      </button>
    </div>
  );
}
