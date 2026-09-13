"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalStaffPerformance } from '../staff_types/PrincipalStaff.types';
import { fetchPrincipalStaffPerformance } from '../staff_api/PrincipalStaffApi';
import { Activity, Star, Calendar, UserCheck } from 'lucide-react';

export default function PrincipalStaffPerformanceTab() {
  const [performance, setPerformance] = useState<PrincipalStaffPerformance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalStaffPerformance().then(data => {
      if (isMounted) {
        setPerformance(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border">
        <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
          <Activity className="text-info" size={20} />
          Performance & Workload Overview
        </h2>
        <p className="text-[13px] text-text-secondary mt-1">Monitor teacher classes, attendance, and overall performance rating.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-48">Teacher Details</th>
              <th className="p-4 w-48">Workload (Per Week)</th>
              <th className="p-4 w-48">Attendance Summary</th>
              <th className="p-4 w-32 text-center">Rating</th>
              <th className="p-4">Recent Activity</th>
            </tr>
          </thead>
          <tbody>
            {performance.map((staff) => (
              <tr key={staff.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{staff.name}</p>
                  <p className="text-[12px] text-text-secondary">{staff.designation} ({staff.employeeId})</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1 text-[12px] text-text-secondary">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-primary"/> Classes: <strong className="text-text-primary">{staff.workload.totalClassesPerWeek}</strong></span>
                    <span className="flex items-center gap-2"><Activity size={12} className="text-success"/> Free Periods: <strong className="text-text-primary">{staff.workload.freePeriods}</strong></span>
                    <span className="flex items-center gap-2"><UserCheck size={12} className="text-warning"/> Substitutions: <strong className="text-text-primary">{staff.workload.substitutionCount}</strong></span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1 text-[12px] text-text-secondary">
                    <span>Working Days: <strong className="text-text-primary">{staff.attendanceSummary.totalWorkingDays}</strong></span>
                    <span>Present: <strong className="text-success">{staff.attendanceSummary.daysPresent}</strong></span>
                    <span>Leaves Taken: <strong className="text-warning">{staff.attendanceSummary.leavesTaken}</strong></span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star size={16} className={staff.performanceRating >= 4.5 ? "text-primary fill-primary" : "text-text-secondary"} />
                    <span className="text-[14px] font-bold text-text-primary">{staff.performanceRating}/5</span>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-[12px] text-text-secondary italic">"{staff.recentActivity}"</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
