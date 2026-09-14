"use client";
import React from 'react';
import { CalendarCheck, BookOpen, UserPlus, Zap } from 'lucide-react';

export default function QuickActionsWidget() {
  const [activeAction, setActiveAction] = React.useState<number | null>(null);

  const actions = [
    { label: "Mark Attendance", icon: <CalendarCheck size={20} />, color: "text-success", bg: "bg-success/10", border: "border-success/30", hover: "hover:bg-success/20 hover:border-success/50" },
    { label: "Assign Homework", icon: <BookOpen size={20} />, color: "text-info", bg: "bg-info/10", border: "border-info/30", hover: "hover:bg-info/20 hover:border-info/50" },
    { label: "Add Marks", icon: <Zap size={20} />, color: "text-warning", bg: "bg-warning/10", border: "border-warning/30", hover: "hover:bg-warning/20 hover:border-warning/50" },
    { label: "Request Leave", icon: <UserPlus size={20} />, color: "text-primary", bg: "bg-primary/10", border: "border-primary/30", hover: "hover:bg-primary/20 hover:border-primary/50" },
  ];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
      <div className="p-4 border-b border-border bg-black/20 flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-text-primary flex items-center gap-2">
          <Zap className="text-secondary" size={18} />
          Quick Actions
        </h3>
      </div>
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, i) => (
          <button 
            key={i}
            onClick={() => {
              setActiveAction(i);
              setTimeout(() => setActiveAction(null), 2000);
            }}
            disabled={activeAction !== null}
            className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
              activeAction === i ? 'bg-primary/20 border-primary scale-95' : `${action.bg} ${action.border} ${action.hover} cursor-pointer`
            }`}
          >
            <div className={`${activeAction === i ? 'text-primary animate-pulse' : action.color}`}>{action.icon}</div>
            <span className={`text-[13px] font-bold ${activeAction === i ? 'text-primary' : action.color}`}>
              {activeAction === i ? 'Opening...' : action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
