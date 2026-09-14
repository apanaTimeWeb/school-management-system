"use client";
import React, { useState } from "react";
import { X, Save, Lock, Printer, Send } from "lucide-react";
import { useAccountantCashbookStore } from "../accountant_cashbook_store/useAccountantCashbookStore";
import { formatCurrency, MOCK_DAILY_SUMMARY } from "../accountant_cashbook_utils/AccountantCashbookConstants";

export default function AccountantCashbookModals() {
  const { 
    isHandoverModalOpen, setHandoverModalOpen,
    isClosingModalOpen, setClosingModalOpen,
    isSummaryModalOpen, setSummaryModalOpen
  } = useAccountantCashbookStore();

  const [handoverAmount, setHandoverAmount] = useState("");
  const [handoverTo, setHandoverTo] = useState("");
  const [remarks, setRemarks] = useState("");

  const [physicalCash, setPhysicalCash] = useState("");
  const difference = Number(physicalCash) - MOCK_DAILY_SUMMARY.closingBalance;

  const submitHandover = () => {
    alert("Cash Handover Recorded.");
    setHandoverModalOpen(false);
  };

  const submitClosing = () => {
    alert("Day Register Closed Successfully. No further cash transactions allowed for today.");
    setClosingModalOpen(false);
  };

  return (
    <>
      {/* Cash Handover Modal */}
      {isHandoverModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-info/10">
              <h3 className="text-lg font-bold text-info flex items-center gap-2"><Send size={18} /> Handover Cash</h3>
              <button onClick={() => setHandoverModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Handover To</label>
                <input type="text" value={handoverTo} onChange={(e) => setHandoverTo(e.target.value)} placeholder="e.g. Bank Manager, Principal" className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Amount (₹)</label>
                <input type="number" value={handoverAmount} onChange={(e) => setHandoverAmount(e.target.value)} placeholder={`Max: ${MOCK_DAILY_SUMMARY.closingBalance}`} max={MOCK_DAILY_SUMMARY.closingBalance} className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none font-bold" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Remarks</label>
                <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Bank deposit slip details..." className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none min-h-[80px] resize-none"></textarea>
              </div>
            </div>
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setHandoverModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary">Cancel</button>
              <button onClick={submitHandover} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-info text-black rounded-lg hover:bg-info/90 transition-colors"><Save size={16} /> Record Handover</button>
            </div>
          </div>
        </div>
      )}

      {/* Close Register Modal */}
      {isClosingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-primary/10">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><Lock size={18} className="text-primary" /> Close Day Register</h3>
              <button onClick={() => setClosingModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-bg-input p-4 rounded-lg border border-border text-center">
                <p className="text-xs text-text-secondary uppercase font-bold tracking-wider mb-1">System Cash Balance</p>
                <p className="text-2xl font-black text-info">{formatCurrency(MOCK_DAILY_SUMMARY.closingBalance)}</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Enter Physical Cash Counted (₹)</label>
                <input type="number" value={physicalCash} onChange={(e) => setPhysicalCash(e.target.value)} placeholder="Enter amount in drawer" className="w-full bg-bg-input border border-border rounded-lg px-3 py-3 text-lg text-text-primary focus:border-primary outline-none font-bold text-center" />
              </div>
              
              {physicalCash !== "" && (
                <div className={`p-3 rounded-lg border text-center font-bold text-sm ${difference === 0 ? 'bg-success/10 border-success/30 text-success' : 'bg-danger/10 border-danger/30 text-danger'}`}>
                  {difference === 0 ? "Perfect Match!" : `Difference: ${difference > 0 ? '+' : ''}${formatCurrency(difference)}`}
                </div>
              )}
            </div>
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setClosingModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary">Cancel</button>
              <button onClick={submitClosing} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors" disabled={physicalCash === ""}><Lock size={16} /> Confirm & Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Daily Summary / Print Modal */}
      {isSummaryModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page">
              <h3 className="text-lg font-bold text-text-primary">Daily Cash Summary</h3>
              <button onClick={() => setSummaryModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-black text-text-primary">School ERP 360</h2>
                <p className="text-sm text-text-secondary">Cash Book Summary for {MOCK_DAILY_SUMMARY.date}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 border-b border-border">
                  <span className="text-text-secondary font-semibold">Opening Cash</span>
                  <span className="text-text-primary font-bold">{formatCurrency(MOCK_DAILY_SUMMARY.openingCash)}</span>
                </div>
                <div className="flex justify-between p-2 border-b border-border">
                  <span className="text-text-secondary font-semibold">Total Collections (+)</span>
                  <span className="text-success font-bold">{formatCurrency(MOCK_DAILY_SUMMARY.totalCollection)}</span>
                </div>
                <div className="flex justify-between p-2 border-b border-border">
                  <span className="text-text-secondary font-semibold">Total Expenses (-)</span>
                  <span className="text-danger font-bold">{formatCurrency(MOCK_DAILY_SUMMARY.totalExpense)}</span>
                </div>
                <div className="flex justify-between p-3 border border-info/30 bg-info/5 rounded mt-4">
                  <span className="text-info font-black">Net Closing Balance</span>
                  <span className="text-info font-black">{formatCurrency(MOCK_DAILY_SUMMARY.closingBalance)}</span>
                </div>
              </div>

              <div className="mt-8 flex justify-between text-xs text-text-secondary font-semibold px-4 border-t border-border pt-4">
                <span>Accountant Sign</span>
                <span>Principal Sign</span>
              </div>
            </div>
            <div className="p-4 border-t border-border bg-bg-page flex justify-between">
              <button onClick={() => alert('Printing Summary...')} className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-bg-input text-text-primary border border-border rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"><Printer size={16} /> Print</button>
              <button onClick={() => setSummaryModalOpen(false)} className="px-5 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
