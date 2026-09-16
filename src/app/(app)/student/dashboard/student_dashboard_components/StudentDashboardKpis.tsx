"use client";

import React from 'react';
import type { DashboardKpi } from '../student_dashboard_types/student_dashboard_types';
import { IndianRupee, Percent, TrendingUp, CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  kpis: DashboardKpi;
}

/**
 * RESPONSIBILITY: Renders the core KPIs like Attendance % and Fee Dues. 
 * Each card is clickable and navigates to the relevant module.
 */
export default function StudentDashboardKpis({ kpis }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Attendance KPI - Clickable */}
      <Link href="/student/attendance" className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between motion-safe:transition-all motion-safe:duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-success/30 relative overflow-hidden group cursor-pointer block">
        <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-bl-full -z-10 group-hover:bg-success/10 transition-colors" />
        
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Percent className="text-success w-5 h-5" />
          </div>
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider flex items-center gap-1">
            Attendance <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-text-primary">{kpis.attendancePercentage}%</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-semibold text-success flex items-center gap-1 bg-success/10 px-2 py-0.5 rounded-full">
              <TrendingUp size={12} /> Good
            </span>
            <span className="text-xs text-text-secondary">{kpis.totalPresent} / {kpis.totalWorkingDays} days present</span>
          </div>
        </div>
      </Link>

      {/* Fee Due KPI - Clickable */}
      <Link href="/student/fees" className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between motion-safe:transition-all motion-safe:duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-danger/30 relative overflow-hidden group cursor-pointer block">
        <div className="absolute top-0 right-0 w-32 h-32 bg-danger/5 rounded-bl-full -z-10 group-hover:bg-danger/10 transition-colors" />
        
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-lg bg-danger/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <IndianRupee className="text-danger w-5 h-5" />
          </div>
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider flex items-center gap-1">
            Fee Dues <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-text-primary">
            ₹{new Intl.NumberFormat('en-IN').format(kpis.feeDueAmount)}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-semibold text-danger flex items-center gap-1 bg-danger/10 px-2 py-0.5 rounded-full">
              <CalendarDays size={12} /> Due on {kpis.feeDueDate}
            </span>
            <span className="text-xs font-bold text-primary ml-auto group-hover:underline">Pay Now →</span>
          </div>
        </div>
      </Link>

    </div>
  );
}
