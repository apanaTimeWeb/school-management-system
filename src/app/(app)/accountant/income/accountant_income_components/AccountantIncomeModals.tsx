"use client";
import React, { useState } from "react";
import { X, Save, History, Printer, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useAccountantIncomeStore } from "../accountant_income_store/useAccountantIncomeStore";
import { formatCurrency, INCOME_CATEGORIES } from "../accountant_income_utils/AccountantIncomeConstants";
import clsx from "clsx";

export default function AccountantIncomeModals() {
  const { 
    selectedIncome, 
    isRecordIncomeModalOpen, setRecordIncomeModalOpen,
    isDetailsModalOpen, setDetailsModalOpen
  } = useAccountantIncomeStore();

  // Form State
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("Miscellaneous Income");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [reference, setReference] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleRecordIncome = () => {
    alert("Income Receipt successfully recorded.");
    setRecordIncomeModalOpen(false);
  };

  return (
    <>
      {/* Record Income Modal */}
      {isRecordIncomeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-primary/5 shrink-0">
              <h3 className="text-lg font-bold text-text-primary">Record Income / Receipt</h3>
              <button onClick={() => setRecordIncomeModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Source / Payer Name</label>
                  <input 
                    type="text" 
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="e.g. Student Name or Scrap Vendor" 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Income Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  >
                    {INCOME_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Amount Received (₹)</label>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 5000" 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Date of Receipt</label>
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
                    <option>Cash</option>
                    <option>Cheque</option>
                    <option>Bank Transfer</option>
                    <option>UPI</option>
                    <option>Card</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Reference No (Admission No / TXN ID)</label>
                  <input 
                    type="text" 
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="e.g. ADM-01 or TXN-123" 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Remarks (Optional)</label>
                <textarea 
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Any additional notes..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none min-h-[80px] resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
              <button onClick={() => setRecordIncomeModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleRecordIncome} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors">
                <Save size={16} /> Save Receipt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {isDetailsModalOpen && selectedIncome && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <History size={18} /> Receipt Details
              </h3>
              <button onClick={() => setDetailsModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="bg-bg-input border border-border rounded-lg p-4 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{selectedIncome.source}</h4>
                    <p className="text-xs text-text-secondary font-semibold mt-1 inline-block bg-primary/10 text-primary px-2 py-0.5 rounded">{selectedIncome.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-success">{formatCurrency(selectedIncome.amount)}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mt-4 pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-text-secondary block">Receipt No</span>
                    <span className="font-semibold text-text-primary">{selectedIncome.id}</span>
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Date</span>
                    <span className="font-semibold text-text-primary">{selectedIncome.incomeDate}</span>
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Payment Method</span>
                    <span className="font-semibold text-text-primary">{selectedIncome.paymentMethod}</span>
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Ref / TXN ID</span>
                    <span className="font-mono font-bold text-text-primary">{selectedIncome.transactionId || selectedIncome.referenceNo || 'N/A'}</span>
                  </div>
                </div>

                {selectedIncome.remarks && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-text-secondary block mb-1">Remarks</span>
                    <p className="text-sm text-text-primary bg-bg-page p-2 rounded">{selectedIncome.remarks}</p>
                  </div>
                )}
              </div>

              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4 border-b border-border pb-2">Status Timeline</h4>
              
              <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                
                <div className="relative flex items-start gap-4">
                  <div className={clsx("absolute left-[-24px] w-6 h-6 rounded-full flex items-center justify-center z-10 border-4 border-card",
                    selectedIncome.status === 'Realized' ? 'bg-success/20 text-success' : 
                    selectedIncome.status === 'Bounced' ? 'bg-danger/20 text-danger' : 
                    selectedIncome.status === 'Refunded' ? 'bg-bg-input text-border border-border' :
                    'bg-warning/20 text-warning'
                  )}>
                    {selectedIncome.status === 'Realized' ? <CheckCircle2 size={12} /> : 
                     selectedIncome.status === 'Bounced' ? <XCircle size={12} /> : 
                     <Clock size={12} />}
                  </div>
                  <div>
                    <h4 className={clsx("text-sm font-bold", 
                      selectedIncome.status === 'Realized' ? 'text-success' : 
                      selectedIncome.status === 'Bounced' ? 'text-danger' : 
                      selectedIncome.status === 'Refunded' ? 'text-text-secondary' :
                      'text-warning'
                    )}>
                      {selectedIncome.status === 'Realized' ? 'Amount Realized' : selectedIncome.status}
                    </h4>
                    <p className="text-xs text-text-secondary mt-0.5">Processed by {selectedIncome.receivedBy}</p>
                  </div>
                </div>

              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-between shrink-0">
              <button 
                onClick={() => alert("Printing receipt...")} 
                className="px-4 py-2 text-sm font-bold bg-bg-input text-text-primary border border-border rounded-lg hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-2"
              >
                <Printer size={16} /> Print Receipt
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
