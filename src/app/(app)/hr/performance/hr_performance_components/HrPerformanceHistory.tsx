"use client";

import { Search, Star, Trophy } from "lucide-react";
import type { EmployeePerformanceRecord } from "../hr_performance_types/HrPerformanceTypes";

interface HrPerformanceHistoryProps {
  history: EmployeePerformanceRecord[];
  searchFilter: string; setSearchFilter: (s: string) => void;
}

export default function HrPerformanceHistory({
  history, searchFilter, setSearchFilter
}: HrPerformanceHistoryProps) {

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search historical records..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
        </div>
      </div>

      {/* Table */}
      {history.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No historical performance records found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Completed Cycle</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Final Rating</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Promotion Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map(r => (
                <tr key={r.id} className="border-b border-border hover:bg-primary/5 transition-colors group">
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{r.employeeName}</span>
                      <span className="text-xs font-medium text-muted-foreground">{r.employeeId} - {r.designation}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{r.cycle}</span>
                      <span className="text-[10px] text-muted-foreground">On: {r.completedDate}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-primary fill-primary" />
                      <span className="text-lg font-bold text-foreground">{r.overallRating}/5</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    {r.promotionRecommended ? (
                      <span className="bg-success/10 text-success border border-success/20 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-end w-fit ml-auto gap-1">
                        <Trophy size={14}/> Recommended
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">No Change</span>
                    )}
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

