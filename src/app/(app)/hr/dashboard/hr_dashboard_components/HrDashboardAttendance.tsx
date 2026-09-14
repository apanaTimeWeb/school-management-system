"use client";

// RESPONSIBILITY: Renders attendance and leave statistics KPI cards and handles navigation.

import { CalendarCheck, CalendarX, Clock, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import type { HrDashboardStats } from "../hr_dashboard_types/HrDashboardTypes";

interface HrDashboardAttendanceProps {
  stats: HrDashboardStats;
}

export default function HrDashboardAttendance({ stats }: HrDashboardAttendanceProps) {
  const router = useRouter();
  const formatNum = (num: number) => new Intl.NumberFormat('en-IN').format(num);

  const kpis = [
    {
      title: "TODAY'S ATTENDANCE",
      value: `${stats.attendanceTodayPercent.toFixed(1)}%`,
      icon: <CalendarCheck size={20} className="text-success" />,
      route: "/hr/attendance?date=today",
      bgClass: "bg-success/10",
      borderHover: "hover:border-success",
      textHover: "group-hover:text-success"
    },
    {
      title: "ABSENT STAFF",
      value: formatNum(stats.absentStaff),
      icon: <CalendarX size={20} className="text-danger" />,
      route: "/hr/attendance?status=absent",
      bgClass: "bg-danger/10",
      borderHover: "hover:border-danger",
      textHover: "group-hover:text-danger"
    },
    {
      title: "ON LEAVE",
      value: formatNum(stats.onLeave),
      icon: <Clock size={20} className="text-warning" />,
      route: "/hr/leaves",
      bgClass: "bg-warning/10",
      borderHover: "hover:border-warning",
      textHover: "group-hover:text-warning"
    },
    {
      title: "NEW JOININGS",
      value: formatNum(stats.newJoinings),
      icon: <UserPlus size={20} className="text-info" />,
      route: "/hr/staff?filter=new",
      bgClass: "bg-info/10",
      borderHover: "hover:border-info",
      textHover: "group-hover:text-info"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {kpis.map((kpi, index) => (
        <div 
          key={index} 
          onClick={() => router.push(kpi.route)}
          className={`bg-card border border-border rounded-lg p-5 ${kpi.borderHover} motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg motion-safe:transition-all motion-safe:duration-200 cursor-pointer group relative overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${kpi.bgClass} to-transparent pointer-events-none opacity-50`}></div>
          
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-input border border-border flex items-center justify-center motion-safe:group-hover:scale-110 motion-safe:group-hover:shadow-md motion-safe:transition-all motion-safe:duration-200">
              {kpi.icon}
            </div>
            <span className={`text-xs font-semibold text-muted-foreground tracking-wider uppercase ${kpi.textHover} transition-colors`}>
              {kpi.title}
            </span>
          </div>
          
          <div className="relative z-10 mt-2">
            <h3 className="text-3xl font-bold text-foreground leading-none mb-2">
              {kpi.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

