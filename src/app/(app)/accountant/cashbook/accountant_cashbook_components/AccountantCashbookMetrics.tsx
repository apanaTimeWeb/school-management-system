"use client";
import React from "react";
import { Wallet, ArrowDownCircle, ArrowUpCircle, Scale } from "lucide-react";
import { formatCurrency, MOCK_DAILY_SUMMARY } from "../accountant_cashbook_utils/AccountantCashbookConstants";

export default function AccountantCashbookMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <Wallet size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Opening Cash</p>
          <h3 className="text-xl font-black text-text-primary mt-0.5">{formatCurrency(MOCK_DAILY_SUMMARY.openingCash)}</h3>
        </div>
      </div>

      <div className="bg-card border border-success/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
          <ArrowDownCircle size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Today's Inflow</p>
          <h3 className="text-xl font-black text-success mt-0.5">{formatCurrency(MOCK_DAILY_SUMMARY.totalCollection)}</h3>
        </div>
      </div>

      <div className="bg-card border border-danger/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0">
          <ArrowUpCircle size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Today's Outflow</p>
          <h3 className="text-xl font-black text-danger mt-0.5">{formatCurrency(MOCK_DAILY_SUMMARY.totalExpense)}</h3>
        </div>
      </div>

      <div className="bg-card border border-info/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0 relative overflow-hidden">
          <Scale size={24} className="relative z-10" />
          <div className="absolute inset-0 bg-info opacity-10 animate-pulse"></div>
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Current Balance</p>
          <h3 className="text-xl font-black text-info mt-0.5">{formatCurrency(MOCK_DAILY_SUMMARY.closingBalance)}</h3>
        </div>
      </div>
    </div>
  );
}
