"use client";
import React from "react";
import { CheckCircle2, Clock, XCircle, Gift } from "lucide-react";

export default function AccountantConcessionsMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <Gift size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Total Requests</p>
          <h3 className="text-xl font-black text-text-primary mt-0.5">₹ 85,000 <span className="text-xs text-text-secondary font-semibold ml-1">(5)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-success/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Approved</p>
          <h3 className="text-xl font-black text-success mt-0.5">₹ 35,000 <span className="text-xs text-text-secondary font-semibold ml-1">(2)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-warning/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pending Approval</p>
          <h3 className="text-xl font-black text-warning mt-0.5">₹ 45,000 <span className="text-xs text-text-secondary font-semibold ml-1">(2)</span></h3>
        </div>
      </div>

      <div className="bg-card border border-danger/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0">
          <XCircle size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Rejected</p>
          <h3 className="text-xl font-black text-danger mt-0.5">₹ 5,000 <span className="text-xs text-text-secondary font-semibold ml-1">(1)</span></h3>
        </div>
      </div>
    </div>
  );
}
