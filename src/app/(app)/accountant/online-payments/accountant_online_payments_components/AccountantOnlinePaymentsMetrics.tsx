"use client";
import React from "react";
import { CreditCard, CheckCircle2, AlertTriangle, ArrowDownRight } from "lucide-react";

export default function AccountantOnlinePaymentsMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <CreditCard size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Total Volume</p>
          <h3 className="text-xl font-black text-text-primary mt-0.5">₹ 1,55,000</h3>
        </div>
      </div>

      <div className="bg-card border border-success/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Successful</p>
          <h3 className="text-xl font-black text-success mt-0.5">₹ 40,000 <span className="text-xs text-text-secondary font-semibold ml-1">(2 txns)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-danger/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0">
          <AlertTriangle size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Failed/Cancelled</p>
          <h3 className="text-xl font-black text-danger mt-0.5">₹ 30,000 <span className="text-xs text-text-secondary font-semibold ml-1">(2 txns)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-info/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0">
          <ArrowDownRight size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Refunded</p>
          <h3 className="text-xl font-black text-info mt-0.5">₹ 35,000 <span className="text-xs text-text-secondary font-semibold ml-1">(1 txn)</span></h3>
        </div>
      </div>
    </div>
  );
}
