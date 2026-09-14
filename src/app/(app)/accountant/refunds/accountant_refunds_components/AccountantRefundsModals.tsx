"use client";
import React, { useState } from "react";
import { X, Send, History, CheckCircle2, Clock, XCircle, CreditCard } from "lucide-react";
import { useAccountantRefundsStore } from "../accountant_refunds_store/useAccountantRefundsStore";
import { formatCurrency } from "../accountant_refunds_utils/AccountantRefundsConstants";
import clsx from "clsx";

export default function AccountantRefundsModals() {
  const { 
    selectedRefund, 
    isNewRefundModalOpen, setNewRefundModalOpen,
    isProcessModalOpen, setProcessModalOpen,
    isDetailsModalOpen, setDetailsModalOpen
  } = useAccountantRefundsStore();

  // New Request Form State
  const [reqStudent, setReqStudent] = useState("");
  const [reqAmount, setReqAmount] = useState("");
  const [reqReason, setReqReason] = useState("");

  // Process Refund State
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer (NEFT/RTGS)");
  const [transactionRef, setTransactionRef] = useState("");

  const handleSubmitRequest = () => {
    alert("Refund Request initiated and sent to Admin/Principal for approval.");
    setNewRefundModalOpen(false);
  };

  const handleProcessRefund = () => {
    alert(`Refund Processed successfully. Ref ID: ${transactionRef}`);
    setProcessModalOpen(false);
  };

  return (
    <>
      {/* Initiate Refund Request Modal */}
      {isNewRefundModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-primary/5">
              <h3 className="text-lg font-bold text-text-primary">Initiate Refund Request</h3>
              <button onClick={() => setNewRefundModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Select Student / Invoice</label>
                <input 
                  type="text" 
                  value={reqStudent}
                  onChange={(e) => setReqStudent(e.target.value)}
                  placeholder="Search by Name, Admission No, or Invoice..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Refund Amount (₹)</label>
                <input 
                  type="number" 
                  value={reqAmount}
                  onChange={(e) => setReqAmount(e.target.value)}
                  placeholder="Amount to be refunded" 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Reason for Refund</label>
                <textarea 
                  value={reqReason}
                  onChange={(e) => setReqReason(e.target.value)}
                  placeholder="Explain why this refund is being requested (e.g. Excess payment, Admission Cancelled)..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none min-h-[100px] resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setNewRefundModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleSubmitRequest} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors">
                <Send size={16} /> Submit for Approval
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Process Refund Modal (Post Approval) */}
      {isProcessModalOpen && selectedRefund && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-info/30 rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-info/10">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <CreditCard size={20} className="text-info" /> Process Refund Payment
              </h3>
              <button onClick={() => setProcessModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="bg-bg-page border border-border rounded-lg p-4 text-center">
                <p className="text-xs text-text-secondary font-bold uppercase tracking-wider mb-1">Approved Amount</p>
                <p className="text-3xl font-black text-info">{formatCurrency(selectedRefund.amount)}</p>
                <p className="text-sm font-semibold text-text-primary mt-2">For: {selectedRefund.studentName} ({selectedRefund.id})</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Payment Method Used</label>
                <select 
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-info outline-none"
                >
                  <option>Bank Transfer (NEFT/RTGS)</option>
                  <option>UPI / Online Gateway</option>
                  <option>Cheque</option>
                  <option>Cash (Not Recommended)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Transaction Reference / UTR</label>
                <input 
                  type="text" 
                  value={transactionRef}
                  onChange={(e) => setTransactionRef(e.target.value)}
                  placeholder="e.g. UTR1234567890" 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-info outline-none font-mono"
                />
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setProcessModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary">Cancel</button>
              <button 
                onClick={handleProcessRefund} 
                disabled={!transactionRef}
                className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-info text-white rounded-lg hover:bg-info/90 shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Mark as Processed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details & Timeline Modal */}
      {isDetailsModalOpen && selectedRefund && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <History size={18} /> Refund History: {selectedRefund.id}
              </h3>
              <button onClick={() => setDetailsModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6">
              <div className="bg-bg-input border border-border rounded-lg p-4 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{selectedRefund.studentName}</h4>
                    <p className="text-xs text-text-secondary">{selectedRefund.className} | {selectedRefund.admissionNo}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-primary">{formatCurrency(selectedRefund.amount)}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">Reason</p>
                  <p className="text-sm text-text-primary bg-bg-page p-2 rounded border border-border">{selectedRefund.reason}</p>
                </div>
              </div>

              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4 border-b border-border pb-2">Tracking Timeline</h4>
              
              <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                
                {/* Step 1: Requested */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute left-[-24px] w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10 border-4 border-card">
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Refund Requested</h4>
                    <p className="text-xs text-text-secondary mt-0.5">On {selectedRefund.requestedDate}</p>
                  </div>
                </div>

                {/* Step 2: Approval Status */}
                <div className="relative flex items-start gap-4">
                  <div className={clsx("absolute left-[-24px] w-6 h-6 rounded-full flex items-center justify-center z-10 border-4 border-card",
                    (selectedRefund.status === 'Approved' || selectedRefund.status === 'Processed') ? 'bg-success/20 text-success' : 
                    selectedRefund.status === 'Rejected' ? 'bg-danger/20 text-danger' : 
                    'bg-warning/20 text-warning'
                  )}>
                    {(selectedRefund.status === 'Approved' || selectedRefund.status === 'Processed') ? <CheckCircle2 size={12} /> : 
                     selectedRefund.status === 'Rejected' ? <XCircle size={12} /> : 
                     <Clock size={12} />}
                  </div>
                  <div className="w-full">
                    <h4 className={clsx("text-sm font-bold", 
                      (selectedRefund.status === 'Approved' || selectedRefund.status === 'Processed') ? 'text-success' : 
                      selectedRefund.status === 'Rejected' ? 'text-danger' : 
                      'text-warning'
                    )}>
                      {selectedRefund.status === 'Processed' ? 'Approved' : selectedRefund.status}
                    </h4>
                    {selectedRefund.approvalDate ? (
                      <p className="text-xs text-text-secondary mt-0.5">
                        By {selectedRefund.approvedBy} on {selectedRefund.approvalDate}
                      </p>
                    ) : (
                      <p className="text-xs text-text-secondary mt-0.5">Waiting for Principal / Admin review</p>
                    )}

                    {selectedRefund.remarks && (
                      <div className="mt-2 text-sm text-text-primary bg-bg-page p-2 rounded border border-border border-dashed">
                        <span className="font-semibold block mb-1">Remarks:</span>
                        {selectedRefund.remarks}
                      </div>
                    )}
                  </div>
                </div>

                {/* Step 3: Processed Status (Only show if Approved or Processed) */}
                {(selectedRefund.status === 'Approved' || selectedRefund.status === 'Processed') && (
                  <div className="relative flex items-start gap-4">
                    <div className={clsx("absolute left-[-24px] w-6 h-6 rounded-full flex items-center justify-center z-10 border-4 border-card",
                      selectedRefund.status === 'Processed' ? 'bg-info/20 text-info' : 'bg-bg-input text-border border-border'
                    )}>
                      {selectedRefund.status === 'Processed' ? <CheckCircle2 size={12} /> : <div className="w-2 h-2 rounded-full bg-border" />}
                    </div>
                    <div>
                      <h4 className={clsx("text-sm font-bold", selectedRefund.status === 'Processed' ? 'text-info' : 'text-text-secondary')}>
                        {selectedRefund.status === 'Processed' ? 'Refund Processed' : 'Pending Payment'}
                      </h4>
                      {selectedRefund.status === 'Processed' && (
                        <p className="text-xs text-text-secondary mt-0.5">
                          On {selectedRefund.processedDate} <br/>
                          Ref: <span className="font-mono font-bold text-text-primary">{selectedRefund.refundReference}</span>
                        </p>
                      )}
                    </div>
                  </div>
                )}

              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end">
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
