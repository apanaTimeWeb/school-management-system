"use client";

import { Search, ChevronRight, Star } from "lucide-react";
import type { EmployeePerformanceRecord } from "../hr_performance_types/AdminHrPerformanceTypes";

interface AdminHrPerformanceListProps {
  appraisals: EmployeePerformanceRecord[];
  statusFilter: string; setStatusFilter: (s: string) => void;
  searchFilter: string; setSearchFilter: (s: string) => void;
  openRecord: (r: EmployeePerformanceRecord) => void;
}

export default function AdminHrPerformanceList({
  appraisals, statusFilter, setStatusFilter, searchFilter, setSearchFilter, openRecord
}: AdminHrPerformanceListProps) {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Draft': return <span className="bg-input text-foreground border border-border px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{status}</span>;
      case 'In Review': return <span className="bg-warning/10 text-warning border border-warning/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{status}</span>;
      default: return <span>{status}</span>;
    }
  };

  const getProgress = (r: EmployeePerformanceRecord) => {
    const totalWeight = r.goals.reduce((acc, g) => acc + g.weightage, 0);
    const totalAchieved = r.goals.reduce((acc, g) => acc + g.achieved, 0);
    if (totalWeight === 0) return 0;
    return Math.round((totalAchieved / totalWeight) * 100);
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search employee..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
          <option value="All">All Statuses</option>
          <option value="Draft">Draft</option>
          <option value="In Review">In Review</option>
        </select>
      </div>

      {/* Table */}
      {appraisals.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No active appraisals found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Cycle</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Goal Progress</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Current Rating</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {appraisals.map(r => (
                <tr key={r.id} className="border-b border-border hover:bg-primary/5 transition-colors group cursor-pointer" onClick={() => openRecord(r)}>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{r.employeeName}</span>
                      <span className="text-xs font-medium text-muted-foreground">{r.employeeId} - {r.designation}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-bold text-foreground">{r.cycle}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-[100px] h-2 bg-input rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all duration-500" style={{width: `${getProgress(r)}%`}}></div>
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">{getProgress(r)}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      {r.overallRating > 0 ? (
                        <>
                          <Star size={14} className="text-primary fill-primary" />
                          <span className="text-sm font-bold text-foreground">{r.overallRating}/5</span>
                        </>
                      ) : (
                         <span className="text-xs text-muted-foreground italic">Not rated</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">{getStatusBadge(r.status)}</td>
                  <td className="p-4 text-right">
                    <button className="p-2 bg-input text-foreground hover:bg-primary hover:text-white rounded-full transition-colors inline-flex items-center justify-center">
                      <ChevronRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
