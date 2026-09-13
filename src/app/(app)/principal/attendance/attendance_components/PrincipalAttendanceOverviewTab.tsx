"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalAttendanceOverview } from '../attendance_types/PrincipalAttendance.types';
import { fetchPrincipalAttendanceOverview } from '../attendance_api/PrincipalAttendanceApi';
import { Users, UserCheck, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';

export default function PrincipalAttendanceOverviewTab() {
  const [data, setData] = useState<PrincipalAttendanceOverview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalAttendanceOverview().then(res => {
      if (isMounted) {
        setData(res);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading || !data) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(2)].map((_, i) => <div key={i} className="h-40 bg-card border border-border rounded-xl animate-pulse" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* High-Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Stats */}
        <div className="bg-card border border-border rounded-xl p-5 hover:border-info/30 transition-colors shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-info/20 flex items-center justify-center text-info">
              <Users size={20} />
            </div>
            <h2 className="text-[16px] font-bold text-text-primary">Student Attendance</h2>
          </div>
          <div className="flex items-end gap-3 mb-6">
            <span className="text-[36px] font-black text-text-primary leading-none">{data.overallStudentAttendance}%</span>
            <span className="flex items-center text-[12px] font-bold text-success mb-1 bg-success/10 px-2 py-0.5 rounded">
              <TrendingUp size={14} className="mr-1" /> +1.2%
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-success/10 p-3 rounded-lg border border-success/20">
              <p className="text-[11px] font-bold text-success uppercase tracking-wider mb-1">Present</p>
              <p className="text-[18px] font-bold text-text-primary">{data.totalStudentsPresent}</p>
            </div>
            <div className="bg-danger/10 p-3 rounded-lg border border-danger/20">
              <p className="text-[11px] font-bold text-danger uppercase tracking-wider mb-1">Absent</p>
              <p className="text-[18px] font-bold text-text-primary">{data.totalStudentsAbsent}</p>
            </div>
            <div className="bg-warning/10 p-3 rounded-lg border border-warning/20">
              <p className="text-[11px] font-bold text-warning uppercase tracking-wider mb-1">Late</p>
              <p className="text-[18px] font-bold text-text-primary">{data.totalStudentsLate}</p>
            </div>
          </div>
        </div>

        {/* Staff Stats */}
        <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
              <UserCheck size={20} />
            </div>
            <h2 className="text-[16px] font-bold text-text-primary">Staff Attendance</h2>
          </div>
          <div className="flex items-end gap-3 mb-6">
            <span className="text-[36px] font-black text-text-primary leading-none">{data.overallStaffAttendance}%</span>
            <span className="flex items-center text-[12px] font-bold text-danger mb-1 bg-danger/10 px-2 py-0.5 rounded">
              <TrendingDown size={14} className="mr-1" /> -0.5%
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-success/10 p-3 rounded-lg border border-success/20">
              <p className="text-[11px] font-bold text-success uppercase tracking-wider mb-1">Present</p>
              <p className="text-[18px] font-bold text-text-primary">{data.totalStaffPresent}</p>
            </div>
            <div className="bg-danger/10 p-3 rounded-lg border border-danger/20">
              <p className="text-[11px] font-bold text-danger uppercase tracking-wider mb-1">Absent</p>
              <p className="text-[18px] font-bold text-text-primary">{data.totalStaffAbsent}</p>
            </div>
            <div className="bg-warning/10 p-3 rounded-lg border border-warning/20">
              <p className="text-[11px] font-bold text-warning uppercase tracking-wider mb-1">Late</p>
              <p className="text-[18px] font-bold text-text-primary">{data.totalStaffLate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Alerts */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="bg-danger/10 border-b border-danger/20 px-5 py-3 flex items-center gap-2">
          <AlertTriangle className="text-danger" size={18} />
          <h3 className="text-[14px] font-bold text-danger uppercase tracking-wider">Attendance Alerts</h3>
        </div>
        <div className="p-2 space-y-2">
          {data.alerts.length === 0 ? (
            <p className="p-4 text-[13px] text-text-secondary text-center">No alerts at the moment.</p>
          ) : (
            data.alerts.map((alert) => (
              <div key={alert.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-page hover:bg-white/5 border border-border/50 rounded-lg transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      alert.severity === 'high' ? 'bg-danger/20 text-danger border border-danger/30' : 'bg-warning/20 text-warning border border-warning/30'
                    }`}>
                      {alert.type}
                    </span>
                    <span className="text-[11px] text-text-secondary">{alert.date}</span>
                  </div>
                  <p className="text-[14px] font-medium text-text-primary">{alert.message}</p>
                </div>
                <button className="px-4 py-2 bg-page border border-border rounded-md text-[12px] font-bold hover:bg-white/10 transition-colors shrink-0">
                  Take Action
                </button>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
