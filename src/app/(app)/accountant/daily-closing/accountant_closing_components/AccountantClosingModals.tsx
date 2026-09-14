"use client";
import React, { useState } from "react";
import { X, Lock, History, Printer, CheckCircle2 } from "lucide-react";
import { useAccountantClosingStore } from "../accountant_closing_store/useAccountantClosingStore";
import { formatCurrency, TODAY_SUMMARY } from "../accountant_closing_utils/AccountantClosingConstants";
import clsx from "clsx";

export default function AccountantClosingModals() {
  const { 
    isConfirmModalOpen, setConfirmModalOpen,
    isDetailsModalOpen, setDetailsModalOpen,
    selectedHistory
  } = useAccountantClosingStore();

  const [remarks, setRemarks] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleCloseDay = () => {
    alert("Day Closed Successfully. EOD Report sent to Principal.");
    setConfirmModalOpen(false);
  };

  return (
    <>
      {/* Confirm EOD Closing Modal */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-primary/10 shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><Lock size={18} className="text-primary"/> Confirm EOD Closing</h3>
              <button onClick={() => setConfirmModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-5">
              
              <div className="text-center">
                <p className="text-sm text-text-secondary mb-1">Net Settlement for Today</p>
                <p className="text-3xl font-black text-primary">{formatCurrency(TODAY_SUMMARY.netCollection)}</p>
                <p className="text-xs text-text-secondary mt-1">This amount will be added to the Opening Balance for tomorrow.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Closing Remarks (Optional)</label>
                <textarea 
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Any notes for the Principal regarding today's closing..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none min-h-[80px] resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 bg-warning/10 border border-warning/20 p-3 rounded-lg cursor-pointer" onClick={() => setAgreed(!agreed)}>
                <input 
                  type="checkbox" 
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1"
                />
                <p className="text-xs text-warning font-semibold">
                  I confirm that all Cash, Online, and Bank collections for {TODAY_SUMMARY.date} have been verified and reconciled. Once closed, today's ledger cannot be modified.
                </p>
              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
              <button onClick={() => setConfirmModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleCloseDay} disabled={!agreed} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <Lock size={16} /> Close & Lock Day
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details / History Modal */}
      {isDetailsModalOpen && selectedHistory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <History size={18} /> EOD Details
              </h3>
              <button onClick={() => setDetailsModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-xl font-bold text-text-primary">{selectedHistory.date}</h4>
                  <p className="text-xs text-text-secondary mt-1">{selectedHistory.id}</p>
                </div>
                <div className={clsx("px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5", 
                  selectedHistory.status === 'Verified' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                )}>
                  {selectedHistory.status === 'Verified' && <CheckCircle2 size={14} />}
                  Status: {selectedHistory.status}
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between p-2 bg-bg-page rounded border border-border">
                  <span className="text-text-secondary font-semibold">Opening Balance</span>
                  <span className="text-text-primary font-bold">{formatCurrency(selectedHistory.openingBalance)}</span>
                </div>

                <div className="pl-4 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">+ Cash Collection</span>
                    <span className="text-text-primary">{formatCurrency(selectedHistory.cashCollection)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">+ Online Collection</span>
                    <span className="text-text-primary">{formatCurrency(selectedHistory.onlineCollection)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">+ Bank Collection</span>
                    <span className="text-text-primary">{formatCurrency(selectedHistory.bankCollection)}</span>
                  </div>
                </div>

                <div className="flex justify-between p-2 bg-success/5 rounded border border-success/20">
                  <span className="text-success font-semibold">Gross Collection</span>
                  <span className="text-success font-bold">{formatCurrency(selectedHistory.grossCollection)}</span>
                </div>

                <div className="pl-4 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">- Refunds</span>
                    <span className="text-danger">{formatCurrency(selectedHistory.refunds)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">- Expenses</span>
                    <span className="text-danger">{formatCurrency(selectedHistory.expenses)}</span>
                  </div>
                </div>

                <div className="flex justify-between p-2 bg-primary/5 rounded border border-primary/20 mt-4">
                  <span className="text-primary font-bold">Net Settlement</span>
                  <span className="text-primary font-black">{formatCurrency(selectedHistory.netCollection)}</span>
                </div>
                
                <div className="flex justify-between p-3 bg-info/10 rounded-lg border border-info/20 mt-4 shadow-sm">
                  <span className="text-info font-black uppercase text-xs tracking-wider self-center">Closing Balance</span>
                  <span className="text-info font-black text-lg">{formatCurrency(selectedHistory.closingBalance)}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex justify-between text-xs text-text-secondary">
                <span>Closed By: {selectedHistory.closedBy || 'System'}</span>
              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-between shrink-0">
              <button 
                onClick={() => alert("Printing EOD Report...")}
                className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-bg-input text-text-primary border border-border rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Printer size={16} /> Print Report
              </button>
              <button onClick={() => setDetailsModalOpen(false)} className="px-5 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
