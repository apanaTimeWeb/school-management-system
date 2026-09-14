"use client";

import { Search, ChevronRight } from "lucide-react";
import type { TeacherWorkloadRecord } from "../hr_workload_types/AdminHrWorkloadTypes";

interface AdminHrWorkloadListProps {
  records: TeacherWorkloadRecord[];
  deptFilter: string; setDeptFilter: (s: string) => void;
  searchFilter: string; setSearchFilter: (s: string) => void;
  openRecord: (r: TeacherWorkloadRecord) => void;
}

export default function AdminHrWorkloadList({
  records, deptFilter, setDeptFilter, searchFilter, setSearchFilter, openRecord
}: AdminHrWorkloadListProps) {

  const getStatusBadge = (total: number, max: number) => {
    const ratio = total / max;
    if (ratio > 1) return <span className="bg-danger/10 text-danger border border-danger/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Overloaded</span>;
    if (ratio < 0.5) return <span className="bg-info/10 text-info border border-info/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Underutilized</span>;
    return <span className="bg-success/10 text-success border border-success/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Optimal</span>;
  };

  const getProgressColor = (ratio: number) => {
    if (ratio > 1) return 'bg-danger';
    if (ratio < 0.5) return 'bg-info';
    return 'bg-success';
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search teacher..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
        </div>
        <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
          <option value="All">All Departments</option>
          <option value="Science">Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physical Education">Physical Education</option>
        </select>
      </div>

      {/* Table */}
      {records.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No workload records found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Teacher</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Assigned Classes</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Workload Progress (Periods/Wk)</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map(r => {
                const totalPeriods = r.assignments.reduce((acc, curr) => acc + curr.periodsPerWeek, 0);
                const ratio = totalPeriods / r.maxPeriodsAllowed;
                const pColor = getProgressColor(ratio);
                const pWidth = Math.min((totalPeriods / r.maxPeriodsAllowed) * 100, 100);

                return (
                  <tr key={r.id} className="border-b border-border hover:bg-primary/5 transition-colors group cursor-pointer" onClick={() => openRecord(r)}>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{r.employeeName}</span>
                        <span className="text-xs font-medium text-muted-foreground">{r.department}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-1 flex-wrap max-w-[200px]">
                        {r.assignments.map(a => <span key={a.id} className="text-[10px] font-bold bg-input px-1.5 py-0.5 rounded border border-border">{a.classAssigned}</span>)}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1 w-full max-w-[200px]">
                        <div className="flex justify-between text-[10px] font-bold text-muted-foreground">
                          <span>{totalPeriods} Periods</span>
                          <span>Max: {r.maxPeriodsAllowed}</span>
                        </div>
                        <div className="w-full h-1.5 bg-input rounded-full overflow-hidden">
                          <div className={`h-full ${pColor} transition-all duration-500`} style={{width: `${pWidth}%`}}></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{getStatusBadge(totalPeriods, r.maxPeriodsAllowed)}</td>
                    <td className="p-4 text-right">
                      <button className="p-2 bg-input text-foreground hover:bg-primary hover:text-white rounded-full transition-colors inline-flex items-center justify-center">
                        <ChevronRight size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
