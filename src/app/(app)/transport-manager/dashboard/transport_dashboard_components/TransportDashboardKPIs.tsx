"use client";

import React from 'react';
import { Bus, Route, MapPin, Users, Activity, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';
import type { TransportKPIs } from '../transport_dashboard_types/transport_dashboard.types';

// RESPONSIBILITY: Renders the row of KPI cards for the Transport Dashboard

interface TransportDashboardKPIsProps {
  kpis: TransportKPIs;
}

export default function TransportDashboardKPIs({ kpis }: TransportDashboardKPIsProps) {
  const kpiData = [
    {
      label: 'TOTAL VEHICLES',
      value: kpis.totalVehicles,
      icon: <Bus size={18} className="text-zinc-400 group-hover:text-white group-active:text-yellow-400" />,
      trend: `${kpis.activeVehicles} Active`,
      trendColor: 'text-emerald-500',
      bgColor: 'bg-[var(--bg-card)]'
    },
    {
      label: 'TOTAL ROUTES',
      value: kpis.totalRoutes,
      icon: <Route size={18} className="text-zinc-400 group-hover:text-white group-active:text-yellow-400" />,
      trend: `${kpis.activeRoutes} Active`,
      trendColor: 'text-emerald-500',
      bgColor: 'bg-[var(--bg-card)]'
    },
    {
      label: 'TOTAL STOPS',
      value: kpis.totalStops,
      icon: <MapPin size={18} className="text-zinc-400 group-hover:text-white group-active:text-yellow-400" />,
      trend: 'All Routes',
      trendColor: 'text-zinc-500',
      bgColor: 'bg-[var(--bg-card)]'
    },
    {
      label: 'ASSIGNED STUDENTS',
      value: kpis.assignedStudents.toLocaleString(),
      icon: <Users size={18} className="text-zinc-400 group-hover:text-white group-active:text-yellow-400" />,
      trend: '↑ 12% vs last month',
      trendColor: 'text-emerald-500',
      bgColor: 'bg-[var(--bg-card)]'
    },
    {
      label: 'MAINTENANCE DUE',
      value: kpis.maintenanceVehicles,
      icon: <AlertTriangle size={18} className="text-zinc-400 group-hover:text-white group-active:text-yellow-400" />,
      trend: 'Action Required',
      trendColor: 'text-amber-500',
      bgColor: 'bg-[var(--bg-card)]'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      {kpiData.map((kpi, idx) => (
        <div
          key={idx}
          className="group relative flex flex-col p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg cursor-pointer overflow-hidden"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(250,204,21,0.05), rgba(255,255,255,0.01))' }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--bg-page)] border border-[var(--border)]">
              {kpi.icon}
            </div>
          </div>
          <span className="text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-1">
            {kpi.label}
          </span>
          <span className="text-2xl font-bold text-[var(--text-primary)] mb-2">
            {kpi.value}
          </span>
          <span className={`text-xs font-medium ${kpi.trendColor}`}>
            {kpi.trend}
          </span>
        </div>
      ))}
    </div>
  );
}
