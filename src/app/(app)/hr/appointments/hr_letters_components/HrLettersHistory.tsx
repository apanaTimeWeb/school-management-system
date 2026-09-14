"use client";

import { Search, Download, Printer } from "lucide-react";
import type { GeneratedLetter } from "../hr_letters_types/HrLettersTypes";

interface HrLettersHistoryProps {
  history: GeneratedLetter[];
  histType: string; setHistType: (s: string) => void;
  histSearch: string; setHistSearch: (s: string) => void;
}

export default function HrLettersHistory({
  history, histType, setHistType, histSearch, setHistSearch
}: HrLettersHistoryProps) {

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search by name or Ref No..." value={histSearch} onChange={(e) => setHistSearch(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
          </div>
          <select value={histType} onChange={(e) => setHistType(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
            <option value="All">All Letter Types</option>
            <option value="Appointment Letter">Appointment Letter</option>
            <option value="Experience Certificate">Experience Certificate</option>
            <option value="Relieving Letter">Relieving Letter</option>
            <option value="Salary/Employment Letter">Salary/Employment Letter</option>
          </select>
        </div>
      </div>

      {/* Table */}
      {history.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No generated letters found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee & Ref</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Letter Type</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Generated Date</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {history.map(letRecord => (
                <tr key={letRecord.id} className="border-b border-border hover:bg-primary/5 transition-colors group">
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{letRecord.employeeName}</span>
                      <span className="text-xs font-medium text-muted-foreground">{letRecord.employeeId} | {letRecord.referenceNo}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-bold text-foreground">{letRecord.letterType}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{letRecord.generatedDate}</span>
                      <span className="text-xs font-medium text-muted-foreground">by {letRecord.generatedBy}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      letRecord.status === 'Emailed' ? 'bg-info/10 text-info border border-info/20' : 
                      letRecord.status === 'Printed' ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' : 
                      'bg-success/10 text-success border border-success/20'
                    }`}>
                      {letRecord.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button title="Download PDF" className="p-2 bg-input border border-border text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50 rounded-md transition-colors shadow-sm">
                        <Download size={16} />
                      </button>
                      <button title="Print" className="p-2 bg-input border border-border text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50 rounded-md transition-colors shadow-sm">
                        <Printer size={16} />
                      </button>
                    </div>
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

