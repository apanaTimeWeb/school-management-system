"use client";
import React, { useState } from 'react';
import { X, AlertTriangle, CheckCircle } from 'lucide-react';
import { usePrincipalInventoryStore } from '../inventory_store/usePrincipalInventoryStore';
import { resolveInventoryIssue } from '../inventory_api/PrincipalInventoryApi';
import clsx from 'clsx';

export default function PrincipalInventoryIssueModal() {
  const { selectedIssue, setSelectedIssue } = usePrincipalInventoryStore();
  const [remarks, setRemarks] = useState('');
  const [loading, setLoading] = useState(false);

  if (!selectedIssue) return null;

  const handleAction = async () => {
    setLoading(true);
    await resolveInventoryIssue(selectedIssue.id, remarks);
    setSelectedIssue(null);
    setLoading(false);
    setRemarks('');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <AlertTriangle className="text-warning" size={18} /> 
            Inventory Issue Review
          </h2>
          <button 
            onClick={() => setSelectedIssue(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
          
          <div className="flex flex-col items-start gap-4 border-b border-border pb-4">
            <div className="w-full flex justify-between items-start">
              <div>
                <span className={clsx("text-[11px] font-bold px-2 py-0.5 rounded mb-2 inline-block border", 
                    selectedIssue.issueType === 'Lost' ? 'bg-danger/10 text-danger border-danger/30' :
                    selectedIssue.issueType === 'Damaged' ? 'bg-warning/10 text-warning border-warning/30' :
                    'bg-info/10 text-info border-info/30'
                )}>
                  {selectedIssue.issueType}
                </span>
                <h3 className="text-[18px] font-bold text-text-primary mb-1">{selectedIssue.assetName}</h3>
                <p className="text-[12px] text-text-secondary font-mono">ID: {selectedIssue.assetId}</p>
              </div>
              <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border shrink-0", 
                selectedIssue.status === 'Pending Review' ? 'bg-warning/10 text-warning border-warning/30' : 'bg-success/10 text-success border-success/30'
              )}>
                {selectedIssue.status}
              </span>
            </div>
          </div>

          <div className="bg-card border border-border p-3 rounded-lg">
            <p className="text-[11px] text-text-secondary mb-1">Reported By</p>
            <p className="text-[14px] font-bold text-text-primary">{selectedIssue.reportedBy}</p>
            <p className="text-[12px] text-text-secondary mt-1">Date: {selectedIssue.dateReported}</p>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg">
            <h4 className="text-[12px] font-bold text-text-secondary mb-2">Description of Issue</h4>
            <p className="text-[14px] text-text-primary leading-relaxed">{selectedIssue.description}</p>
          </div>

          {selectedIssue.status === 'Resolved' && selectedIssue.resolutionNote && (
            <div className="bg-success/5 border border-success/30 p-4 rounded-lg">
              <h4 className="text-[12px] font-bold text-success mb-2 flex items-center gap-1.5"><CheckCircle size={14}/> Principal's Resolution</h4>
              <p className="text-[14px] text-success leading-relaxed">{selectedIssue.resolutionNote}</p>
            </div>
          )}

          {selectedIssue.status === 'Pending Review' && (
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-text-primary">Resolution/Action Remarks</label>
              <textarea 
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full h-24 bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary outline-none focus:border-primary transition-colors resize-none"
                placeholder="E.g., Approve replacement, deduct from staff salary, send for repair..."
              />
            </div>
          )}

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedIssue(null)}
            className="px-5 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            {selectedIssue.status === 'Pending Review' ? 'Cancel' : 'Close'}
          </button>
          
          {selectedIssue.status === 'Pending Review' && (
            <button
              onClick={handleAction}
              disabled={loading || !remarks.trim()}
              className="px-6 py-2 rounded-md bg-success hover:bg-success-hover text-black text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <CheckCircle size={16}/> Approve / Mark Resolved
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
