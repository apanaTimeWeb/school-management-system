"use client";

import { Search, ChevronRight } from "lucide-react";
import type { EmployeeExitRecord } from "../hr_exit_types/HrExitTypes";

interface HrExitListProps {
  pipeline: EmployeeExitRecord[];
  statusFilter: string; setStatusFilter: (s: string) => void;
  searchFilter: string; setSearchFilter: (s: string) => void;
  openExit: (r: EmployeeExitRecord) => void;
}

export default function HrExitList({
  pipeline, statusFilter, setStatusFilter, searchFilter, setSearchFilter, openExit
}: HrExitListProps) {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Resignation Submitted': return <span className="bg-input text-foreground border border-border px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{status}</span>;
      case 'Notice Period': return <span className="bg-warning/10 text-warning border border-warning/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{status}</span>;
      case 'Clearance Pending': return <span className="bg-danger/10 text-danger border border-danger/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{status}</span>;
      case 'Relieved': return <span className="bg-success/10 text-success border border-success/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{status}</span>;
      default: return <span>{status}</span>;
    }
  };

  const getProgress = (c: EmployeeExitRecord) => {
    const totalChk = c.clearanceChecklist.length;
    const doneChk = c.clearanceChecklist.filter(ch => ch.isCleared).length;
    if (totalChk === 0) return 0;
    return Math.round((doneChk / totalChk) * 100);
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search offboardings..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
            <option value="All">All Statuses</option>
            <option value="Resignation Submitted">Resignation Submitted</option>
            <option value="Notice Period">Notice Period</option>
            <option value="Clearance Pending">Clearance Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      {pipeline.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No employees currently in offboarding pipeline.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Role & Dept</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Resignation & Relieving</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Clearance Progress</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {pipeline.map(c => (
                <tr key={c.id} className="border-b border-border hover:bg-primary/5 transition-colors group cursor-pointer" onClick={() => openExit(c)}>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{c.employeeName}</span>
                      <span className="text-xs font-medium text-muted-foreground">{c.employeeId}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{c.designation}</span>
                      <span className="text-xs font-medium text-muted-foreground">{c.department}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-muted-foreground">Resigned: {c.resignationDate}</span>
                      <span className="text-sm font-bold text-foreground">Relieving: {c.expectedRelievingDate}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-[100px] h-2 bg-input rounded-full overflow-hidden">
                        <div className="h-full bg-danger transition-all duration-500" style={{width: `${getProgress(c)}%`}}></div>
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">{getProgress(c)}%</span>
                    </div>
                  </td>
                  <td className="p-4">{getStatusBadge(c.status)}</td>
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

