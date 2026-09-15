"use client";

import React from 'react';
import type { StudentAttendanceData } from '../student_attendance_types/student_attendance_types';
import { AlertTriangle, CheckCircle, XCircle, Clock, CalendarDays, Percent } from 'lucide-react';

interface Props {
  data: StudentAttendanceData;
}

/**
 * RESPONSIBILITY: Renders top-level attendance KPIs and Low Attendance Alert.
 */
export default function StudentAttendanceKpis({ data }: Props) {
  
  const KpiCard = ({ title, value, icon, bgClass, textClass }: any) => (
    <div className={`p-4 rounded-xl border border-border flex items-center justify-between hover:shadow-md motion-safe:transition-all hover:-translate-y-1 ${bgClass}`}>
      <div className="flex flex-col">
        <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">{title}</span>
        <span className={`text-2xl font-bold mt-1 ${textClass}`}>{value}</span>
      </div>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm ${textClass}`}>
        {icon}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Low Attendance Alert */}
      {data.isLowAttendance && (
        <div className="bg-danger/10 border-l-4 border-danger rounded-r-lg p-4 flex gap-4 items-start shadow-sm shadow-danger/5">
          <AlertTriangle className="text-danger shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="text-sm font-bold text-danger">Low Attendance Warning</h4>
            <p className="text-xs text-danger/80 mt-1">
              Your overall attendance is {data.overallPercentage}%, which is below the required 75% threshold. Please ensure regular attendance to avoid academic penalties.
            </p>
          </div>
        </div>
      )}

      {/* KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Main Percentage KPI */}
        <div className="col-span-2 md:col-span-1 lg:col-span-1 p-4 rounded-xl bg-card border border-border flex flex-col items-center justify-center hover:border-primary/50 motion-safe:transition-colors relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 -z-10 group-hover:bg-primary/10 transition-colors" />
          <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mb-2 flex items-center gap-1">
            <Percent size={12} /> Overall
          </span>
          <span className={`text-4xl font-bold ${data.overallPercentage >= 75 ? 'text-success' : 'text-danger'}`}>
            {data.overallPercentage}%
          </span>
        </div>

        <KpiCard title="Present" value={data.totalPresent} icon={<CheckCircle size={20} />} bgClass="bg-success/5 border-success/20" textClass="text-success" />
        <KpiCard title="Absent" value={data.totalAbsent} icon={<XCircle size={20} />} bgClass="bg-danger/5 border-danger/20" textClass="text-danger" />
        <KpiCard title="Late" value={data.totalLate} icon={<Clock size={20} />} bgClass="bg-amber-500/5 border-amber-500/20" textClass="text-amber-500" />
        <KpiCard title="Leave" value={data.totalLeave} icon={<CalendarDays size={20} />} bgClass="bg-blue-500/5 border-blue-500/20" textClass="text-blue-500" />
        
      </div>
    </div>
  );
}
