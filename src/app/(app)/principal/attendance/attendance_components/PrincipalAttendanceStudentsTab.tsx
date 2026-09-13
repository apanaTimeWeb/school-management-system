"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalStudentAttendanceClass } from '../attendance_types/PrincipalAttendance.types';
import { fetchPrincipalStudentAttendance } from '../attendance_api/PrincipalAttendanceApi';
import { Eye, TrendingDown, Users } from 'lucide-react';

export default function PrincipalAttendanceStudentsTab() {
  const [classes, setClasses] = useState<PrincipalStudentAttendanceClass[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalStudentAttendance().then(data => {
      if (isMounted) {
        setClasses(data);
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

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Class-wise Attendance</h2>
          <p className="text-[13px] text-text-secondary">Overview of today's student attendance across all sections.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-input border border-border rounded-md px-3 py-1.5 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
            <option>All Classes</option>
            <option>Class 9</option>
            <option>Class 10</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-32">Class & Section</th>
              <th className="p-4">Class Teacher</th>
              <th className="p-4 w-24 text-center">Strength</th>
              <th className="p-4 w-24 text-center">Present</th>
              <th className="p-4 w-24 text-center">Absent</th>
              <th className="p-4 w-32 text-center">Percentage</th>
              <th className="p-4 w-24 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <span className="text-[14px] font-bold text-text-primary">{cls.className}</span>
                  <span className="text-[12px] font-medium text-text-secondary ml-2 bg-white/5 px-2 py-0.5 rounded border border-border/50">Sec {cls.section}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-info" />
                    <span className="text-[14px] font-medium text-text-primary">{cls.classTeacher}</span>
                  </div>
                </td>
                <td className="p-4 text-center text-[14px] font-medium text-text-secondary">{cls.totalStudents}</td>
                <td className="p-4 text-center text-[14px] font-bold text-success">{cls.present}</td>
                <td className="p-4 text-center text-[14px] font-bold text-danger">{cls.absent}</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-[14px] font-bold ${cls.attendancePercentage < 80 ? 'text-danger' : 'text-text-primary'}`}>
                      {cls.attendancePercentage}%
                    </span>
                    {cls.attendancePercentage < 80 && <TrendingDown size={14} className="text-danger" />}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="p-2 bg-primary/10 border border-primary/30 rounded-md text-primary hover:bg-primary hover:text-black hover:border-primary transition-colors shadow-sm">
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
