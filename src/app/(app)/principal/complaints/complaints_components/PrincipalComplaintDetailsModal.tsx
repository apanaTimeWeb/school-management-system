"use client";
import React, { useState } from 'react';
import { X, MessageSquareWarning, Clock, Target, History, CheckCircle, ArrowUpRight } from 'lucide-react';
import { usePrincipalComplaintsStore } from '../complaints_store/usePrincipalComplaintsStore';
import { updateComplaintStatus } from '../complaints_api/PrincipalComplaintsApi';
import clsx from 'clsx';

export default function PrincipalComplaintDetailsModal() {
  const { selectedComplaint, setSelectedComplaint } = usePrincipalComplaintsStore();
  const [loading, setLoading] = useState(false);

  if (!selectedComplaint) return null;

  const handleAction = async (actionType: 'Resolve' | 'Escalate' | 'Assign') => {
    setLoading(true);
    await updateComplaintStatus(selectedComplaint.id, { status: actionType === 'Resolve' ? 'Resolved' : 'Escalated' });
    setSelectedComplaint(null);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-3xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <MessageSquareWarning className="text-warning" size={18} /> 
            Complaint Review
          </h2>
          <button 
            onClick={() => setSelectedComplaint(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className={clsx("px-2.5 py-1 rounded text-[11px] font-bold border", 
                selectedComplaint.source === 'Student' ? 'bg-primary/20 text-primary border-primary/30' :
                selectedComplaint.source === 'Parent' ? 'bg-info/20 text-info border-info/30' :
                'bg-warning/20 text-warning border-warning/30'
              )}>
                {selectedComplaint.source}
              </span>
              <span className={clsx("px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                selectedComplaint.priority === 'Critical' ? 'bg-danger/20 text-danger border-danger/30' :
                selectedComplaint.priority === 'High' ? 'bg-warning/20 text-warning border-warning/30' :
                selectedComplaint.priority === 'Medium' ? 'bg-info/20 text-info border-info/30' :
                'bg-success/20 text-success border-success/30'
              )}>
                Priority: {selectedComplaint.priority}
              </span>
              <span className={clsx("px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                selectedComplaint.status === 'Resolved' || selectedComplaint.status === 'Closed' ? 'bg-success/20 text-success border-success/30' :
                selectedComplaint.status === 'Escalated' ? 'bg-danger/20 text-danger border-danger/30' :
                'bg-page text-text-primary border-border'
              )}>
                Status: {selectedComplaint.status}
              </span>
            </div>
            <h3 className="text-[22px] font-bold text-text-primary leading-snug">{selectedComplaint.subject}</h3>
            <p className="text-[13px] text-text-secondary mt-1">Submitted by: {selectedComplaint.submittedBy} on {selectedComplaint.dateSubmitted}</p>
          </div>

          <div className="bg-card border border-border p-5 rounded-lg">
            <h4 className="text-[13px] font-bold text-text-primary mb-2 flex items-center gap-2"><MessageSquareWarning size={14}/> Description</h4>
            <p className="text-[14px] text-text-secondary leading-relaxed whitespace-pre-wrap">{selectedComplaint.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border p-4 rounded-lg">
              <h4 className="text-[12px] text-text-secondary mb-1 flex items-center gap-2"><Target size={14} className="text-warning"/> Assigned To</h4>
              <p className="text-[14px] font-bold text-text-primary">{selectedComplaint.assignedTo || 'Unassigned'}</p>
            </div>
            {selectedComplaint.resolution && (
              <div className="bg-card border border-success/30 p-4 rounded-lg">
                <h4 className="text-[12px] text-success mb-1 flex items-center gap-2"><CheckCircle size={14}/> Resolution Note</h4>
                <p className="text-[14px] font-bold text-text-primary">{selectedComplaint.resolution}</p>
              </div>
            )}
            {selectedComplaint.escalationNotes && (
              <div className="bg-card border border-danger/30 p-4 rounded-lg sm:col-span-2">
                <h4 className="text-[12px] text-danger mb-1 flex items-center gap-2"><ArrowUpRight size={14}/> Escalation Notes</h4>
                <p className="text-[14px] font-bold text-text-primary">{selectedComplaint.escalationNotes}</p>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-text-primary mb-3 border-b border-border pb-2 flex items-center gap-2"><History size={16}/> History Log</h4>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {selectedComplaint.historyLog.map((log, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-bg-main bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg border border-border bg-card shadow-sm">
                    <p className="text-[13px] font-bold text-text-primary">{log.action}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-text-secondary">{log.date}</span>
                      <span className="text-[11px] text-primary bg-primary/10 px-1.5 rounded">{log.by}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedComplaint(null)}
            className="px-6 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Close
          </button>

          {(selectedComplaint.status !== 'Resolved' && selectedComplaint.status !== 'Closed') && (
            <>
              <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }}
                disabled={loading}
                className="px-4 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
              >
                Assign
              </button>
              <button
                onClick={() => handleAction('Escalate')}
                disabled={loading}
                className="px-4 py-2 rounded-md bg-danger/10 hover:bg-danger border border-danger/30 hover:border-danger text-danger hover:text-white text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <ArrowUpRight size={16}/> Escalate
              </button>
              <button
                onClick={() => handleAction('Resolve')}
                disabled={loading}
                className="px-6 py-2 rounded-md bg-success hover:bg-success-hover text-white text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <CheckCircle size={16}/> Mark Resolved
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
