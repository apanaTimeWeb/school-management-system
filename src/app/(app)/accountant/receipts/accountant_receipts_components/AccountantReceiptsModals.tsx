"use client";
import React from "react";
import { X, Printer, Download, Mail, AlertTriangle, ShieldCheck, Search } from "lucide-react";
import { useAccountantReceiptsStore } from "../accountant_receipts_store/useAccountantReceiptsStore";
import { formatCurrency } from "../accountant_receipts_utils/AccountantReceiptsConstants";

// RESPONSIBILITY: Renders the Preview Modal (Print, PDF, Email, Void) and Verification Modal.

export default function AccountantReceiptsModals() {
  const { 
    selectedReceipt,
    isReceiptModalOpen, setReceiptModalOpen,
    isVoidModalOpen, setVoidModalOpen,
    isVerifyModalOpen, setVerifyModalOpen,
    setSelectedReceipt
  } = useAccountantReceiptsStore();

  const handleAction = (actionName: string) => {
    alert(`${actionName} action triggered successfully!`);
  };

  const handleVoidAction = () => {
    alert(`Receipt ${selectedReceipt?.id} has been voided successfully. Warning: This action was logged.`);
    setVoidModalOpen(false);
    setReceiptModalOpen(false);
    setSelectedReceipt(null);
  };

  return (
    <>
      {/* 1. Receipt Preview Modal */}
      {isReceiptModalOpen && selectedReceipt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary">Receipt Preview: {selectedReceipt.id}</h3>
              <button onClick={() => setReceiptModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
              {/* Fake Receipt Paper UI */}
              <div className="bg-[#FFFFFF] text-black p-8 rounded-sm shadow-inner mx-auto max-w-lg border border-gray-300 relative">
                {selectedReceipt.status === 'Voided' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <span className="text-6xl font-black text-red-600 border-4 border-red-600 px-6 py-2 rotate-[-30deg] rounded-xl uppercase tracking-widest">VOIDED</span>
                  </div>
                )}
                
                <div className="text-center mb-6 border-b border-gray-300 pb-4">
                  <h2 className="text-2xl font-black uppercase tracking-tight">School ERP 360</h2>
                  <p className="text-xs text-gray-600">123 Education Lane, Knowledge City</p>
                  <p className="text-xs text-gray-600">Ph: +91 9876543210 | GSTIN: 22AAAAA0000A1Z5</p>
                  <h3 className="text-lg font-bold mt-4 uppercase underline decoration-2 underline-offset-4">Fee Receipt</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div>
                    <p><span className="font-semibold">Receipt No:</span> {selectedReceipt.id}</p>
                    <p><span className="font-semibold">Date:</span> {selectedReceipt.date}</p>
                  </div>
                  <div className="text-right">
                    <p><span className="font-semibold">Adm No:</span> {selectedReceipt.admissionNo}</p>
                    <p><span className="font-semibold">Class:</span> {selectedReceipt.className}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm"><span className="font-semibold">Received with thanks from:</span> {selectedReceipt.studentName}</p>
                  <p className="text-sm mt-1"><span className="font-semibold">The sum of:</span> {formatCurrency(selectedReceipt.amount)}</p>
                  <p className="text-sm mt-1"><span className="font-semibold">By:</span> {selectedReceipt.paymentMethod} {selectedReceipt.transactionRef !== 'N/A' && `(${selectedReceipt.transactionRef})`}</p>
                </div>

                {selectedReceipt.status === 'Voided' && (
                  <div className="mt-4 p-3 bg-red-50 text-red-800 border border-red-200 rounded text-xs">
                    <span className="font-bold">Cancellation Reason:</span> {selectedReceipt.voidReason} (By {selectedReceipt.voidedBy})
                  </div>
                )}

                <div className="mt-12 flex justify-between items-end border-t border-gray-300 pt-4">
                  <div className="text-xs text-gray-500">This is a computer-generated receipt.</div>
                  <div className="text-center">
                    <div className="border-b border-black w-32 mb-1"></div>
                    <span className="text-xs font-semibold">Accountant Signature</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-between items-center shrink-0">
              <div>
                {selectedReceipt.status === 'Valid' && (
                  <button 
                    onClick={() => setVoidModalOpen(true)}
                    className="px-4 py-2 text-sm font-bold text-danger border border-danger/30 hover:bg-danger hover:text-white rounded-lg transition-all"
                  >
                    Cancel / Void Receipt
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleAction("Email sent")} className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
                  <Mail size={16} /> Email
                </button>
                <button onClick={() => handleAction("PDF Downloaded")} className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
                  <Download size={16} /> PDF
                </button>
                <button onClick={() => handleAction("Printing")} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-lg transition-all">
                  <Printer size={16} /> Reprint
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Void Warning Modal */}
      {isVoidModalOpen && selectedReceipt && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md fade-in scale-in">
          <div className="bg-card border border-danger/50 rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center text-danger mx-auto mb-4">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Void Receipt {selectedReceipt.id}?</h3>
              <p className="text-sm text-text-secondary mb-6">
                This action is <span className="font-bold text-danger">irreversible</span>. The amount of {formatCurrency(selectedReceipt.amount)} will be added back to the student's pending dues. This requires Admin/Manager level permissions.
              </p>
              
              <div className="text-left mb-6">
                <label className="block text-xs font-semibold text-text-secondary mb-1">Reason for Cancellation</label>
                <input type="text" placeholder="e.g. Wrong amount entered, cheque bounced..." className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-danger outline-none" />
              </div>
              
              <div className="flex gap-3">
                <button onClick={() => setVoidModalOpen(false)} className="flex-1 py-2.5 text-sm font-semibold bg-bg-input text-text-primary rounded-lg hover:bg-bg-page border border-border transition-colors">Abort</button>
                <button onClick={handleVoidAction} className="flex-1 py-2.5 text-sm font-bold bg-danger text-white rounded-lg hover:bg-danger/80 shadow-lg transition-all">Confirm Void</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Verify Receipt Modal */}
      {isVerifyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in scale-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-info/5">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><ShieldCheck className="text-info" /> Verify Receipt</h3>
              <button onClick={() => setVerifyModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6">
              <p className="text-sm text-text-secondary mb-4">Enter a Receipt Number or Scan Barcode to verify its authenticity and current status in the system.</p>
              
              <div className="relative mb-6">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input 
                  type="text" 
                  placeholder="e.g. REC-2024-001"
                  className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-text-primary focus:border-info outline-none uppercase"
                />
              </div>

              <button 
                onClick={() => handleAction("Receipt Verified: Valid")}
                className="w-full py-2.5 text-sm font-bold bg-info text-white rounded-lg hover:bg-info/80 shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck size={16} /> Check System Status
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
