"use client";
import React from "react";
import { X, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { useHRTransfersStore } from "../hr_transfers_store/useHRTransfersStore";
import clsx from "clsx";

export default function HRTransfersModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHRTransfersStore();

  if (!selectedRecord || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Review Request</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-black text-lg shrink-0">
              {selectedRecord.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-black text-text-primary">{selectedRecord.name}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedRecord.employeeId}</p>
            </div>
            <div className="ml-auto flex flex-col items-end gap-1">
              <span className={clsx(
                "px-2.5 py-1 rounded-md text-[10px] font-bold border", 
                selectedRecord.type === 'Promotion' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-pink-50 text-pink-700 border-pink-200'
              )}>
                {selectedRecord.type}
              </span>
              <span className={clsx(
                "px-2.5 py-1 rounded-md text-[10px] font-bold border", 
                selectedRecord.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                selectedRecord.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                'bg-rose-50 text-rose-700 border-rose-200'
              )}>
                {selectedRecord.status}
              </span>
            </div>
          </div>

          <div className="bg-bg-page border border-border rounded-xl p-4 space-y-4">
            <div>
              <span className="text-[10px] font-bold text-text-secondary uppercase">Role Change</span>
              <div className="flex items-center gap-3 mt-1 text-sm font-bold text-text-primary">
                <span className="flex-1 bg-card p-2 rounded border border-border text-center">{selectedRecord.currentRole}</span>
                <ArrowRight size={16} className="text-pink-500 shrink-0" />
                <span className="flex-1 bg-card p-2 rounded border border-border text-center text-pink-600">{selectedRecord.newRole}</span>
              </div>
            </div>
            
            <div>
              <span className="text-[10px] font-bold text-text-secondary uppercase">Department Change</span>
              <div className="flex items-center gap-3 mt-1 text-sm font-bold text-text-primary">
                <span className="flex-1 bg-card p-2 rounded border border-border text-center">{selectedRecord.currentDepartment}</span>
                <ArrowRight size={16} className="text-pink-500 shrink-0" />
                <span className="flex-1 bg-card p-2 rounded border border-border text-center">{selectedRecord.newDepartment}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold text-text-secondary uppercase">Effective Date</span>
            <p className="text-sm font-bold text-text-primary">{selectedRecord.effectiveDate}</p>
          </div>

          {selectedRecord.status === 'Pending' && (
            <div className="flex flex-col gap-1.5 mt-2">
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">HR Remarks (Optional)</label>
              <textarea 
                className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-pink-500 min-h-[80px]" 
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
          
          {selectedRecord.status === 'Pending' && (
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
