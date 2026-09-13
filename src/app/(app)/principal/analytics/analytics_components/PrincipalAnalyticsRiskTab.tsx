"use client";
import React, { useState } from 'react';
import { PrincipalRiskStudent } from '../analytics_types/PrincipalAnalytics.types';
import { usePrincipalAnalyticsStore } from '../analytics_store/usePrincipalAnalyticsStore';
import { Search, Filter, AlertTriangle, UserX, BookX, Activity } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalAnalyticsRiskTab({ data }: { data: PrincipalRiskStudent[] }) {
  const { setSelectedRiskStudent } = usePrincipalAnalyticsStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(d => 
    d.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.classSection.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <AlertTriangle className="text-warning" size={20}/> At-Risk Students Overview
          </h2>
          <p className="text-[13px] text-text-secondary mt-1">Students requiring immediate attention due to academic, attendance, or behavioral issues.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search student or class..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-64 placeholder:text-text-secondary/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-56">Student Details</th>
              <th className="p-4 w-40">Risk Type</th>
              <th className="p-4">Reason & Insights</th>
              <th className="p-4 w-48 text-center">Last Action</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student) => (
              <tr key={student.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1">{student.studentName}</p>
                  <p className="text-[12px] text-text-secondary font-mono bg-black/20 inline-block px-1.5 rounded">{student.classSection}</p>
                </td>
                <td className="p-4">
                  <div className={clsx("inline-flex items-center gap-1.5 text-[11px] font-bold px-2 py-0.5 rounded border mb-1",
                    student.riskType === 'Attendance' ? 'bg-danger/10 text-danger border-danger/30' :
                    student.riskType === 'Academic' ? 'bg-warning/10 text-warning border-warning/30' :
                    'bg-info/10 text-info border-info/30'
                  )}>
                    {student.riskType === 'Attendance' && <UserX size={12}/>}
                    {student.riskType === 'Academic' && <BookX size={12}/>}
                    {student.riskType === 'Behavioral' && <Activity size={12}/>}
                    {student.riskType}
                  </div>
                  <p className={clsx("text-[11px] font-bold", student.riskLevel === 'High' ? 'text-danger' : 'text-warning')}>
                    Severity: {student.riskLevel}
                  </p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] text-text-primary line-clamp-2">{student.reason}</p>
                </td>
                <td className="p-4 text-center">
                  <p className="text-[12px] text-text-secondary italic">{student.lastActionTaken}</p>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedRiskStudent(student)}
                    className="px-4 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-black transition-colors"
                  >
                    Take Action
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary text-[14px]">
                  No at-risk students found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
