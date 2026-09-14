"use client";
import React, { useState } from "react";
import { X, Send, History, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useAccountantConcessionsStore } from "../accountant_concessions_store/useAccountantConcessionsStore";
import { formatCurrency } from "../accountant_concessions_utils/AccountantConcessionsConstants";
import clsx from "clsx";

export default function AccountantConcessionsModals() {
  const { 
    selectedRequest, 
    isNewRequestModalOpen, setNewRequestModalOpen,
    isDetailsModalOpen, setDetailsModalOpen
  } = useAccountantConcessionsStore();

  const [reqStudent, setReqStudent] = useState("");
  const [reqType, setReqType] = useState("Scholarship");
  const [reqAmount, setReqAmount] = useState("");
  const [reqReason, setReqReason] = useState("");

  const handleSubmitRequest = () => {
    alert("New Concession Request submitted to Principal for approval.");
    setNewRequestModalOpen(false);
  };

  return (
    <>
      {/* New Request Modal */}
      {isNewRequestModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-primary/5">
              <h3 className="text-lg font-bold text-text-primary">New Concession Request</h3>
              <button onClick={() => setNewRequestModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Select Student</label>
                <input 
                  type="text" 
                  value={reqStudent}
                  onChange={(e) => setReqStudent(e.target.value)}
                  placeholder="Search by Name or ID..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Type</label>
                  <select 
                    value={reqType}
                    onChange={(e) => setReqType(e.target.value)}
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  >
                    <option>Scholarship</option>
                    <option>Discount</option>
                    <option>Staff Concession</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Amount (₹)</label>
                  <input 
                    type="number" 
                    value={reqAmount}
                    onChange={(e) => setReqAmount(e.target.value)}
                    placeholder="Enter amount" 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Reason / Justification</label>
                <textarea 
                  value={reqReason}
                  onChange={(e) => setReqReason(e.target.value)}
                  placeholder="Provide context for the admin/principal to review..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none min-h-[80px] resize-none"
                ></textarea>
              </div>

              <div className="bg-info/10 text-info border border-info/20 p-3 rounded-lg text-xs">
                This request will be routed to the <strong>Principal / Admin</strong> for final approval before being applied to the student's fee ledger.
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setNewRequestModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary">Cancel</button>
              <button onClick={handleSubmitRequest} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md">
                <Send size={16} /> Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Request Details / History Modal */}
      {isDetailsModalOpen && selectedRequest && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <History size={18} /> Request History: {selectedRequest.id}
              </h3>
              <button onClick={() => setDetailsModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6">
              <div className="bg-bg-input border border-border rounded-lg p-4 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{selectedRequest.studentName}</h4>
                    <p className="text-xs text-text-secondary">{selectedRequest.className} | {selectedRequest.admissionNo}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-primary">{formatCurrency(selectedRequest.amount)}</span>
                    <p className="text-xs font-semibold text-text-secondary mt-0.5">{selectedRequest.concessionType}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">Reason</p>
                  <p className="text-sm text-text-primary bg-bg-page p-2 rounded border border-border">{selectedRequest.reason}</p>
                </div>
              </div>

              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4 border-b border-border pb-2">Approval Timeline</h4>
              
              <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                
                {/* Step 1: Requested */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute left-[-24px] w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10 border-4 border-card">
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Request Created</h4>
                    <p className="text-xs text-text-secondary mt-0.5">By {selectedRequest.requestedBy} on {selectedRequest.requestedDate}</p>
                  </div>
                </div>

                {/* Step 2: Final Status */}
                <div className="relative flex items-start gap-4">
                  <div className={clsx("absolute left-[-24px] w-6 h-6 rounded-full flex items-center justify-center z-10 border-4 border-card",
                    selectedRequest.status === 'Approved' ? 'bg-success/20 text-success' : 
                    selectedRequest.status === 'Rejected' ? 'bg-danger/20 text-danger' : 
                    'bg-warning/20 text-warning'
                  )}>
                    {selectedRequest.status === 'Approved' ? <CheckCircle2 size={12} /> : 
                     selectedRequest.status === 'Rejected' ? <XCircle size={12} /> : 
                     <Clock size={12} />}
                  </div>
                  <div className="w-full">
                    <h4 className={clsx("text-sm font-bold", 
                      selectedRequest.status === 'Approved' ? 'text-success' : 
                      selectedRequest.status === 'Rejected' ? 'text-danger' : 
                      'text-warning'
                    )}>
                      {selectedRequest.status}
                    </h4>
                    {selectedRequest.status !== 'Pending Approval' ? (
                      <p className="text-xs text-text-secondary mt-0.5">
                        Reviewed by {selectedRequest.approvedBy} on {selectedRequest.approvalDate}
                      </p>
                    ) : (
                      <p className="text-xs text-text-secondary mt-0.5">Waiting for Principal / Admin review</p>
                    )}

                    {selectedRequest.remarks && (
                      <div className="mt-2 text-sm text-text-primary bg-bg-page p-2 rounded border border-border border-dashed">
                        <span className="font-semibold block mb-1">Reviewer Remarks:</span>
                        {selectedRequest.remarks}
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end">
              <button onClick={() => setDetailsModalOpen(false)} className="px-5 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">
                Close Timeline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
