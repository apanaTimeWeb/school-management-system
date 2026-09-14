"use client";
import React, { useState } from "react";
import { X, HandCoins, ShieldOff, History, CheckCircle2, AlertCircle } from "lucide-react";
import { useAccountantFinesStore } from "../accountant_fines_store/useAccountantFinesStore";
import { formatCurrency } from "../accountant_fines_utils/AccountantFinesConstants";
import clsx from "clsx";

export default function AccountantFinesModals() {
  const { 
    selectedFine, 
    isCollectModalOpen, setCollectModalOpen,
    isWaiverModalOpen, setWaiverModalOpen,
    isHistoryModalOpen, setHistoryModalOpen
  } = useAccountantFinesStore();

  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [waiverReason, setWaiverReason] = useState("");

  const handleCollectFine = () => {
    alert(`Fine of ${formatCurrency(selectedFine?.fineAmount || 0)} collected via ${paymentMethod}.`);
    setCollectModalOpen(false);
  };

  const handleWaiverRequest = () => {
    alert("Fine waiver request sent to Principal/Admin for approval.");
    setWaiverModalOpen(false);
  };

  if (!selectedFine) return null;

  return (
    <>
      {/* Collect Fine Modal */}
      {isCollectModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-success/30 rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-success/10">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <HandCoins size={20} className="text-success" /> Collect Fine
              </h3>
              <button onClick={() => setCollectModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="bg-bg-page border border-border rounded-lg p-4 text-center">
                <p className="text-xs text-text-secondary font-bold uppercase tracking-wider mb-1">Total Fine Due</p>
                <p className="text-3xl font-black text-danger">{formatCurrency(selectedFine.fineAmount)}</p>
                <p className="text-sm font-semibold text-text-primary mt-2">{selectedFine.studentName} ({selectedFine.className})</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Payment Method</label>
                <select 
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-success outline-none"
                >
                  <option>Cash</option>
                  <option>Card</option>
                  <option>UPI</option>
                  <option>Bank Transfer</option>
                </select>
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setCollectModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary">Cancel</button>
              <button onClick={handleCollectFine} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-success text-white rounded-lg hover:bg-success/90 shadow-md transition-colors">
                Process Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Request Waiver Modal */}
      {isWaiverModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-warning/30 rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-warning/10">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <ShieldOff size={20} className="text-warning" /> Request Fine Waiver
              </h3>
              <button onClick={() => setWaiverModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="bg-bg-page border border-border rounded-lg p-3 text-sm">
                <p><span className="text-text-secondary">Student:</span> <span className="font-bold text-text-primary">{selectedFine.studentName}</span></p>
                <p className="mt-1"><span className="text-text-secondary">Fine Amount:</span> <span className="font-bold text-danger">{formatCurrency(selectedFine.fineAmount)}</span></p>
                <p className="mt-1"><span className="text-text-secondary">Late By:</span> <span className="font-bold text-danger">{selectedFine.daysLate} Days</span></p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Reason for Waiver</label>
                <textarea 
                  value={waiverReason}
                  onChange={(e) => setWaiverReason(e.target.value)}
                  placeholder="Provide context for the admin/principal to review..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-warning outline-none min-h-[100px] resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setWaiverModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary">Cancel</button>
              <button 
                onClick={handleWaiverRequest} 
                disabled={!waiverReason.trim()}
                className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-warning text-black rounded-lg hover:bg-warning/80 shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* History & Details Modal */}
      {isHistoryModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <History size={18} /> Fine Details
              </h3>
              <button onClick={() => setHistoryModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6">
              <div className="bg-bg-input border border-border rounded-lg p-4 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{selectedFine.studentName}</h4>
                    <p className="text-xs text-text-secondary">{selectedFine.relatedFeePeriod}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-danger">{formatCurrency(selectedFine.fineAmount)}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-text-secondary font-semibold">Calculation</p>
                    <p className="text-sm text-text-primary font-bold">{selectedFine.calcType}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-semibold">Late By</p>
                    <p className="text-sm text-danger font-bold">{selectedFine.daysLate} Days</p>
                  </div>
                </div>
              </div>

              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4 border-b border-border pb-2">Timeline</h4>
              
              <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                
                <div className="relative flex items-start gap-4">
                  <div className="absolute left-[-24px] w-6 h-6 rounded-full bg-danger/20 flex items-center justify-center text-danger z-10 border-4 border-card">
                    <AlertCircle size={12} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Fine Applied</h4>
                    <p className="text-xs text-text-secondary mt-0.5">On {selectedFine.appliedDate}</p>
                  </div>
                </div>

                {selectedFine.status === 'Paid' && (
                  <div className="relative flex items-start gap-4">
                    <div className="absolute left-[-24px] w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success z-10 border-4 border-card">
                      <CheckCircle2 size={12} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-success">Fine Paid</h4>
                      <p className="text-xs text-text-secondary mt-0.5">On {selectedFine.paidDate}</p>
                    </div>
                  </div>
                )}

                {(selectedFine.status === 'Waived' || selectedFine.status === 'Waiver Pending') && (
                  <div className="relative flex items-start gap-4">
                    <div className={clsx("absolute left-[-24px] w-6 h-6 rounded-full flex items-center justify-center z-10 border-4 border-card",
                      selectedFine.status === 'Waived' ? 'bg-info/20 text-info' : 'bg-warning/20 text-warning'
                    )}>
                      <ShieldOff size={12} />
                    </div>
                    <div className="w-full">
                      <h4 className={clsx("text-sm font-bold", selectedFine.status === 'Waived' ? 'text-info' : 'text-warning')}>
                        {selectedFine.status}
                      </h4>
                      {selectedFine.waivedDate && <p className="text-xs text-text-secondary mt-0.5">On {selectedFine.waivedDate}</p>}
                      {selectedFine.remarks && (
                        <div className="mt-2 text-sm text-text-primary bg-bg-page p-2 rounded border border-border">
                          {selectedFine.remarks}
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end">
              <button onClick={() => setHistoryModalOpen(false)} className="px-5 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
