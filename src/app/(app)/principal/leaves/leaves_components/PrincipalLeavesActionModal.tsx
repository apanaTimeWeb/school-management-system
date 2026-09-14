"use client";
import React, { useState } from 'react';
import { X, CheckCircle, XCircle, CalendarDays, UserSquare2, FileText, Info } from 'lucide-react';
import { usePrincipalLeavesStore } from '../leaves_store/usePrincipalLeavesStore';
import { updatePrincipalLeaveStatus } from '../leaves_api/PrincipalLeavesApi';
import clsx from 'clsx';

export default function PrincipalLeavesActionModal() {
  const { selectedRequest, setSelectedRequest, setActiveTab } = usePrincipalLeavesStore();
  const [loading, setLoading] = useState(false);
  const [remark, setRemark] = useState('');

  if (!selectedRequest) return null;

  const isPending = selectedRequest.status === 'Pending';

  const handleAction = async (action: 'Approved' | 'Rejected') => {
    setLoading(true);
    await updatePrincipalLeaveStatus(selectedRequest.id, action);
    setLoading(false);
    setSelectedRequest(null);
    if (isPending) setActiveTab('history');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <FileText className="text-primary" size={18} /> 
            Leave Request Details
          </h2>
          <button 
            onClick={() => setSelectedRequest(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          {/* Header Status */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                <UserSquare2 size={24} />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-text-primary">{selectedRequest.applicantName}</h3>
                <p className="text-[13px] text-text-secondary">{selectedRequest.applicantType} • {selectedRequest.departmentOrClass}</p>
                <p className="text-[12px] text-text-secondary mt-1">ID: {selectedRequest.applicantId}</p>
              </div>
            </div>
            <div>
              <span className={clsx(
                "px-3 py-1.5 rounded-full text-[12px] font-bold border flex items-center gap-1.5",
                selectedRequest.status === 'Pending' ? "bg-warning/20 text-warning border-warning/30" :
                selectedRequest.status === 'Approved' ? "bg-success/20 text-success border-success/30" :
                "bg-danger/20 text-danger border-danger/30"
              )}>
                {selectedRequest.status === 'Pending' && <Clock size={14}/>}
                {selectedRequest.status === 'Approved' && <CheckCircle size={14}/>}
                {selectedRequest.status === 'Rejected' && <XCircle size={14}/>}
                {selectedRequest.status}
              </span>
            </div>
          </div>

          {/* Leave Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1">Leave Type</p>
              <p className="text-[14px] font-bold text-info">{selectedRequest.leaveType}</p>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1">Total Duration</p>
              <p className="text-[14px] font-bold text-text-primary">{selectedRequest.totalDays} Day(s)</p>
            </div>
            <div className="col-span-2 bg-card border border-border p-4 rounded-lg flex items-center gap-4">
               <CalendarDays className="text-primary" size={24} />
               <div>
                 <p className="text-[12px] text-text-secondary mb-1">Date Range</p>
                 <p className="text-[14px] font-bold text-text-primary">{selectedRequest.startDate} <span className="text-text-secondary mx-2">to</span> {selectedRequest.endDate}</p>
               </div>
            </div>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg">
            <p className="text-[12px] text-text-secondary mb-2 flex items-center gap-2"><Info size={14} className="text-primary"/> Reason for Leave</p>
            <p className="text-[14px] text-text-primary leading-relaxed">{selectedRequest.reason}</p>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg flex items-center justify-between text-[12px] text-text-secondary">
             <span>Applied On: <strong className="text-text-primary">{selectedRequest.appliedOn}</strong></span>
             {!isPending && <span>Reviewed By: <strong className="text-text-primary">{selectedRequest.approvedBy}</strong></span>}
          </div>

          {isPending && (
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-text-secondary block">Add Remarks (Optional)</label>
              <textarea 
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="w-full bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary outline-none focus:border-primary transition-colors min-h-[80px]"
                placeholder="Enter remarks for approval or rejection..."
              />
            </div>
          )}
        </div>

        {isPending ? (
          <div className="px-5 py-4 border-t border-border bg-card flex items-center justify-end gap-3 shrink-0">
            <button
              onClick={() => setSelectedRequest(null)}
              disabled={loading}
              className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={() => handleAction('Rejected')}
              disabled={loading}
              className="px-6 py-2 rounded-md bg-danger/10 border border-danger/30 hover:bg-danger hover:text-white text-danger text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? "Processing..." : <><XCircle size={16}/> Reject</>}
            </button>
            <button
              onClick={() => handleAction('Approved')}
              disabled={loading}
              className="px-6 py-2 rounded-md bg-success border border-success hover:bg-success/90 text-black text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? "Processing..." : <><CheckCircle size={16}/> Approve</>}
            </button>
          </div>
        ) : (
          <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0">
            <button
              onClick={() => setSelectedRequest(null)}
              className="px-6 py-2 rounded-md bg-primary hover:bg-primary-hover text-white text-[13px] font-bold transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Minimal Clock icon for pending status if missing in standard imports
function Clock({size}: {size: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
