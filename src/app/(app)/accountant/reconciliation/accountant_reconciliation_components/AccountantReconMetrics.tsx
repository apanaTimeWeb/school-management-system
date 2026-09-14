"use client";
import React from "react";
import { CheckCircle2, AlertOctagon, Copy, BarChart3 } from "lucide-react";
import { MOCK_RECON_SUMMARY, formatCurrency } from "../accountant_reconciliation_utils/AccountantReconConstants";

export default function AccountantReconMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-success/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Matched TXNs</p>
          <h3 className="text-xl font-black text-success mt-0.5">{MOCK_RECON_SUMMARY.matchedCount}</h3>
        </div>
      </div>

      <div className="bg-card border border-danger/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0 relative overflow-hidden">
          <AlertOctagon size={24} className="relative z-10" />
          <div className="absolute inset-0 bg-danger opacity-10 animate-pulse"></div>
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Unmatched TXNs</p>
          <h3 className="text-xl font-black text-danger mt-0.5">{MOCK_RECON_SUMMARY.unmatchedCount}</h3>
        </div>
      </div>

      <div className="bg-card border border-warning/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <Copy size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Duplicates</p>
          <h3 className="text-xl font-black text-warning mt-0.5">{MOCK_RECON_SUMMARY.duplicateCount}</h3>
        </div>
      </div>

      <div className="bg-card border border-primary/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <BarChart3 size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Total Volume</p>
          <h3 className="text-xl font-black text-text-primary mt-0.5">{formatCurrency(MOCK_RECON_SUMMARY.totalVolume)}</h3>
        </div>
      </div>
    </div>
  );
}
