"use client";
import React from "react";
import { Search } from "lucide-react";
import { MOCK_TRANSACTIONS, formatCurrency } from "../accountant_dashboard_utils/AccountantDashboardConstants";
import { useAccountantDashboardStore } from "../accountant_dashboard_store/useAccountantDashboardStore";
import clsx from "clsx";

// RESPONSIBILITY: Renders the paginated table for Today's Transactions and Recent Payments.

export default function AccountantDashboardTransactions() {
  const { activeTransactionTab, setActiveTransactionTab } = useAccountantDashboardStore();

  const handleRowClick = (id: string) => {
    alert(`Opening transaction receipt for ${id}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-success bg-success/10';
      case 'Pending': return 'text-warning bg-warning/10';
      case 'Failed': return 'text-danger bg-danger/10';
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
      {/* Header and Controls */}
      <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        {/* Segmented Control */}
        <div className="flex bg-bg-page p-1 rounded-lg border border-border w-full sm:w-auto">
          <button
            onClick={() => setActiveTransactionTab('today')}
            className={clsx(
              "flex-1 sm:flex-none px-4 py-1.5 text-xs font-semibold rounded-md transition-colors",
              activeTransactionTab === 'today' ? "bg-primary text-white" : "text-text-secondary hover:text-text-primary"
            )}
          >
            Today's Transactions
          </button>
          <button
            onClick={() => setActiveTransactionTab('recent')}
            className={clsx(
              "flex-1 sm:flex-none px-4 py-1.5 text-xs font-semibold rounded-md transition-colors",
              activeTransactionTab === 'recent' ? "bg-primary text-white" : "text-text-secondary hover:text-text-primary"
            )}
          >
            Recent Payments
          </button>
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-2 bg-bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary w-full sm:w-64">
          <Search size={14} className="text-text-secondary" />
          <input
            type="text"
            placeholder="Search student or TXN ID..."
            className="bg-transparent border-none outline-none text-xs text-text-primary w-full placeholder:text-text-secondary"
          />
        </div>
      </div>

      {/* Table Area (Desktop-first approach, collapses to cards on mobile conceptually) */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">TXN ID</th>
              <th className="p-4">Student Info</th>
              <th className="p-4 w-32">Method</th>
              <th className="p-4 w-28 text-center">Status</th>
              <th className="p-4 w-32 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TRANSACTIONS.map((txn, index) => (
              <tr 
                key={txn.id} 
                onClick={() => handleRowClick(txn.id)}
                className={clsx(
                  "border-b border-border/50 hover:bg-primary/5 cursor-pointer transition-colors group",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
              >
                <td className="p-4 text-sm font-medium text-text-primary">
                  {txn.id}
                  <div className="text-[10px] text-text-secondary font-normal mt-0.5">{txn.time}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary truncate">{txn.studentName}</div>
                  <div className="text-xs text-text-secondary">{txn.className}</div>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2 py-0.5 rounded-md text-[11px] font-bold", getMethodBadge(txn.method))}>
                    {txn.method}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-transparent", getStatusBadge(txn.status))}>
                    {txn.status}
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-text-primary text-right">
                  {formatCurrency(txn.amount)}
                </td>
              </tr>
            ))}
            {(!MOCK_TRANSACTIONS || MOCK_TRANSACTIONS.length === 0) && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary text-sm">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Footer / Pagination Placeholder */}
      <div className="p-3 border-t border-border bg-bg-page text-center mt-auto">
        <button className="text-xs font-bold text-primary hover:underline">View All Transactions</button>
      </div>
    </div>
  );
}
