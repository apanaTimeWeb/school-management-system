"use client";

import { X, Network, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import type { AuditLog } from "../hr_audit_types/AdminHrAuditTypes";

interface AdminHrAuditDiffModalProps {
  log: AuditLog | null;
  isOpen: boolean;
  close: () => void;
}

export default function AdminHrAuditDiffModal({ log, isOpen, close }: AdminHrAuditDiffModalProps) {
  
  if (!isOpen || !log) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-3xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="text-primary"/> Audit Trail: {log.action}
            </h2>
            <p className="text-sm font-medium text-muted-foreground mt-1 font-mono">Log ID: {log.id}</p>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-input/30 border border-border rounded-lg">
             <div className="space-y-1">
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Timestamp</p>
               <p className="text-sm font-bold text-foreground flex items-center gap-2"><Clock size={14} className="text-primary"/> {new Date(log.timestamp).toLocaleString()}</p>
             </div>
             <div className="space-y-1">
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">IP Address</p>
               <p className="text-sm font-bold text-foreground flex items-center gap-2"><Network size={14} className="text-info"/> {log.ipAddress}</p>
             </div>
             <div className="space-y-1">
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Performed By</p>
               <p className="text-sm font-bold text-foreground">{log.performedBy}</p>
             </div>
             <div className="space-y-1">
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Target Entity</p>
               <p className="text-sm font-bold text-foreground">{log.targetEmployeeName} <span className="text-muted-foreground font-mono">({log.targetEmployeeId})</span></p>
             </div>
          </div>

          {/* Diff Viewer */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 border-b border-border pb-2">State Changes (Diff)</h3>
            
            <div className="space-y-4">
              {log.changes.map((change, idx) => (
                <div key={idx} className="flex flex-col border border-border rounded-lg overflow-hidden">
                   <div className="bg-input/50 px-4 py-2 border-b border-border">
                     <p className="text-xs font-bold text-foreground">Field: <span className="font-mono text-primary">{change.field}</span></p>
                   </div>
                   <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-border bg-card">
                      <div className="flex-1 p-4 bg-danger/5">
                        <p className="text-[10px] font-bold text-danger uppercase tracking-wider mb-2">- Before</p>
                        <p className="text-sm font-mono text-foreground break-all">{change.before}</p>
                      </div>
                      
                      <div className="hidden sm:flex items-center justify-center p-2 bg-input/20">
                         <ArrowRight size={16} className="text-muted-foreground"/>
                      </div>

                      <div className="flex-1 p-4 bg-success/5">
                        <p className="text-[10px] font-bold text-success uppercase tracking-wider mb-2">+ After</p>
                        <p className="text-sm font-mono text-foreground break-all">{change.after}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
