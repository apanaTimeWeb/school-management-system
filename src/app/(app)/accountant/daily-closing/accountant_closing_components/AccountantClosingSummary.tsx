"use client";
import React from "react";
import { Coins, CreditCard, Banknote, Landmark, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { formatCurrency, TODAY_SUMMARY } from "../accountant_closing_utils/AccountantClosingConstants";
import { useAccountantClosingStore } from "../accountant_closing_store/useAccountantClosingStore";

export default function AccountantClosingSummary() {
  const { setConfirmModalOpen } = useAccountantClosingStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-6 mb-6 relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-text-primary">Today's Settlement ({TODAY_SUMMARY.date})</h2>
          <p className="text-sm text-text-secondary mt-1">Review the total collections and deductions before closing the day.</p>
        </div>
        <button 
          onClick={() => setConfirmModalOpen(true)}
          className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-lg transition-colors shadow-primary/20"
        >
          <Coins size={18} /> Confirm & Close EOD
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        
        {/* Collections Breakdown */}
        <div className="col-span-1 md:col-span-2 xl:col-span-2 bg-bg-page border border-border rounded-lg p-4">
          <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4 border-b border-border pb-2">Collections (Inflow)</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center"><Banknote size={16} /></div>
                <span className="text-sm font-semibold text-text-primary">Cash Collection</span>
              </div>
              <span className="text-sm font-bold text-text-primary">{formatCurrency(TODAY_SUMMARY.cashCollection)}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-info/10 text-info flex items-center justify-center"><CreditCard size={16} /></div>
                <span className="text-sm font-semibold text-text-primary">Online Gateway (App)</span>
              </div>
              <span className="text-sm font-bold text-text-primary">{formatCurrency(TODAY_SUMMARY.onlineCollection)}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-warning/10 text-warning flex items-center justify-center"><Landmark size={16} /></div>
                <span className="text-sm font-semibold text-text-primary">Bank (Cheque/NEFT)</span>
              </div>
              <span className="text-sm font-bold text-text-primary">{formatCurrency(TODAY_SUMMARY.bankCollection)}</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
            <span className="text-sm font-bold text-text-secondary">Gross Collection</span>
            <span className="text-lg font-black text-success">{formatCurrency(TODAY_SUMMARY.grossCollection)}</span>
          </div>
        </div>

        {/* Deductions Breakdown */}
        <div className="bg-bg-page border border-border rounded-lg p-4">
          <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4 border-b border-border pb-2">Deductions (Outflow)</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-danger/10 text-danger flex items-center justify-center"><ArrowUpCircle size={16} /></div>
                <span className="text-sm font-semibold text-text-primary">Refunds Processed</span>
              </div>
              <span className="text-sm font-bold text-danger">{formatCurrency(TODAY_SUMMARY.refunds)}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-danger/10 text-danger flex items-center justify-center"><ArrowUpCircle size={16} /></div>
                <span className="text-sm font-semibold text-text-primary">Daily Expenses</span>
              </div>
              <span className="text-sm font-bold text-danger">{formatCurrency(TODAY_SUMMARY.expenses)}</span>
            </div>
          </div>

          <div className="mt-14 pt-4 border-t border-border flex justify-between items-center">
            <span className="text-sm font-bold text-text-secondary">Total Deductions</span>
            <span className="text-lg font-black text-danger">{formatCurrency(TODAY_SUMMARY.refunds + TODAY_SUMMARY.expenses)}</span>
          </div>
        </div>

        {/* Net Status */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex flex-col justify-center">
          <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Net Settlement</h3>
          <p className="text-3xl font-black text-text-primary mb-1">{formatCurrency(TODAY_SUMMARY.netCollection)}</p>
          <p className="text-xs text-text-secondary font-semibold">To be added to Opening Balance</p>
          
          <div className="mt-6 pt-4 border-t border-primary/10">
            <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">EOD System Balance</p>
            <p className="text-xl font-bold text-primary">{formatCurrency(TODAY_SUMMARY.closingBalance)}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
