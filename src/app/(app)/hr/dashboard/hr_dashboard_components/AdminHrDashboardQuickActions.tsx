"use client";

// RESPONSIBILITY: Renders quick navigation buttons that route to specific HR tasks.

import { UserPlus, CalendarPlus, Upload, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminHrDashboardQuickActions() {
  const router = useRouter();

  const actions = [
    { label: "Add Staff", icon: <UserPlus size={24} />, color: "text-primary", bg: "bg-primary/10", hoverBg: "group-hover:bg-primary", route: "/hr/staff/add" },
    { label: "Apply Leave", icon: <CalendarPlus size={24} />, color: "text-success", bg: "bg-success/10", hoverBg: "group-hover:bg-success", route: "/hr/leaves/apply" },
    { label: "Upload Doc", icon: <Upload size={24} />, color: "text-info", bg: "bg-info/10", hoverBg: "group-hover:bg-info", route: "/hr/documents/upload" },
    { label: "Permissions", icon: <ShieldCheck size={24} />, color: "text-purple-500", bg: "bg-purple-500/10", hoverBg: "group-hover:bg-purple-500", route: "/hr/permissions" },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-5 mb-6 shadow-sm h-full flex flex-col">
      <h2 className="text-base font-bold text-foreground mb-5 uppercase tracking-wide">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {actions.map((action, index) => (
          <button 
            key={index}
            onClick={() => router.push(action.route)}
            className="flex flex-col items-center justify-center p-5 rounded-xl border border-border bg-input hover:border-primary hover:shadow-lg motion-safe:hover:-translate-y-1 motion-safe:transition-all motion-safe:duration-200 group active:scale-95"
          >
            <div className={`w-14 h-14 rounded-full ${action.bg} ${action.color} flex items-center justify-center mb-3 motion-safe:group-hover:scale-110 ${action.hoverBg} group-hover:text-black motion-safe:transition-all motion-safe:duration-200 shadow-sm`}>
              {action.icon}
            </div>
            <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
