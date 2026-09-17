"use client";

import React, { useEffect } from 'react';
import { X, Clock, User, Monitor, Hash, ShieldAlert, Code2, ArrowRight } from 'lucide-react';
import type { AuditRecord } from '../audit_history_types/audit_history.types';
import { ENTITY_TYPE_CONFIGS, ACTION_TYPE_CONFIGS } from '../audit_history_constants/audit_history.constants';

// RESPONSIBILITY: Renders the modal for viewing detailed audit logs and JSON diffs

interface AuditHistoryDetailModalProps {
  record: AuditRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditHistoryDetailModal({ record, isOpen, onClose }: AuditHistoryDetailModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const entityConfig = ENTITY_TYPE_CONFIGS[record.entityType] || ENTITY_TYPE_CONFIGS.MANUAL_ADJUSTMENT;
  const actionConfig = ACTION_TYPE_CONFIGS[record.actionType] || ACTION_TYPE_CONFIGS.UPDATE;

  const formatTimeFull = (isoDate: string) => {
    return new Date(isoDate).toLocaleString('en-IN', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  };

  // Helper to format JSON for display
  const formatJson = (obj: any) => {
    if (!obj) return 'No payload data.';
    return JSON.stringify(obj, null, 2);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-4xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-card)] shrink-0">
          <div className="flex items-center gap-4">
             <div 
               className="w-12 h-12 rounded-xl flex items-center justify-center border-2 flex-shrink-0"
               style={{ backgroundColor: entityConfig.bg, borderColor: entityConfig.color + '40', color: entityConfig.color }}
             >
                <ShieldAlert size={24} />
             </div>
             <div>
                <div className="flex items-center gap-2 mb-1">
                   <h2 className="text-xl font-bold text-[var(--text-primary)]">Audit Log Details</h2>
                   <span className="text-[10px] text-[var(--text-secondary)] font-mono bg-[var(--bg-input)] px-2 py-0.5 rounded border border-[var(--border)]">
                      {record.id}
                   </span>
                </div>
                <div className="flex items-center gap-2">
                   <span 
                     className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                     style={{ backgroundColor: actionConfig.bg, color: actionConfig.color, borderColor: actionConfig.color + '40' }}
                   >
                     {actionConfig.label}
                   </span>
                   <span className="text-[var(--text-secondary)]">•</span>
                   <span 
                     className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                     style={{ backgroundColor: entityConfig.bg, color: entityConfig.color, borderColor: entityConfig.color + '40' }}
                   >
                     {entityConfig.label}
                   </span>
                </div>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-red-500 hover:bg-[rgba(239,68,68,0.1)] rounded-md transition-colors self-start"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-[var(--bg-page)] p-6 space-y-6">
           
           {/* Context Card */}
           <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-5">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Event Description</h3>
              <p className="text-[var(--text-primary)] text-sm leading-relaxed mb-4">
                {record.description}
              </p>
              
              <div className="flex flex-col gap-1 border-t border-[var(--border)] pt-4 mt-4">
                 <span className="text-xs text-[var(--text-secondary)] uppercase font-semibold">Target Entity</span>
                 <span className="font-bold text-[var(--primary)]">{record.entityName} <span className="text-[var(--text-secondary)] font-mono font-normal text-xs ml-2">({record.entityId})</span></span>
              </div>
           </div>

           {/* Metadata Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Actor Info */}
             <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 space-y-3">
                <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-2 border-b border-[var(--border)] pb-2">
                   <User size={14} /> Actor Context
                </h4>
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] text-[var(--text-secondary)] uppercase">Name</span>
                   <span className="font-bold text-[var(--text-primary)]">{record.performedByUserName}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-[var(--text-secondary)] uppercase">User ID</span>
                      <span className="font-mono text-xs text-[var(--text-primary)] flex items-center gap-1"><Hash size={12}/> {record.performedByUserId}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-[var(--text-secondary)] uppercase">Role</span>
                      <span className="font-medium text-xs text-[var(--primary)]">{record.performedByUserRole}</span>
                   </div>
                </div>
             </div>

             {/* Environment Info */}
             <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 space-y-3">
                <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-2 border-b border-[var(--border)] pb-2">
                   <Monitor size={14} /> Environment Context
                </h4>
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] text-[var(--text-secondary)] uppercase">Timestamp</span>
                   <span className="font-bold text-xs text-[var(--text-primary)] flex items-center gap-1.5"><Clock size={12} className="text-[var(--primary)]"/> {formatTimeFull(record.timestamp)}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-[var(--text-secondary)] uppercase">IP Address</span>
                      <span className="font-mono text-xs text-[var(--text-primary)]">{record.ipAddress}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-[var(--text-secondary)] uppercase">Device / Browser</span>
                      <span className="font-medium text-xs text-[var(--text-secondary)]">{record.device}</span>
                   </div>
                </div>
             </div>
           </div>

           {/* Data Payload Diff */}
           {(record.oldValues || record.newValues) && (
             <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden flex flex-col">
                <div className="p-3 border-b border-[var(--border)] bg-[rgba(250,204,21,0.05)]">
                   <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-2">
                     <Code2 size={14} className="text-amber-500"/> Payload Diff Inspector
                   </h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
                   
                   {/* Old Values */}
                   <div className="flex flex-col">
                      <div className="px-4 py-2 bg-[rgba(239,68,68,0.05)] border-b border-[var(--border)] text-xs font-bold text-red-500 uppercase flex items-center justify-between">
                         <span>Previous State</span>
                         {record.actionType === 'CREATE' && <span className="text-[9px] bg-red-500/10 px-1.5 py-0.5 rounded">Not Applicable</span>}
                      </div>
                      <div className="p-4 bg-[#1e1e1e] flex-1 overflow-x-auto">
                         <pre className="text-xs font-mono text-red-400">
                            {formatJson(record.oldValues)}
                         </pre>
                      </div>
                   </div>

                   {/* New Values */}
                   <div className="flex flex-col relative">
                      {/* Arrow indicator for desktop */}
                      <div className="hidden md:flex absolute top-1/2 -left-3.5 -translate-y-1/2 w-7 h-7 bg-[var(--bg-card)] border border-[var(--border)] rounded-full items-center justify-center text-[var(--text-secondary)] z-10 shadow-sm">
                         <ArrowRight size={14} />
                      </div>
                      
                      <div className="px-4 py-2 bg-[rgba(16,185,129,0.05)] border-b border-[var(--border)] text-xs font-bold text-emerald-500 uppercase flex items-center justify-between">
                         <span>New State</span>
                         {record.actionType === 'DELETE' && <span className="text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded">Not Applicable</span>}
                      </div>
                      <div className="p-4 bg-[#1e1e1e] flex-1 overflow-x-auto">
                         <pre className="text-xs font-mono text-emerald-400">
                            {formatJson(record.newValues)}
                         </pre>
                      </div>
                   </div>

                </div>
             </div>
           )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex justify-end shrink-0">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-md border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-input)] transition-colors"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
}
