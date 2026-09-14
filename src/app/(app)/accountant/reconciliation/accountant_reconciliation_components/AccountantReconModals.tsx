"use client";
import React, { useState } from "react";
import { X, CheckCircle2, ShieldAlert, GitMerge, FileText } from "lucide-react";
import { useAccountantReconStore } from "../accountant_reconciliation_store/useAccountantReconStore";
import { formatCurrency } from "../accountant_reconciliation_utils/AccountantReconConstants";
import clsx from "clsx";

export default function AccountantReconModals() {
  const { 
    selectedRecord, 
    isMatchModalOpen, setMatchModalOpen,
    isResolveModalOpen, setResolveModalOpen
  } = useAccountantReconStore();

  const [resolveAction, setResolveAction] = useState("Adjust ERP");
  const [remarks, setRemarks] = useState("");

  const handleMatch = () => {
    alert("Transaction marked as Reconciled/Matched.");
    setMatchModalOpen(false);
  };

  const handleResolve = () => {
    alert(`Discrepancy resolved via: ${resolveAction}`);
    setResolveModalOpen(false);
  };

  return (
    <>
      {/* View / Match Modal */}
      {isMatchModalOpen && selectedRecord && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><FileText size={18} /> Transaction Match Details</h3>
              <button onClick={() => setMatchModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-6">
              
              <div className="flex justify-between items-center bg-bg-input p-4 rounded-lg border border-border">
                <div className="text-center w-1/2 border-r border-border px-2">
                  <p className="text-xs font-bold text-text-secondary uppercase mb-1">ERP Record</p>
                  <p className="text-xl font-black text-text-primary">{formatCurrency(selectedRecord.erpAmount)}</p>
                  <p className="text-[10px] text-text-secondary mt-1">{selectedRecord.id}</p>
                </div>
                <div className="text-center w-1/2 px-2">
                  <p className="text-xs font-bold text-text-secondary uppercase mb-1">Source ({selectedRecord.category})</p>
                  <p className="text-xl font-black text-info">{formatCurrency(selectedRecord.sourceAmount)}</p>
                  <p className="text-[10px] text-text-secondary mt-1">{selectedRecord.sourceReference}</p>
                </div>
              </div>

              {selectedRecord.status === 'Matched' ? (
                <div className="flex items-center gap-3 p-4 bg-success/10 border border-success/30 rounded-lg text-success">
                  <CheckCircle2 size={24} />
                  <div>
                    <h4 className="font-bold text-sm">Successfully Reconciled</h4>
                    <p className="text-xs font-semibold mt-0.5">By {selectedRecord.reconciledBy || 'System'}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-text-secondary mb-4">The amounts match perfectly. Do you want to manually mark this as Reconciled?</p>
                  <button onClick={handleMatch} className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold bg-success text-white rounded-lg hover:bg-success/90 shadow-md transition-colors w-full">
                    <CheckCircle2 size={18} /> Mark as Matched
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Resolve Discrepancy Modal */}
      {isResolveModalOpen && selectedRecord && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-danger/10 shrink-0">
              <h3 className="text-lg font-bold text-danger flex items-center gap-2">
                <ShieldAlert size={18} /> Resolve Discrepancy
              </h3>
              <button onClick={() => setResolveModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-4">
              
              <div className="bg-bg-input p-4 rounded-lg border border-border flex justify-between items-center">
                <div>
                  <span className="text-xs text-text-secondary block mb-1">Variance Detected</span>
                  <span className={clsx("text-xl font-black", selectedRecord.variance < 0 ? 'text-danger' : 'text-warning')}>
                    {formatCurrency(selectedRecord.variance)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-text-secondary block mb-1">Status</span>
                  <span className="text-sm font-bold text-text-primary px-2 py-1 bg-bg-page rounded border border-border">
                    {selectedRecord.status}
                  </span>
                </div>
              </div>

              {selectedRecord.remarks && (
                <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                  <p className="text-xs text-warning font-bold">System Note: {selectedRecord.remarks}</p>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-2">Resolution Action</label>
                <select 
                  value={resolveAction}
                  onChange={(e) => setResolveAction(e.target.value)}
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                >
                  <option value="Adjust ERP">Adjust ERP Amount (Create adjustment entry)</option>
                  <option value="Mark as Gateway Fee">Mark Variance as Gateway Fee</option>
                  <option value="Ignore">Ignore & Force Match</option>
                  {selectedRecord.status === 'Duplicate' && <option value="Delete Duplicate">Delete Duplicate ERP Entry</option>}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Audit Remarks</label>
                <textarea 
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Reason for discrepancy and resolution..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none min-h-[80px] resize-none"
                ></textarea>
              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
              <button onClick={() => setResolveModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleResolve} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors">
                <GitMerge size={16} /> Resolve & Match
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
