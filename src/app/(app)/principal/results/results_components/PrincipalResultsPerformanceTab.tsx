"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalStudentPerformance } from '../results_types/PrincipalResults.types';
import { fetchPrincipalStudentPerformance } from '../results_api/PrincipalResultsApi';
import { Search, Filter, Eye } from 'lucide-react';

export default function PrincipalResultsPerformanceTab() {
  const [students, setStudents] = useState<PrincipalStudentPerformance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalStudentPerformance().then(data => {
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
          {[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Student Performance</h2>
          <p className="text-[13px] text-text-secondary">View detailed ranks, GPA, and grades for all students.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search student or roll no..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
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
              <th className="p-4 w-16 text-center">Rank</th>
              <th className="p-4 w-64">Student Details</th>
              <th className="p-4 w-32">Class</th>
              <th className="p-4 w-24 text-center">Score</th>
              <th className="p-4 w-24 text-center">Grade/GPA</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-24 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4 text-center">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-bold ${
                    student.rank === 1 ? 'bg-primary text-black' :
                    student.rank <= 3 ? 'bg-info text-white' :
                    'bg-page text-text-secondary border border-border'
                  }`}>
                    {student.rank}
                  </span>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{student.studentName}</p>
                  <p className="text-[12px] text-text-secondary">Roll No: {student.rollNo}</p>
                </td>
                <td className="p-4 text-[13px] font-medium text-text-secondary">
                  {student.className}
                </td>
                <td className="p-4 text-center">
                  <span className="text-[14px] font-bold text-text-primary">{student.percentage}%</span>
                </td>
                <td className="p-4 text-center">
                  <p className="text-[14px] font-bold text-primary">{student.grade}</p>
                  <p className="text-[11px] text-text-secondary">GPA: {student.gpa}</p>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                    student.status === 'Pass' ? 'bg-success/20 text-success border-success/30' : 'bg-danger/20 text-danger border-danger/30'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="p-1.5 rounded bg-page hover:bg-white/10 text-text-secondary hover:text-primary transition-colors inline-flex opacity-0 group-hover:opacity-100">
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
