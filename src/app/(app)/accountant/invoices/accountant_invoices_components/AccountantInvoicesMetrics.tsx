"use client";
import React from "react";
import { FileSpreadsheet, CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { MOCK_INVOICES, formatCurrency } from "../accountant_invoices_utils/AccountantInvoicesConstants";

export default function AccountantInvoicesMetrics() {
  const totalVolume = MOCK_INVOICES.reduce((sum, inv) => sum + inv.totalAmount, 0);
  const totalPaid = MOCK_INVOICES.filter(i => i.status === 'Paid').reduce((sum, inv) => sum + inv.totalAmount, 0);
  const totalUnpaid = MOCK_INVOICES.filter(i => i.status === 'Unpaid').reduce((sum, inv) => sum + inv.totalAmount, 0);
  const totalOverdue = MOCK_INVOICES.filter(i => i.status === 'Overdue').reduce((sum, inv) => sum + inv.totalAmount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-card border border-primary/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <FileSpreadsheet size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Total Billed</p>
          <h3 className="text-xl font-black text-text-primary mt-0.5">{formatCurrency(totalVolume)}</h3>
        </div>
      </div>

      <div className="bg-card border border-success/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Collected (Paid)</p>
          <h3 className="text-xl font-black text-success mt-0.5">{formatCurrency(totalPaid)}</h3>
        </div>
      </div>

      <div className="bg-card border border-warning/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pending (Unpaid)</p>
          <h3 className="text-xl font-black text-warning mt-0.5">{formatCurrency(totalUnpaid)}</h3>
        </div>
      </div>

      <div className="bg-card border border-danger/20 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0 relative overflow-hidden">
          <AlertTriangle size={24} className="relative z-10" />
          <div className="absolute inset-0 bg-danger opacity-10 animate-pulse"></div>
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Overdue</p>
          <h3 className="text-xl font-black text-danger mt-0.5">{formatCurrency(totalOverdue)}</h3>
        </div>
      </div>
    </div>
  );
}
