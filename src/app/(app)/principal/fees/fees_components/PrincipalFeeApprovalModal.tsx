"use client";
import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle, XCircle, FileText, IndianRupee } from 'lucide-react';
import { usePrincipalFeesStore } from '../fees_store/usePrincipalFeesStore';
import { updateFeeRequestStatus } from '../fees_api/PrincipalFeesApi';
import clsx from 'clsx';

export default function PrincipalFeeApprovalModal() {
  const { selectedRequest, setSelectedRequest } = usePrincipalFeesStore();
  const [remarks, setRemarks] = useState('');
  const [loading, setLoading] = useState(false);

  if (!selectedRequest) return null;

  const handleAction = async (action: 'Approve' | 'Reject') => {
    setLoading(true);
    await updateFeeRequestStatus(selectedRequest.id, action, remarks);
    setSelectedRequest(null);
    setLoading(false);
    setRemarks('');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <ShieldCheck className="text-primary" size={18} /> 
            Review Fee Request
          </h2>
          <button 
            onClick={() => setSelectedRequest(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
          
          <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
            <div>
              <h3 className="text-[20px] font-bold text-text-primary mb-1">{selectedRequest.type} Request</h3>
              <p className="text-[13px] text-text-secondary font-mono">Req ID: {selectedRequest.id}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                selectedRequest.status === 'Pending' ? 'bg-warning/10 text-warning border-warning/30' :
                selectedRequest.status === 'Approved' ? 'bg-success/10 text-success border-success/30' :
                'bg-danger/10 text-danger border-danger/30'
              )}>
                {selectedRequest.status}
              </span>
              <span className="text-[16px] font-bold text-success flex items-center"><IndianRupee size={16}/> {selectedRequest.amountRequested.toLocaleString()}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border p-3 rounded-lg">
              <p className="text-[11px] text-text-secondary mb-1">Student Name</p>
              <p className="text-[14px] font-bold text-text-primary">{selectedRequest.studentName}</p>
            </div>
            <div className="bg-card border border-border p-3 rounded-lg">
              <p className="text-[11px] text-text-secondary mb-1">Class & ID</p>
              <p className="text-[14px] font-bold text-text-primary">{selectedRequest.classAndSection} • {selectedRequest.studentId}</p>
            </div>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg">
            <h4 className="text-[12px] font-bold text-text-secondary mb-2 flex items-center gap-2"><FileText size={14}/> Reason for Request</h4>
            <p className="text-[14px] text-text-primary leading-relaxed">{selectedRequest.reason}</p>
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-bold text-text-primary">Principal's Remarks</label>
            <textarea 
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full h-24 bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary outline-none focus:border-primary transition-colors resize-none"
              placeholder="Add final remarks (required for rejection)..."
            />
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedRequest(null)}
            className="px-5 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Cancel
          </button>
          
          {selectedRequest.status === 'Pending' && (
            <>
              <button
                onClick={() => handleAction('Reject')}
                disabled={loading || !remarks.trim()}
                className="px-5 py-2 rounded-md bg-danger/10 hover:bg-danger border border-danger/30 hover:border-danger text-danger hover:text-white text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <XCircle size={16}/> Reject
              </button>
              
              <button
                onClick={() => handleAction('Approve')}
                disabled={loading}
                className="px-6 py-2 rounded-md bg-success hover:bg-success-hover text-black text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <CheckCircle size={16}/> Approve
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
