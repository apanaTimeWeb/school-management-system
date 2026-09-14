"use client";
import React from "react";
import { X, Search, ShieldCheck, MonitorSmartphone, KeySquare } from "lucide-react";
import { useAccountantAuditStore } from "../accountant_audit_store/useAccountantAuditStore";

export default function AccountantAuditModals() {
  const { isViewModalOpen, setViewModalOpen, selectedLog } = useAccountantAuditStore();

  if (!isViewModalOpen || !selectedLog) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
      <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
          <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <Search size={18} className="text-primary"/> Audit Trail Record
          </h3>
          <button onClick={() => setViewModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
        </div>
        
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-2 gap-4 border border-border rounded-xl p-4 bg-bg-page">
            <div>
              <p className="text-[11px] font-bold text-text-secondary uppercase">Action Details</p>
              <p className="text-sm font-bold text-text-primary mt-1">{selectedLog.what}</p>
              <p className="text-xs text-text-secondary mt-0.5">{selectedLog.when}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-text-secondary uppercase">Event Type</p>
              <p className="text-sm font-black text-text-primary mt-1">{selectedLog.eventType}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-text-primary flex items-center gap-2">
              <ShieldCheck size={16} className="text-success" /> Traceability
            </h4>
            <div className="grid grid-cols-2 gap-4 bg-bg-input p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <KeySquare size={18} className="text-text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-text-secondary">Actor</p>
                  <p className="text-sm font-bold text-text-primary">{selectedLog.who}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MonitorSmartphone size={18} className="text-text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-text-secondary">IP / Device</p>
                  <p className="text-sm font-bold text-text-primary">{selectedLog.ipDevice}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-text-primary">Diff (Value Changes)</h4>
            <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
              <div className="bg-danger/5 p-4 relative">
                <p className="text-xs font-semibold text-danger uppercase mb-2">Old Value</p>
                <p className="text-base font-bold text-text-primary line-through opacity-70">
                  {selectedLog.oldValue || 'N/A'}
                </p>
              </div>
              <div className="bg-success/5 p-4 relative">
                <p className="text-xs font-semibold text-success uppercase mb-2">New Value</p>
                <p className="text-base font-bold text-text-primary">
                  {selectedLog.newValue || 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {selectedLog.reason && (
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-text-secondary uppercase">Reason / Remarks</h4>
              <p className="text-sm text-text-primary p-3 bg-bg-input rounded border border-border italic">
                "{selectedLog.reason}"
              </p>
            </div>
          )}

          <div className="space-y-1">
            <h4 className="text-xs font-bold text-text-secondary uppercase">Reference ID</h4>
            <p className="text-sm text-text-primary font-mono bg-bg-input p-2 rounded inline-block">
              {selectedLog.transactionId}
            </p>
          </div>

        </div>
        
        <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
          <button onClick={() => setViewModalOpen(false)} className="px-5 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors">Close</button>
        </div>
      </div>
    </div>
  );
}
