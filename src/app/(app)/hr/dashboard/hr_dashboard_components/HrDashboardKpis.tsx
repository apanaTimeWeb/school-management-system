"use client";

// RESPONSIBILITY: Renders the core employee count KPI cards and handles navigation on click.

import { Users, UserCheck, GraduationCap, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import type { HrDashboardStats } from "../hr_dashboard_types/HrDashboardTypes";

interface HrDashboardKpisProps {
  stats: HrDashboardStats;
}

export default function HrDashboardKpis({ stats }: HrDashboardKpisProps) {
  const router = useRouter();
  const formatNum = (num: number) => new Intl.NumberFormat('en-IN').format(num);

  const kpis = [
    {
      title: "TOTAL EMPLOYEES",
      value: formatNum(stats.totalEmployees),
      icon: <Users size={20} className="text-primary" />,
      trend: "↑ 2% vs last month",
      trendUp: true,
      route: "/hr/staff",
      bgClass: "bg-primary/10",
      borderHover: "hover:border-primary",
      textHover: "group-hover:text-primary"
    },
    {
      title: "ACTIVE STAFF",
      value: formatNum(stats.activeStaff),
      icon: <UserCheck size={20} className="text-success" />,
      trend: "Steady",
      trendUp: true,
      route: "/hr/staff?status=active",
      bgClass: "bg-success/10",
      borderHover: "hover:border-success",
      textHover: "group-hover:text-success"
    },
    {
      title: "TEACHERS",
      value: formatNum(stats.teachers),
      icon: <GraduationCap size={20} className="text-purple-500" />,
      trend: "—",
      trendUp: true,
      route: "/hr/staff?role=teacher",
      bgClass: "bg-purple-500/10",
      borderHover: "hover:border-purple-500",
      textHover: "group-hover:text-purple-500"
    },
    {
      title: "NON-TEACHING",
      value: formatNum(stats.nonTeachingStaff),
      icon: <Briefcase size={20} className="text-info" />,
      trend: "—",
      trendUp: true,
      route: "/hr/staff?role=non-teaching",
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
            <p className={`text-xs font-medium ${kpi.trendUp ? 'text-success' : 'text-danger'}`}>
              {kpi.trend}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

