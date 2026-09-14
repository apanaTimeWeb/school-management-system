"use client";
import React from "react";
import { X, CheckCircle, XCircle } from "lucide-react";
import { useHRLeavesStore } from "../hr_leaves_store/useHRLeavesStore";
import clsx from "clsx";

export default function HRLeavesModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedLeave
  } = useHRLeavesStore();

  if (!selectedLeave || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Review Leave Request</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-black text-lg shrink-0">
              {selectedLeave.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-black text-text-primary">{selectedLeave.name}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedLeave.role} ({selectedLeave.employeeId})</p>
            </div>
            <div className="ml-auto">
              <span className={clsx(
                "px-2.5 py-1 rounded-md text-xs font-bold border", 
                selectedLeave.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                selectedLeave.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                'bg-rose-50 text-rose-700 border-rose-200'
              )}>
                {selectedLeave.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-bg-page border border-border rounded-xl">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Leave Type</span>
              <p className="text-sm font-bold text-text-primary mt-0.5">{selectedLeave.leaveType}</p>
            </div>
            <div className="p-3 bg-bg-page border border-border rounded-xl">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Duration</span>
              <p className="text-sm font-bold text-text-primary mt-0.5">{selectedLeave.days} Day(s)</p>
            </div>
            <div className="p-3 bg-bg-page border border-border rounded-xl col-span-2">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Date Range</span>
              <p className="text-sm font-bold text-text-primary mt-0.5">{selectedLeave.startDate} to {selectedLeave.endDate}</p>
            </div>
            <div className="p-3 bg-bg-page border border-border rounded-xl col-span-2">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Reason</span>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{selectedLeave.reason}</p>
            </div>
          </div>

          {selectedLeave.status === 'Pending' && (
            <div className="flex flex-col gap-1.5 mt-4">
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">HR Remarks (Optional)</label>
              <textarea 
                className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-amber-500 min-h-[80px]" 
                placeholder="Add your comments here..."
              />
            </div>
          )}
        </div>

        <div className="p-4 border-t border-border flex justify-between bg-bg-input">
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
          >
            Close
          </button>
          
          {selectedLeave.status === 'Pending' && (
            <div className="flex gap-2">
              <button 
                onClick={() => setActionModalOpen(false)}
                className="px-4 py-2 font-bold text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors flex items-center gap-2"
              >
                <XCircle size={16} /> Reject
              </button>
              <button 
                onClick={() => setActionModalOpen(false)}
                className="px-4 py-2 font-bold text-sm text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-md flex items-center gap-2"
              >
                <CheckCircle size={16} /> Approve
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
