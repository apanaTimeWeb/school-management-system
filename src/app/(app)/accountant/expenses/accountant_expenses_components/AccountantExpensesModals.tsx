"use client";
import React, { useState } from "react";
import { X, Send, History, CheckCircle2, Clock, XCircle, Paperclip, Upload } from "lucide-react";
import { useAccountantExpensesStore } from "../accountant_expenses_store/useAccountantExpensesStore";
import { formatCurrency, EXPENSE_CATEGORIES } from "../accountant_expenses_utils/AccountantExpensesConstants";
import clsx from "clsx";

export default function AccountantExpensesModals() {
  const { 
    selectedExpense, 
    isNewExpenseModalOpen, setNewExpenseModalOpen,
    isDetailsModalOpen, setDetailsModalOpen
  } = useAccountantExpensesStore();

  // Form State
  const [vendor, setVendor] = useState("");
  const [category, setCategory] = useState("Electricity");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [billRef, setBillRef] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmitExpense = () => {
    alert("Expense Entry submitted and sent for Approval.");
    setNewExpenseModalOpen(false);
  };

  return (
    <>
      {/* Add New Expense Modal */}
      {isNewExpenseModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-primary/5 shrink-0">
              <h3 className="text-lg font-bold text-text-primary">Record New Expense</h3>
              <button onClick={() => setNewExpenseModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Vendor / Payee</label>
                  <input 
                    type="text" 
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    placeholder="e.g. State Electricity Board" 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Expense Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  >
                    {EXPENSE_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Amount (₹)</label>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 15000" 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Expense Date</label>
                  <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Payment Method</label>
                  <select 
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  >
                    <option>Bank Transfer</option>
                    <option>Card</option>
                    <option>Cash</option>
                    <option>UPI</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Bill/Invoice Reference</label>
                  <input 
                    type="text" 
                    value={billRef}
                    onChange={(e) => setBillRef(e.target.value)}
                    placeholder="e.g. INV-12345" 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Upload Attachment (Invoice/Receipt)</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center bg-bg-input/50 hover:bg-bg-input cursor-pointer transition-colors text-center"
                     onClick={() => document.getElementById('file-upload')?.click()}>
                  <Upload size={24} className="text-text-secondary mb-2" />
                  <p className="text-sm text-text-primary font-semibold">Click to upload or drag and drop</p>
                  <p className="text-xs text-text-secondary mt-1">PDF, JPG, PNG up to 5MB</p>
                  <input id="file-upload" type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  {file && <p className="text-sm font-bold text-primary mt-2">{file.name}</p>}
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
              <button onClick={() => setNewExpenseModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleSubmitExpense} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors">
                <Send size={16} /> Submit for Approval
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details & Timeline Modal */}
      {isDetailsModalOpen && selectedExpense && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <History size={18} /> Expense Details
              </h3>
              <button onClick={() => setDetailsModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="bg-bg-input border border-border rounded-lg p-4 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{selectedExpense.vendor}</h4>
                    <p className="text-xs text-text-secondary font-semibold mt-1 inline-block bg-primary/10 text-primary px-2 py-0.5 rounded">{selectedExpense.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-danger">{formatCurrency(selectedExpense.amount)}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mt-4 pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-text-secondary block">Date</span>
                    <span className="font-semibold text-text-primary">{selectedExpense.expenseDate}</span>
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Payment Method</span>
                    <span className="font-semibold text-text-primary">{selectedExpense.paymentMethod}</span>
                  </div>
                  <div className="col-span-2 flex items-center justify-between bg-bg-page p-2 rounded border border-border">
                    <div>
                      <span className="text-xs text-text-secondary block">Bill Reference</span>
                      <span className="font-mono font-bold text-text-primary">{selectedExpense.billInvoiceRef}</span>
                    </div>
                    {selectedExpense.hasAttachment && (
                      <button className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                        <Paperclip size={14} /> View Invoice
                      </button>
                    )}
                  </div>
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
                    <h4 className="text-sm font-bold text-text-primary">Expense Recorded</h4>
                    <p className="text-xs text-text-secondary mt-0.5">By {selectedExpense.requestedBy} (Waiting for Approval)</p>
                  </div>
                </div>

                {/* Step 2: Approval Status */}
                <div className="relative flex items-start gap-4">
                  <div className={clsx("absolute left-[-24px] w-6 h-6 rounded-full flex items-center justify-center z-10 border-4 border-card",
                    (selectedExpense.status === 'Approved' || selectedExpense.status === 'Paid') ? 'bg-success/20 text-success' : 
                    selectedExpense.status === 'Rejected' ? 'bg-danger/20 text-danger' : 
                    'bg-warning/20 text-warning'
                  )}>
                    {(selectedExpense.status === 'Approved' || selectedExpense.status === 'Paid') ? <CheckCircle2 size={12} /> : 
                     selectedExpense.status === 'Rejected' ? <XCircle size={12} /> : 
                     <Clock size={12} />}
                  </div>
                  <div className="w-full">
                    <h4 className={clsx("text-sm font-bold", 
                      (selectedExpense.status === 'Approved' || selectedExpense.status === 'Paid') ? 'text-success' : 
                      selectedExpense.status === 'Rejected' ? 'text-danger' : 
                      'text-warning'
                    )}>
                      {selectedExpense.status === 'Paid' ? 'Approved' : selectedExpense.status}
                    </h4>
                    {selectedExpense.approvalDate ? (
                      <p className="text-xs text-text-secondary mt-0.5">
                        By {selectedExpense.approvedBy} on {selectedExpense.approvalDate}
                      </p>
                    ) : (
                      <p className="text-xs text-text-secondary mt-0.5">Waiting for Principal / Admin review</p>
                    )}

                    {selectedExpense.remarks && (
                      <div className="mt-2 text-sm text-text-primary bg-bg-page p-2 rounded border border-border border-dashed">
                        <span className="font-semibold block mb-1">Remarks:</span>
                        {selectedExpense.remarks}
                      </div>
                    )}
                  </div>
                </div>

                {/* Step 3: Paid Status */}
                {(selectedExpense.status === 'Approved' || selectedExpense.status === 'Paid') && (
                  <div className="relative flex items-start gap-4">
                    <div className={clsx("absolute left-[-24px] w-6 h-6 rounded-full flex items-center justify-center z-10 border-4 border-card",
                      selectedExpense.status === 'Paid' ? 'bg-info/20 text-info' : 'bg-bg-input text-border border-border'
                    )}>
                      {selectedExpense.status === 'Paid' ? <CheckCircle2 size={12} /> : <div className="w-2 h-2 rounded-full bg-border" />}
                    </div>
                    <div>
                      <h4 className={clsx("text-sm font-bold", selectedExpense.status === 'Paid' ? 'text-info' : 'text-text-secondary')}>
                        {selectedExpense.status === 'Paid' ? 'Payment Completed' : 'Pending Payment'}
                      </h4>
                    </div>
                  </div>
                )}

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
    </>
  );
}
