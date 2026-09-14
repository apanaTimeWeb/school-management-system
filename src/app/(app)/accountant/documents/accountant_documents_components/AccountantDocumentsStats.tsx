"use client";
import React from "react";
import { HardDrive, FileText, Receipt, ShieldCheck } from "lucide-react";

export default function AccountantDocumentsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-primary/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <HardDrive size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Total Storage</p>
          <h3 className="text-xl font-black text-text-primary mt-0.5">4.2 GB <span className="text-sm font-semibold text-text-secondary">/ 10 GB</span></h3>
        </div>
      </div>

      <div className="bg-card border border-success/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
          <FileText size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Total Documents</p>
          <h3 className="text-xl font-black text-success mt-0.5">1,432</h3>
        </div>
      </div>

      <div className="bg-card border border-warning/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <Receipt size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Invoices / Bills</p>
          <h3 className="text-xl font-black text-warning mt-0.5">845</h3>
        </div>
      </div>

      <div className="bg-card border border-info/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Payment Proofs</p>
          <h3 className="text-xl font-black text-info mt-0.5">420</h3>
        </div>
      </div>
    </div>
  );
}
