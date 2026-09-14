"use client";

import { Search, DoorOpen } from "lucide-react";
import type { EmployeeExitRecord } from "../hr_exit_types/AdminHrExitTypes";

interface AdminHrExitHistoryProps {
  history: EmployeeExitRecord[];
  searchFilter: string; setSearchFilter: (s: string) => void;
}

export default function AdminHrExitHistory({
  history, searchFilter, setSearchFilter
}: AdminHrExitHistoryProps) {

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search exited employee..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
        </div>
      </div>

      {/* Table */}
      {history.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No historical exit records found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Role & Dept</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Relieved Date</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map(c => (
                <tr key={c.id} className="border-b border-border hover:bg-primary/5 transition-colors group">
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
                    <span className="text-sm font-bold text-foreground">{c.expectedRelievingDate}</span>
                  </td>
                  <td className="p-4">
                    <span className="bg-success/10 text-success border border-success/20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center w-fit gap-1"><DoorOpen size={12}/> Relieved</span>
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
