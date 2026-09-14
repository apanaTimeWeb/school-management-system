"use client";
import React, { useState } from "react";
import { X, CheckCircle, ArrowDownRight, AlertTriangle, ShieldCheck } from "lucide-react";
import { useAccountantOnlinePaymentsStore } from "../accountant_online_payments_store/useAccountantOnlinePaymentsStore";
import { formatCurrency } from "../accountant_online_payments_utils/AccountantOnlinePaymentsConstants";
import clsx from "clsx";

export default function AccountantOnlinePaymentModals() {
  const { 
    selectedTransaction, 
    isTransactionModalOpen, setTransactionModalOpen,
    isRefundModalOpen, setRefundModalOpen
  } = useAccountantOnlinePaymentsStore();

  const [refundReason, setRefundReason] = useState("");

  const handleReconcile = () => {
    alert(`Transaction ${selectedTransaction?.gatewayTransactionId} marked as Reconciled!`);
    setTransactionModalOpen(false);
  };

  const handleProcessRefund = () => {
    alert(`Refund initiated for ${selectedTransaction?.gatewayTransactionId} with reason: ${refundReason}`);
    setRefundModalOpen(false);
    setTransactionModalOpen(false);
    setRefundReason("");
  };

  if (!selectedTransaction) return null;

  return (
    <>
      {/* Transaction Details Modal */}
      {isTransactionModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page">
              <h3 className="text-lg font-bold text-text-primary">Transaction Details</h3>
              <button onClick={() => setTransactionModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-6">
              
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-black text-text-primary">{formatCurrency(selectedTransaction.amount)}</h4>
                  <p className="text-sm font-semibold text-text-secondary mt-1">{selectedTransaction.method} Payment</p>
                </div>
                <div className="text-right">
                  <div className={clsx("px-3 py-1 text-xs font-bold rounded-full inline-block border mb-2", 
                    selectedTransaction.status === 'Successful' ? 'text-success bg-success/10 border-success/20' : 
                    selectedTransaction.status === 'Refunded' ? 'text-info bg-info/10 border-info/20' :
                    selectedTransaction.status === 'Pending' ? 'text-warning bg-warning/10 border-warning/20' :
                    'text-danger bg-danger/10 border-danger/20'
                  )}>
                    {selectedTransaction.status}
                  </div>
                  <div className="text-xs font-bold">
                    Recon: <span className={selectedTransaction.reconciliationStatus === 'Reconciled' ? 'text-success' : 'text-danger'}>{selectedTransaction.reconciliationStatus}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm bg-bg-page p-4 rounded-lg border border-border/50">
                <div>
                  <span className="block text-xs font-semibold text-text-secondary mb-1">Gateway ID</span>
                  <span className="font-mono font-bold text-primary">{selectedTransaction.gatewayTransactionId}</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-text-secondary mb-1">Internal Reference</span>
                  <span className="font-bold text-text-primary">{selectedTransaction.paymentReference}</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-text-secondary mb-1">Date & Time</span>
                  <span className="font-semibold text-text-primary">{selectedTransaction.date}</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-text-secondary mb-1">Student</span>
                  <span className="font-semibold text-text-primary">{selectedTransaction.studentName} ({selectedTransaction.admissionNo})</span>
                </div>
              </div>

              {selectedTransaction.failureReason && (
                <div className="bg-danger/5 border border-danger/20 p-3 rounded-lg flex items-start gap-3">
                  <AlertTriangle size={18} className="text-danger shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-danger uppercase tracking-wider mb-0.5">Failure Reason</p>
                    <p className="text-sm text-text-primary">{selectedTransaction.failureReason}</p>
                  </div>
                </div>
              )}

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-between items-center">
              <div>
                {selectedTransaction.status === 'Successful' && (
                  <button 
                    onClick={() => setRefundModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-info border border-info/30 hover:bg-info hover:text-white rounded-lg transition-all"
                  >
                    <ArrowDownRight size={16} /> Process Refund
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                {selectedTransaction.reconciliationStatus !== 'Reconciled' && (
                  <button onClick={handleReconcile} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-success text-white rounded-lg hover:bg-success/80 shadow-lg transition-all">
                    <ShieldCheck size={16} /> Mark Reconciled
                  </button>
                )}
                <button onClick={() => setTransactionModalOpen(false)} className="px-5 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Refund Modal */}
      {isRefundModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md fade-in scale-in">
          <div className="bg-card border border-info/50 rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-info/10 flex items-center justify-center text-info mx-auto mb-4">
                <ArrowDownRight size={32} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Process Refund?</h3>
              <p className="text-sm text-text-secondary mb-6">
                You are initiating a refund of <span className="font-bold text-text-primary">{formatCurrency(selectedTransaction.amount)}</span> for Gateway ID <span className="font-mono text-primary">{selectedTransaction.gatewayTransactionId}</span>. This will send a request directly to the payment gateway.
              </p>
              
              <div className="text-left mb-6">
                <label className="block text-xs font-semibold text-text-secondary mb-1">Reason for Refund</label>
                <input 
                  type="text" 
                  value={refundReason}
                  onChange={(e) => setRefundReason(e.target.value)}
                  placeholder="e.g. Duplicate payment, Admission cancelled..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-info outline-none" 
                />
              </div>
              
              <div className="flex gap-3">
                <button onClick={() => setRefundModalOpen(false)} className="flex-1 py-2.5 text-sm font-semibold bg-bg-input text-text-primary rounded-lg hover:bg-bg-page border border-border transition-colors">Abort</button>
                <button 
                  onClick={handleProcessRefund} 
                  disabled={!refundReason.trim()}
                  className="flex-1 py-2.5 text-sm font-bold bg-info text-white rounded-lg hover:bg-info/80 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Initiate Refund
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
