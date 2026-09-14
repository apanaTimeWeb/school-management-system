"use client";
import React from "react";
import { TrendingUp, Clock, CheckCircle2, AlertOctagon } from "lucide-react";

export default function AccountantIncomeMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <TrendingUp size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Total Booked</p>
          <h3 className="text-xl font-black text-text-primary mt-0.5">₹ 94,550 <span className="text-xs text-text-secondary font-semibold ml-1">(YTD)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-success/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Realized Income</p>
          <h3 className="text-xl font-black text-success mt-0.5">₹ 66,550 <span className="text-xs text-text-secondary font-semibold ml-1">(Actual)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-warning/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pending Clearance</p>
          <h3 className="text-xl font-black text-warning mt-0.5">₹ 3,000 <span className="text-xs text-text-secondary font-semibold ml-1">(Cheques)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-danger/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0">
          <AlertOctagon size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Bounced / Failed</p>
          <h3 className="text-xl font-black text-danger mt-0.5">₹ 25,000 <span className="text-xs text-text-secondary font-semibold ml-1">(1)</span></h3>
        </div>
      </div>
    </div>
  );
}
