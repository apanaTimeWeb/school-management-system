"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalStaffAttendanceRecord } from '../attendance_types/PrincipalAttendance.types';
import { fetchPrincipalStaffAttendance } from '../attendance_api/PrincipalAttendanceApi';
import { Eye, Clock } from 'lucide-react';

export default function PrincipalAttendanceStaffTab() {
  const [staff, setStaff] = useState<PrincipalStaffAttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalStaffAttendance().then(data => {
      if (isMounted) {
        setStaff(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Present': return 'bg-success/20 text-success border-success/30';
      case 'Absent': return 'bg-danger/20 text-danger border-danger/30';
      case 'Late': return 'bg-warning/20 text-warning border-warning/30';
      default: return 'bg-page text-text-secondary border-border';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Staff Attendance</h2>
          <p className="text-[13px] text-text-secondary">Track daily attendance of all teaching and non-teaching staff.</p>
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search staff name..."
            className="bg-input border border-border rounded-md px-3 py-1.5 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary w-full md:w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4">Staff Name</th>
              <th className="p-4 w-40">Department</th>
              <th className="p-4 w-32">Role</th>
              <th className="p-4 w-32">Check-in Time</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-24 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((st) => (
              <tr key={st.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center text-[12px] font-bold text-text-primary">
                      {st.staffName.split(' ').map(n => n[0]).join('').replace('.', '').substring(0, 2)}
                    </div>
                    <span className="text-[14px] font-bold text-text-primary">{st.staffName}</span>
                  </div>
                </td>
                <td className="p-4 text-[13px] font-medium text-text-secondary">{st.department}</td>
                <td className="p-4 text-[13px] text-text-secondary">{st.role}</td>
                <td className="p-4">
                  {st.checkInTime ? (
                    <div className="flex items-center gap-1.5 text-[13px] text-text-primary font-medium">
                      <Clock size={14} className="text-info" />
                      {st.checkInTime}
                    </div>
                  ) : (
                    <span className="text-[13px] text-text-secondary italic">-</span>
                  )}
                </td>
                <td className="p-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusBadge(st.status)}`}>
                    {st.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="p-2 bg-info/10 border border-info/30 rounded-md text-info hover:bg-info hover:text-white hover:border-info transition-colors shadow-sm">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
