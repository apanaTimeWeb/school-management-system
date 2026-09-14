"use client";
import React from "react";
import { TrendingDown, Clock, CheckCircle2, XCircle } from "lucide-react";

export default function AccountantExpensesMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <TrendingDown size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Total Expenses</p>
          <h3 className="text-xl font-black text-text-primary mt-0.5">₹ 96,500 <span className="text-xs text-text-secondary font-semibold ml-1">(YTD)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-warning/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pending Approval</p>
          <h3 className="text-xl font-black text-warning mt-0.5">₹ 9,000 <span className="text-xs text-text-secondary font-semibold ml-1">(2 req)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-info/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Approved (Unpaid)</p>
          <h3 className="text-xl font-black text-info mt-0.5">₹ 12,500 <span className="text-xs text-text-secondary font-semibold ml-1">(1 req)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-danger/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0">
          <XCircle size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Rejected</p>
          <h3 className="text-xl font-black text-danger mt-0.5">₹ 30,000 <span className="text-xs text-text-secondary font-semibold ml-1">(1 req)</span></h3>
        </div>
      </div>
    </div>
  );
}
