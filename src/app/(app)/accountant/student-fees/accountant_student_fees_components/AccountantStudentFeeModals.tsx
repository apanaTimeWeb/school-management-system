"use client";
import React from "react";
import { X, Wallet, AlertCircle, Gift } from "lucide-react";
import { useAccountantStudentFeesStore } from "../accountant_student_fees_store/useAccountantStudentFeesStore";

// RESPONSIBILITY: Renders interactive modals for collecting fees, adding fines, and granting concessions.

export default function AccountantStudentFeeModals() {
  const { 
    isCollectFeeModalOpen, setCollectFeeModalOpen,
    isAddFineModalOpen, setAddFineModalOpen,
    isGrantConcessionModalOpen, setGrantConcessionModalOpen
  } = useAccountantStudentFeesStore();

  const handleAction = (actionName: string, closeFunc: () => void) => {
    alert(`${actionName} processed successfully!`);
    closeFunc();
  };

  return (
    <>
      {/* Collect Fee Modal */}
      {isCollectFeeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-success/5">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><Wallet className="text-success" /> Collect Fee</h3>
              <button onClick={() => setCollectFeeModalOpen(false)} className="text-text-secondary hover:text-danger"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Payment Method</label>
                <select className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-success outline-none">
                  <option>UPI</option>
                  <option>Cash</option>
                  <option>Card</option>
                  <option>Bank Transfer</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Amount to Collect (₹)</label>
                <input type="number" defaultValue="25000" className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-success outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Remarks</label>
                <input type="text" placeholder="e.g. Paid via PhonePe" className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-success outline-none" />
              </div>
            </div>
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setCollectFeeModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary">Cancel</button>
              <button onClick={() => handleAction("Fee Collection", () => setCollectFeeModalOpen(false))} className="px-4 py-2 text-sm font-bold bg-success text-white rounded-lg hover:bg-success/80 shadow-md">Confirm Payment</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Fine Modal */}
      {isAddFineModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-danger/5">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><AlertCircle className="text-danger" /> Add Fine</h3>
              <button onClick={() => setAddFineModalOpen(false)} className="text-text-secondary hover:text-danger"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Reason</label>
                <select className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-danger outline-none">
                  <option>Late Fee</option>
                  <option>Library Book Damage</option>
                  <option>Disciplinary Fine</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Fine Amount (₹)</label>
                <input type="number" placeholder="Enter amount" className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-danger outline-none" />
              </div>
            </div>
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setAddFineModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary">Cancel</button>
              <button onClick={() => handleAction("Fine Addition", () => setAddFineModalOpen(false))} className="px-4 py-2 text-sm font-bold bg-danger text-white rounded-lg hover:bg-danger/80 shadow-md">Apply Fine</button>
            </div>
          </div>
        </div>
      )}

      {/* Grant Concession Modal */}
      {isGrantConcessionModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-info/5">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><Gift className="text-info" /> Grant Concession</h3>
              <button onClick={() => setGrantConcessionModalOpen(false)} className="text-text-secondary hover:text-danger"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Type</label>
                <select className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-info outline-none">
                  <option>Concession</option>
                  <option>Scholarship</option>
                  <option>Discount</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Amount (₹)</label>
                <input type="number" placeholder="Enter amount" className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-info outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Approved By</label>
                <input type="text" placeholder="e.g. Principal / Chairman" className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-info outline-none" />
              </div>
            </div>
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setGrantConcessionModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary">Cancel</button>
              <button onClick={() => handleAction("Concession Grant", () => setGrantConcessionModalOpen(false))} className="px-4 py-2 text-sm font-bold bg-info text-white rounded-lg hover:bg-info/80 shadow-md">Grant Amount</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
