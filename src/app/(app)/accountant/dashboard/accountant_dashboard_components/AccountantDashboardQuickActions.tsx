"use client";
import React from "react";
import { Receipt, IndianRupee, Undo2, Download } from "lucide-react";
import { useRouter } from "next/navigation";

// RESPONSIBILITY: Action panel for most common accountant workflows.

export default function AccountantDashboardQuickActions() {
  const router = useRouter();

  const actions = [
    { label: "Collect Fee", icon: <IndianRupee size={20} />, onClick: () => alert("Navigating to Collect Fee"), color: "text-success", bg: "bg-success/10" },
    { label: "Generate Invoice", icon: <Receipt size={20} />, onClick: () => alert("Navigating to Invoices"), color: "text-primary", bg: "bg-primary-subtle" },
    { label: "Process Refund", icon: <Undo2 size={20} />, onClick: () => alert("Opening Refund Modal"), color: "text-warning", bg: "bg-warning/10" },
    { label: "Daily Settlement", icon: <Download size={20} />, onClick: () => alert("Generating Report..."), color: "text-info", bg: "bg-info/10" },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wide">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.onClick}
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:bg-bg-page transition-all duration-200 active:scale-95 group"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${action.bg} ${action.color} group-hover:scale-110 transition-transform`}>
              {action.icon}
            </div>
            <span className="text-xs font-semibold text-text-primary text-center">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
