"use client";
import React from "react";
import { Download, RefreshCcw, History } from "lucide-react";
import { MOCK_PAYMENT_HISTORY, formatCurrency } from "../accountant_student_fees_utils/AccountantStudentFeesConstants";
import clsx from "clsx";

// RESPONSIBILITY: Renders the transaction history (paid, refunded, failed).

export default function AccountantStudentFeeHistory() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Successful': return 'text-success bg-success/10 border-success/20';
      case 'Failed': return 'text-danger bg-danger/10 border-danger/20';
      case 'Refunded': return 'text-warning bg-warning/10 border-warning/20';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const getMethodBadge = (method: string) => {
    switch (method) {
      case 'UPI': return 'text-[#67E8F9] bg-[#164E63]';
      case 'Cash': return 'text-[#5EEAD4] bg-[#134E4A]';
      case 'Card': return 'text-[#94A3B8] bg-[#1E293B]';
      case 'Bank': return 'text-[#38BDF8] bg-[#0C4A6E]';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-border flex justify-between items-center">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
          <History size={16} /> Transaction History
        </h3>
        <button className="flex items-center gap-2 bg-bg-input text-text-primary hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-md text-xs font-bold transition-colors">
          <RefreshCcw size={14} /> Refresh
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">TXN ID</th>
              <th className="p-4">Receipt No</th>
              <th className="p-4 w-32">Date</th>
              <th className="p-4 w-24 text-center">Method</th>
              <th className="p-4 w-28 text-center">Status</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-12 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PAYMENT_HISTORY.map((txn, index) => (
              <tr 
                key={txn.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
              >
                <td className="p-4 text-sm font-medium text-text-primary">{txn.id}</td>
                <td className="p-4 text-sm text-text-secondary">{txn.receiptNo}</td>
                <td className="p-4 text-sm text-text-secondary">{txn.date}</td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2 py-0.5 rounded-md text-[11px] font-bold", getMethodBadge(txn.method))}>
                    {txn.method}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border", getStatusBadge(txn.status))}>
                    {txn.status}
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-success text-right">
                  {formatCurrency(txn.amount)}
                </td>
                <td className="p-4 text-center">
                  <button title="Download Receipt" className="text-text-secondary hover:text-primary transition-colors">
                    <Download size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {(!MOCK_PAYMENT_HISTORY || MOCK_PAYMENT_HISTORY.length === 0) && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-text-secondary text-sm">
                  No payment history found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
