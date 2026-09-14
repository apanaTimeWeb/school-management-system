"use client";

import { ShieldCheck, ShieldAlert, FileSearch, Loader2, KeyRound } from "lucide-react";
import type { AuditLog, AuditActionType } from "../hr_audit_types/HrAuditTypes";

interface HrAuditListProps {
  logs: AuditLog[];
  isLoading: boolean;
  openDiffModal: (log: AuditLog) => void;
}

export default function HrAuditList({ logs, isLoading, openDiffModal }: HrAuditListProps) {

  const getActionBadge = (action: AuditActionType) => {
    switch(action) {
      case 'Salary Data Changed':
      case 'Exit': 
        return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-danger/10 text-danger border border-danger/20"><ShieldAlert size={12}/> {action}</span>;
      case 'Promotion':
      case 'Designation Changed':
      case 'Transfer':
      case 'Leave Approved':
        return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-info/10 text-info border border-info/20"><ShieldCheck size={12}/> {action}</span>;
      case 'Access Request':
        return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-warning/10 text-warning border border-warning/20"><KeyRound size={12}/> {action}</span>;
      default: 
        return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-success/10 text-success border border-success/20"><ShieldCheck size={12}/> {action}</span>;
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">

      <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm relative min-h-[400px]">
        
        {isLoading && (
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/60 backdrop-blur-[2px] z-10">
             <Loader2 size={32} className="animate-spin text-primary mb-2"/>
             <span className="text-xs font-bold text-muted-foreground">Fetching Secure Logs...</span>
           </div>
        )}

        {(!isLoading && logs.length === 0) ? (
           <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
             <span className="text-muted-foreground text-sm font-bold">No audit trails found for the selected filters.</span>
           </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[950px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Timestamp / ID</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Action Performed</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Target Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Performed By</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">View Diff</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id} className="border-b border-border hover:bg-input/30 transition-colors">
                  
                  <td className="p-4">
                    <p className="text-sm font-bold text-foreground">{new Date(log.timestamp).toLocaleString()}</p>
                    <p className="text-[10px] font-bold text-muted-foreground mt-0.5 font-mono">{log.id}</p>
                  </td>
                  
                  <td className="p-4">
                    {getActionBadge(log.action)}
                  </td>
                  
                  <td className="p-4">
                    <p className="text-sm font-bold text-foreground">{log.targetEmployeeName}</p>
                    <p className="text-[10px] font-bold text-muted-foreground">{log.targetEmployeeId}</p>
                  </td>
                  
                  <td className="p-4">
                    <p className="text-sm font-semibold text-foreground">{log.performedBy}</p>
                    <p className="text-[10px] font-bold text-muted-foreground">IP: {log.ipAddress}</p>
                  </td>
                  
                  <td className="p-4 text-right">
                    <button onClick={() => openDiffModal(log)} className="px-3 py-1.5 bg-input text-foreground font-bold text-xs rounded-md border border-border hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-1 shadow-sm">
                      <FileSearch size={14}/> Inspect Diff
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

