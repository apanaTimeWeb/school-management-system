"use client";
import React from "react";
import { Eye, Printer } from "lucide-react";
import { MOCK_RECEIPTS_HISTORY, formatCurrency } from "../accountant_receipts_utils/AccountantReceiptsConstants";
import { useAccountantReceiptsStore } from "../accountant_receipts_store/useAccountantReceiptsStore";
import clsx from "clsx";

// RESPONSIBILITY: Renders the chronological receipt history table.

export default function AccountantReceiptsTable() {
  const { searchQuery, setSelectedReceipt, setReceiptModalOpen } = useAccountantReceiptsStore();

  const filteredReceipts = MOCK_RECEIPTS_HISTORY.filter(r => 
    r.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Valid': return 'text-success bg-success/10 border-success/20';
      case 'Voided': return 'text-danger bg-danger/10 border-danger/20';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const openPreview = (receipt: any) => {
    setSelectedReceipt(receipt);
    setReceiptModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">Receipt No</th>
              <th className="p-4">Student Info</th>
              <th className="p-4 w-32">Date</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-28 text-center">Status</th>
              <th className="p-4 w-24 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReceipts.map((receipt, index) => (
              <tr 
                key={receipt.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30",
                  receipt.status === 'Voided' && "opacity-70"
                )}
              >
                <td className="p-4 text-sm font-bold text-text-primary">
                  {receipt.id}
                  {receipt.status === 'Voided' && <div className="text-[10px] text-danger font-normal mt-0.5 line-through">{receipt.paymentMethod}</div>}
                  {receipt.status === 'Valid' && <div className="text-[10px] text-text-secondary font-normal mt-0.5">{receipt.paymentMethod}</div>}
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary">{receipt.studentName}</div>
                  <div className="text-xs text-text-secondary">{receipt.className} | {receipt.admissionNo}</div>
                </td>
                <td className="p-4 text-sm text-text-secondary">{receipt.date}</td>
                <td className="p-4 text-sm font-bold text-success text-right">
                  {formatCurrency(receipt.amount)}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border", getStatusBadge(receipt.status))}>
                    {receipt.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      onClick={() => openPreview(receipt)}
                      title="View Details" 
                      className="text-text-secondary hover:text-primary transition-colors p-1"
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      onClick={() => openPreview(receipt)}
                      title="Reprint" 
                      className="text-text-secondary hover:text-primary transition-colors p-1"
                    >
                      <Printer size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredReceipts.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary text-sm">
                  No receipts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Placeholder */}
      <div className="p-4 border-t border-border flex justify-between items-center text-xs text-text-secondary bg-bg-page">
        <span>Showing 1 to {filteredReceipts.length} of {filteredReceipts.length} entries</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-border rounded hover:bg-bg-input transition-colors disabled:opacity-50" disabled>Previous</button>
          <button className="px-3 py-1 border border-border rounded hover:bg-bg-input transition-colors disabled:opacity-50" disabled>Next</button>
        </div>
      </div>
    </div>
  );
}
