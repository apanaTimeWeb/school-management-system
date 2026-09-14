"use client";
import React from "react";
import { UserCheck, Clock, CheckCircle, AlertCircle } from "lucide-react";
import clsx from "clsx";

const TASKS = [
  { id: 1, title: "Approve Leaves", desc: "2 new sick leave requests", icon: <CalendarIcon className="text-amber-500" />, time: "Today", urgent: true },
  { id: 2, title: "Review Candidates", desc: "Mathematics PGT position", icon: <UserIcon className="text-blue-500" />, time: "Tomorrow", urgent: false },
  { id: 3, title: "Finalize Payroll", desc: "July salary processing", icon: <BanknoteIcon className="text-emerald-500" />, time: "By 28th", urgent: false },
];

function CalendarIcon(props: any) { return <Clock {...props} size={18} />; }
function UserIcon(props: any) { return <UserCheck {...props} size={18} />; }
function BanknoteIcon(props: any) { return <CheckCircle {...props} size={18} />; }

export default function HRDashboardTasks() {
  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm p-6 flex flex-col h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text-primary">Tasks & Approvals</h3>
        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded cursor-pointer hover:bg-indigo-100">View All</span>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-2">
        {TASKS.map(task => (
          <div key={task.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-bg-input border border-transparent hover:border-border transition-all cursor-pointer group">
            <div className={clsx(
              "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm",
              task.urgent ? "bg-amber-50" : "bg-bg-page"
            )}>
              {task.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h4 className="text-sm font-bold text-text-primary group-hover:text-indigo-600 transition-colors truncate">{task.title}</h4>
                <span className={clsx("text-[10px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap", task.urgent ? "bg-amber-100 text-amber-700 border-amber-200" : "bg-bg-page text-text-secondary border-border")}>
                  {task.time}
                </span>
              </div>
              <p className="text-xs font-semibold text-text-secondary mt-1 truncate">{task.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
