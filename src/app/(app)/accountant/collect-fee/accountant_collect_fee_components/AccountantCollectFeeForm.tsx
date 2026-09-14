"use client";
import React, { useState } from "react";
import { Wallet, Calendar, FileText, CheckCircle2 } from "lucide-react";
import { useAccountantCollectFeeStore } from "../accountant_collect_fee_store/useAccountantCollectFeeStore";
import { PaymentType, PaymentCategory, OfflineMethod, OnlineMethod } from "../accountant_collect_fee_types/AccountantCollectFeeTypes";
import clsx from "clsx";

// RESPONSIBILITY: Renders the complex payment configuration form.

export default function AccountantCollectFeeForm() {
  const { 
    selectedStudent, paymentType, setPaymentType, paymentCategory, setPaymentCategory, 
    offlineMethod, setOfflineMethod, onlineMethod, setOnlineMethod,
    amountToCollect, setAmountToCollect, setReviewModalOpen 
  } = useAccountantCollectFeeStore();

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [ref, setRef] = useState("");
  const [remarks, setRemarks] = useState("");

  const paymentTypes: PaymentType[] = ['Full', 'Partial', 'Installment', 'Advance'];
  const offlineMethods: OfflineMethod[] = ['Cash', 'Cheque', 'Demand Draft'];
  const onlineMethods: OnlineMethod[] = ['UPI', 'Card', 'Bank Transfer'];

  if (!selectedStudent) {
    return (
      <div className="bg-card border border-border rounded-xl shadow-sm p-12 flex items-center justify-center text-center text-text-secondary h-full">
        Please select a student from Step 1 to configure payment details.
      </div>
    );
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountToCollect(e.target.value);
    if (e.target.value !== selectedStudent.totalPending.toString()) {
      if (paymentType === 'Full') setPaymentType('Partial');
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full fade-in">
      <div className="p-4 border-b border-border bg-primary/5">
        <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider">Step 2: Payment Details</h2>
      </div>
      
      <div className="p-6 flex flex-col gap-6 flex-1">
        
        {/* Payment Type Selection */}
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Payment Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {paymentTypes.map(type => (
              <button
                key={type}
                onClick={() => {
                  setPaymentType(type);
                  if (type === 'Full') setAmountToCollect(selectedStudent.totalPending.toString());
                }}
                className={clsx(
                  "py-2 px-3 text-xs font-bold rounded-lg border transition-all duration-200 flex items-center justify-center gap-2",
                  paymentType === type ? "bg-primary text-black border-primary shadow-md" : "bg-bg-page border-border text-text-secondary hover:border-primary/50"
                )}
              >
                {paymentType === type && <CheckCircle2 size={14} />} {type}
              </button>
            ))}
          </div>
        </div>

        {/* Amount & Date Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Amount to Collect (₹)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-primary font-bold">₹</span>
              <input 
                type="number" 
                value={amountToCollect}
                onChange={handleAmountChange}
                className="w-full bg-bg-input border border-border rounded-lg pl-8 pr-4 py-3 text-lg font-bold text-text-primary focus:border-primary outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Payment Date</label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-text-primary focus:border-primary outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Payment Mode Selection */}
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Payment Mode</label>
          <div className="flex bg-bg-page p-1 rounded-lg border border-border mb-4">
            {(['Online', 'Offline'] as PaymentCategory[]).map(category => (
              <button
                key={category}
                onClick={() => setPaymentCategory(category)}
                className={clsx(
                  "flex-1 py-2 text-xs font-bold rounded-md transition-colors",
                  paymentCategory === category ? "bg-secondary text-primary" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-3 fade-in">
            {paymentCategory === 'Online' ? (
              onlineMethods.map(method => (
                <button
                  key={method}
                  onClick={() => setOnlineMethod(method)}
                  className={clsx(
                    "py-2 text-xs font-bold rounded-lg border transition-all duration-200",
                    onlineMethod === method ? "bg-primary/10 text-primary border-primary" : "bg-bg-page border-border text-text-secondary hover:border-primary/50"
                  )}
                >
                  {method}
                </button>
              ))
            ) : (
              offlineMethods.map(method => (
                <button
                  key={method}
                  onClick={() => setOfflineMethod(method)}
                  className={clsx(
                    "py-2 text-xs font-bold rounded-lg border transition-all duration-200",
                    offlineMethod === method ? "bg-primary/10 text-primary border-primary" : "bg-bg-page border-border text-text-secondary hover:border-primary/50"
                  )}
                >
                  {method}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Ref & Remarks Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Transaction Ref / Cheque No</label>
            <div className="relative">
              <FileText size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input 
                type="text" 
                value={ref}
                onChange={(e) => setRef(e.target.value)}
                placeholder="Required for non-cash"
                className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-text-primary focus:border-primary outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Remarks (Optional)</label>
            <input 
              type="text" 
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Any additional notes..."
              className="w-full bg-bg-input border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:border-primary outline-none transition-colors"
            />
          </div>
        </div>

      </div>

      <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-4">
        <button className="px-6 py-2.5 text-sm font-bold text-text-secondary hover:text-text-primary transition-colors">Clear Form</button>
        <button 
          disabled={!amountToCollect || Number(amountToCollect) <= 0}
          onClick={() => setReviewModalOpen(true)}
          className="flex items-center gap-2 px-8 py-2.5 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Wallet size={18} /> Review & Collect
        </button>
      </div>
    </div>
  );
}
