"use client";

import { User, Eye, Loader2 } from "lucide-react";
import type { EmployeeSearchResult } from "../hr_search_types/HrSearchTypes";

interface HrSearchResultsProps {
  results: EmployeeSearchResult[];
  totalCount: number;
  isSearching: boolean;
  openProfile: (p: EmployeeSearchResult) => void;
}

export default function HrSearchResults({ results, totalCount, isSearching, openProfile }: HrSearchResultsProps) {

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-success/10 text-success border-success/20';
      case 'On Leave': return 'bg-warning/10 text-warning border-warning/20';
      case 'Resigned': 
      case 'Terminated': return 'bg-danger/10 text-danger border-danger/20';
      default: return 'bg-input text-muted-foreground border-border';
    }
  };

  const getDocBadge = (status: string) => {
    switch(status) {
      case 'Verified': return 'bg-success/10 text-success';
      case 'Pending': return 'bg-warning/10 text-warning';
      case 'Expired': return 'bg-danger/10 text-danger';
      default: return 'bg-input text-muted-foreground';
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-foreground">
          Search Results <span className="ml-2 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">{totalCount} found</span>
        </h3>
      </div>

      <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm relative min-h-[300px]">
        
        {isSearching && (
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/60 backdrop-blur-[2px] z-10">
             <Loader2 size={32} className="animate-spin text-primary mb-2"/>
             <span className="text-xs font-bold text-muted-foreground">Searching database...</span>
           </div>
        )}

        {(!isSearching && results.length === 0) ? (
           <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
             <span className="text-muted-foreground text-sm font-bold">No employees found matching the filters.</span>
           </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Role & Dept</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employment Details</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status / Docs</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Profile</th>
              </tr>
            </thead>
            <tbody>
              {results.map(r => (
                <tr key={r.id} className="border-b border-border hover:bg-input/30 transition-colors">
                  
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><User size={14}/></div>
                      <div>
                        <p className="text-sm font-bold text-foreground leading-tight">{r.name}</p>
                        <p className="text-[10px] font-bold text-muted-foreground">{r.employeeId}</p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="p-4">
                    <p className="text-sm font-semibold text-foreground leading-tight">{r.designation}</p>
                    <p className="text-[10px] font-bold text-muted-foreground">{r.department}</p>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-muted-foreground">Joined: <span className="text-foreground">{r.joiningDate}</span></span>
                      <span className="text-[10px] font-bold text-muted-foreground">Type: <span className="text-foreground">{r.employmentType}</span></span>
                      <span className="text-[10px] font-bold text-muted-foreground">Loc: <span className="text-foreground">{r.location}</span></span>
                    </div>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex flex-col items-start gap-1.5">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${getStatusBadge(r.status)}`}>{r.status}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${getDocBadge(r.documentStatus)}`}>Docs: {r.documentStatus}</span>
                    </div>
                  </td>
                  
                  <td className="p-4 text-right">
                    <button onClick={() => openProfile(r)} className="px-3 py-1.5 bg-input text-foreground font-bold text-xs rounded-md border border-border hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-1 shadow-sm">
                      <Eye size={14}/> View
                    </button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

