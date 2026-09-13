"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalHostelStudent } from '../hostel_types/PrincipalHostel.types';
import { fetchPrincipalHostelStudents } from '../hostel_api/PrincipalHostelApi';
import { Search, Filter, Home, CheckCircle, XCircle, LogOut } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalHostelStudentsTab() {
  const [students, setStudents] = useState<PrincipalHostelStudent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalHostelStudents().then(data => {
      if (isMounted) {
        setStudents(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Student Allocation & Attendance</h2>
          <p className="text-[13px] text-text-secondary">View students allocated to hostel rooms and their daily attendance status.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search student, room..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-64 placeholder:text-text-secondary/50"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Student Info</th>
              <th className="p-4 w-64">Room Details</th>
              <th className="p-4 w-48 text-center">Status</th>
              <th className="p-4 w-40 text-center">Return Time (Out Pass)</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1">{student.studentName}</p>
                  <p className="text-[12px] text-text-secondary">Class: {student.classAndSection} | ID: {student.studentId}</p>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary flex items-center gap-2 mb-1">
                    <Home size={14} className="text-info"/> Room {student.roomNumber}
                  </p>
                  <p className="text-[12px] font-mono text-text-secondary bg-black/20 inline-block px-1.5 rounded">{student.block}</p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    student.todayAttendance === 'Present' ? 'bg-success/10 text-success border-success/30' :
                    student.todayAttendance === 'Absent' ? 'bg-danger/10 text-danger border-danger/30' :
                    student.todayAttendance === 'Out Pass' ? 'bg-warning/10 text-warning border-warning/30' :
                    'bg-info/10 text-info border-info/30'
                  )}>
                    {student.todayAttendance === 'Present' && <CheckCircle size={12}/>}
                    {student.todayAttendance === 'Absent' && <XCircle size={12}/>}
                    {student.todayAttendance === 'Out Pass' && <LogOut size={12}/>}
                    {student.todayAttendance}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <p className="text-[13px] font-bold text-text-primary">{student.outPassReturnTime || '-'}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
