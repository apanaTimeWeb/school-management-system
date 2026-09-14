"use client";
import React from "react";
import { Users, UserCheck, Briefcase, CalendarOff } from "lucide-react";
import clsx from "clsx";

const KPI_DATA = [
  {
    id: 1,
    title: "Total Staff",
    value: "142",
    subtext: "85 Teachers, 57 Admin",
    trend: "+2 this month",
    trendType: "positive",
    icon: <Users size={24} className="text-indigo-600" />,
    bg: "bg-indigo-50",
    border: "border-indigo-100"
  },
  {
    id: 2,
    title: "Staff Present Today",
    value: "135",
    subtext: "95% Attendance Rate",
    trend: "+2% from yesterday",
    trendType: "positive",
    icon: <UserCheck size={24} className="text-emerald-600" />,
    bg: "bg-emerald-50",
    border: "border-emerald-100"
  },
  {
    id: 3,
    title: "On Leave",
    value: "7",
    subtext: "3 Sick, 4 Casual",
    trend: "2 Pending Requests",
    trendType: "alert",
    icon: <CalendarOff size={24} className="text-amber-600" />,
    bg: "bg-amber-50",
    border: "border-amber-100"
  },
  {
    id: 4,
    title: "Open Positions",
    value: "4",
    subtext: "2 TGT, 1 Clerk, 1 Peon",
    trend: "12 Candidates applied",
    trendType: "neutral",
    icon: <Briefcase size={24} className="text-sky-600" />,
    bg: "bg-sky-50",
    border: "border-sky-100"
  }
];

export default function HRDashboardKPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {KPI_DATA.map((kpi) => (
        <div 
          key={kpi.id} 
          className={clsx(
            "p-5 rounded-2xl border flex flex-col justify-between transition-all hover:shadow-md cursor-default",
            kpi.bg, kpi.border
          )}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
              {kpi.icon}
            </div>
            <span className={clsx(
              "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider bg-white/60 backdrop-blur-sm shadow-sm",
              kpi.trendType === 'positive' ? 'text-emerald-700' :
              kpi.trendType === 'alert' ? 'text-amber-700' :
              kpi.trendType === 'negative' ? 'text-rose-700' : 'text-sky-700'
            )}>
              {kpi.trend}
            </span>
          </div>
          
          <div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">{kpi.value}</h3>
            <p className="text-sm font-bold text-slate-600 mt-1">{kpi.title}</p>
            <p className="text-xs font-semibold text-slate-500 mt-1.5">{kpi.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
