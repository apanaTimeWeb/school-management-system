"use client";
import React, { useState } from 'react';
import { X, CheckCircle, XCircle, Paperclip } from 'lucide-react';
import { usePrincipalApprovalsStore } from '../approvals_store/usePrincipalApprovalsStore';
import { processApprovalRequest } from '../approvals_api/PrincipalApprovalsApi';
import clsx from 'clsx';

export default function PrincipalApprovalActionModal() {
  const { selectedRequest, setSelectedRequest } = usePrincipalApprovalsStore();
  const [remarks, setRemarks] = useState('');
  const [loading, setLoading] = useState(false);

  if (!selectedRequest) return null;

  const handleAction = async (action: 'Approve' | 'Reject') => {
    setLoading(true);
    await processApprovalRequest(selectedRequest.id, action, remarks);
    setSelectedRequest(null);
    setLoading(false);
    setRemarks('');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-2xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <CheckCircle className="text-primary" size={18} /> 
            Approval Request Review
          </h2>
          <button 
            onClick={() => setSelectedRequest(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div className="flex flex-col items-start gap-4 border-b border-border pb-4">
            <div className="w-full flex justify-between items-start">
              <div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded mb-2 inline-block border bg-primary/10 text-primary border-primary/30">
                  {selectedRequest.category}
                </span>
                <h3 className="text-[20px] font-bold text-text-primary mb-1">{selectedRequest.title}</h3>
                <p className="text-[13px] text-text-secondary font-mono">Request ID: {selectedRequest.id} | Priority: {selectedRequest.priority}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[11px] text-text-secondary font-bold mb-1">Requested By</p>
              <p className="text-[14px] font-bold text-text-primary">{selectedRequest.requestedBy}</p>
              <p className="text-[12px] text-text-secondary mt-1">Date: {selectedRequest.dateRequested}</p>
            </div>
            
            {selectedRequest.amount && (
              <div className="bg-success/5 border border-success/30 p-4 rounded-lg">
                <p className="text-[11px] text-success font-bold mb-1">Financial Implication</p>
                <p className="text-[20px] font-bold text-success">{selectedRequest.amount}</p>
              </div>
            )}
          </div>

          <div className="bg-card border border-border p-4 rounded-lg">
            <h4 className="text-[12px] font-bold text-text-secondary mb-2">Description</h4>
            <p className="text-[14px] text-text-primary leading-relaxed">{selectedRequest.description}</p>
          </div>

          {selectedRequest.attachments && selectedRequest.attachments.length > 0 && (
            <div className="bg-page border border-border p-4 rounded-lg">
               <h4 className="text-[12px] font-bold text-text-secondary mb-3 flex items-center gap-2"><Paperclip size={14}/> Attached Documents</h4>
               <div className="flex flex-wrap gap-2">
                 {selectedRequest.attachments.map((file, idx) => (
                   <span key={idx} className="px-3 py-1.5 bg-input border border-border rounded text-[12px] font-bold text-info hover:underline cursor-pointer flex items-center gap-1.5">
                     <FileText size={14} /> {file}
                   </span>
                 ))}
               </div>
            </div>
          )}

          <div className="space-y-2 pt-2 border-t border-border">
            <label className="text-[13px] font-bold text-text-primary">Principal's Remarks (Optional)</label>
            <textarea 
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full h-20 bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary outline-none focus:border-primary transition-colors resize-none"
              placeholder="Add your comments here..."
            />
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-between shrink-0 gap-3">
          <button
            onClick={() => setSelectedRequest(null)}
            className="px-5 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Cancel
          </button>
          
          <div className="flex gap-3">
             <button
                onClick={() => handleAction('Reject')}
                disabled={loading}
                className="px-5 py-2 rounded-md bg-danger/10 hover:bg-danger text-danger hover:text-black border border-danger/30 hover:border-danger text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
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
          </div>
        </div>
      </div>
    </div>
  );
}

// ensure FileText is imported
import { FileText } from 'lucide-react';
