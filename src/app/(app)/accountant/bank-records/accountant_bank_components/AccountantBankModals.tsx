"use client";
import React, { useState } from "react";
import { X, Save, History, CheckCircle2, Clock, XCircle, Landmark, FileCheck2 } from "lucide-react";
import { useAccountantBankStore } from "../accountant_bank_store/useAccountantBankStore";
import { formatCurrency } from "../accountant_bank_utils/AccountantBankConstants";
import clsx from "clsx";

export default function AccountantBankModals() {
  const { 
    selectedTxn, 
    isUpdateStatusModalOpen, setUpdateStatusModalOpen,
    isDetailsModalOpen, setDetailsModalOpen,
    isReconcileModalOpen, setReconcileModalOpen
  } = useAccountantBankStore();

  // Update Status Form State
  const [newStatus, setNewStatus] = useState("Cleared");
  const [clearanceDate, setClearanceDate] = useState("");
  const [penaltyFee, setPenaltyFee] = useState("");
  const [statusRemarks, setStatusRemarks] = useState("");

  // Reconcile Form State
  const [bankBalance, setBankBalance] = useState("");

  const handleUpdateStatus = () => {
    alert(`Cheque marked as ${newStatus}`);
    setUpdateStatusModalOpen(false);
  };

  const handleReconcile = () => {
    alert("Bank Reconciliation complete.");
    setReconcileModalOpen(false);
  };

  return (
    <>
      {/* Update Status Modal */}
      {isUpdateStatusModalOpen && selectedTxn && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-warning/10 shrink-0">
              <h3 className="text-lg font-bold text-warning flex items-center gap-2">Update Clearance Status</h3>
              <button onClick={() => setUpdateStatusModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="bg-bg-input p-3 rounded-lg border border-border mb-2 text-sm flex justify-between">
                <div>
                  <span className="text-text-secondary block text-xs">Reference No</span>
                  <span className="font-bold text-text-primary">{selectedTxn.referenceNo}</span>
                </div>
                <div className="text-right">
                  <span className="text-text-secondary block text-xs">Amount</span>
                  <span className="font-bold text-text-primary">{formatCurrency(selectedTxn.amount)}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">New Status</label>
                <select 
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                >
                  <option value="Cleared">Cleared Successfully</option>
                  <option value="Bounced">Bounced / Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Clearance/Bounce Date</label>
                <input 
                  type="date" 
                  value={clearanceDate}
                  onChange={(e) => setClearanceDate(e.target.value)}
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                />
              </div>

              {newStatus === "Bounced" && (
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Cheque Bounce Penalty Fee (₹)</label>
                  <input 
                    type="number" 
                    value={penaltyFee}
                    onChange={(e) => setPenaltyFee(e.target.value)}
                    placeholder="e.g. 500" 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-danger font-bold focus:border-primary outline-none"
                  />
                  <p className="text-[10px] text-text-secondary mt-1">This will automatically apply a Fine to the student's ledger.</p>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Remarks</label>
                <textarea 
                  value={statusRemarks}
                  onChange={(e) => setStatusRemarks(e.target.value)}
                  placeholder="Reason for bounce or bank reference..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none min-h-[80px] resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
              <button onClick={() => setUpdateStatusModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleUpdateStatus} className={clsx("flex items-center gap-2 px-5 py-2 text-sm font-bold text-white rounded-lg shadow-md transition-colors", newStatus === 'Cleared' ? 'bg-success hover:bg-success/90' : 'bg-danger hover:bg-danger/90')}>
                <Save size={16} /> Mark as {newStatus}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details & Timeline Modal */}
      {isDetailsModalOpen && selectedTxn && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <History size={18} /> Transaction Details
              </h3>
              <button onClick={() => setDetailsModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="bg-bg-input border border-border rounded-lg p-4 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{selectedTxn.payer}</h4>
                    <p className="text-xs text-text-secondary font-semibold mt-1 flex items-center gap-1.5"><Landmark size={12} /> {selectedTxn.bankName} • {selectedTxn.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-text-primary">{formatCurrency(selectedTxn.amount)}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mt-4 pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-text-secondary block">Date of Deposit/Transfer</span>
                    <span className="font-semibold text-text-primary">{selectedTxn.date}</span>
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Reference / Cheque No</span>
                    <span className="font-mono font-bold text-text-primary">{selectedTxn.referenceNo}</span>
                  </div>
                </div>

                {selectedTxn.remarks && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-text-secondary block mb-1">Internal Remarks</span>
                    <p className="text-sm text-text-primary bg-bg-page p-2 rounded">{selectedTxn.remarks}</p>
                  </div>
                )}
              </div>

              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4 border-b border-border pb-2">Clearance Timeline</h4>
              
              <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                
                <div className="relative flex items-start gap-4">
                  <div className="absolute left-[-24px] w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10 border-4 border-card">
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Recorded in ERP</h4>
                    <p className="text-xs text-text-secondary mt-0.5">On {selectedTxn.date}</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className={clsx("absolute left-[-24px] w-6 h-6 rounded-full flex items-center justify-center z-10 border-4 border-card",
                    (selectedTxn.status === 'Cleared' || selectedTxn.status === 'Reconciled') ? 'bg-success/20 text-success' : 
                    selectedTxn.status === 'Bounced' ? 'bg-danger/20 text-danger' : 
                    'bg-warning/20 text-warning'
                  )}>
                    {(selectedTxn.status === 'Cleared' || selectedTxn.status === 'Reconciled') ? <CheckCircle2 size={12} /> : 
                     selectedTxn.status === 'Bounced' ? <XCircle size={12} /> : 
                     <Clock size={12} />}
                  </div>
                  <div>
                    <h4 className={clsx("text-sm font-bold", 
                      (selectedTxn.status === 'Cleared' || selectedTxn.status === 'Reconciled') ? 'text-success' : 
                      selectedTxn.status === 'Bounced' ? 'text-danger' : 
                      'text-warning'
                    )}>
                      {selectedTxn.status}
                    </h4>
                    {selectedTxn.clearanceDate ? (
                      <p className="text-xs text-text-secondary mt-0.5">On {selectedTxn.clearanceDate}</p>
                    ) : (
                      <p className="text-xs text-text-secondary mt-0.5">Awaiting Bank Update</p>
                    )}
                  </div>
                </div>

              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end shrink-0">
              <button onClick={() => setDetailsModalOpen(false)} className="px-5 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bank Reconciliation Modal */}
      {isReconcileModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-primary/10 shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><FileCheck2 size={18} className="text-primary"/> Bank Reconciliation</h3>
              <button onClick={() => setReconcileModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <p className="text-sm text-text-secondary">Compare your physical Bank Statement balance with the System's calculated Bank Balance to find discrepancies.</p>
              
              <div className="bg-bg-input p-4 rounded-lg border border-border text-center">
                <p className="text-xs text-text-secondary uppercase font-bold tracking-wider mb-1">System Bank Balance</p>
                <p className="text-2xl font-black text-info">{formatCurrency(1250000)}</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Enter Bank Statement Balance (₹)</label>
                <input 
                  type="number" 
                  value={bankBalance}
                  onChange={(e) => setBankBalance(e.target.value)}
                  placeholder="Amount as per Bank Statement" 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-3 text-lg text-text-primary focus:border-primary outline-none font-bold text-center"
                />
              </div>

              {bankBalance !== "" && (
                <div className={clsx("p-3 rounded-lg border text-center font-bold text-sm", 
                  Number(bankBalance) === 1250000 ? 'bg-success/10 border-success/30 text-success' : 'bg-danger/10 border-danger/30 text-danger'
                )}>
                  {Number(bankBalance) === 1250000 ? "Reconciliation Matched!" : `Difference: ${formatCurrency(Number(bankBalance) - 1250000)}`}
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
              <button onClick={() => setReconcileModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleReconcile} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors" disabled={bankBalance === ""}>
                <FileCheck2 size={16} /> Mark Reconciled
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
