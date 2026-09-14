"use client";
import React from "react";
import { Gift, Plus } from "lucide-react";
import { MOCK_DISCOUNTS, formatCurrency } from "../accountant_student_fees_utils/AccountantStudentFeesConstants";
import { useAccountantStudentFeesStore } from "../accountant_student_fees_store/useAccountantStudentFeesStore";
import clsx from "clsx";

// RESPONSIBILITY: Renders the discounts, scholarships, and concessions for a student.

export default function AccountantStudentFeeDiscounts() {
  const { setGrantConcessionModalOpen } = useAccountantStudentFeesStore();

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Scholarship': return 'text-primary bg-primary/10 border-primary/20';
      case 'Concession': return 'text-info bg-info/10 border-info/20';
      case 'Discount': return 'text-success bg-success/10 border-success/20';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-border flex justify-between items-center">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Discounts & Scholarships</h3>
        <button 
          onClick={() => setGrantConcessionModalOpen(true)}
          className="flex items-center gap-2 bg-info/10 text-info hover:bg-info hover:text-white px-3 py-1.5 rounded-md text-xs font-bold transition-colors"
        >
          <Plus size={14} /> Grant Concession
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-12">#</th>
              <th className="p-4">Title</th>
              <th className="p-4 w-32 text-center">Type</th>
              <th className="p-4 w-40 text-center">Approved By</th>
              <th className="p-4 w-32 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_DISCOUNTS.map((discount, index) => (
              <tr 
                key={discount.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
              >
                <td className="p-4 text-sm font-medium text-text-secondary">{index + 1}</td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary flex items-center gap-2">
                    <Gift size={14} className="text-text-secondary" />
                    {discount.name}
                  </div>
                  <div className="text-xs text-text-secondary mt-0.5">Applied on {discount.date}</div>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border", getTypeBadge(discount.type))}>
                    {discount.type}
                  </span>
                </td>
                <td className="p-4 text-center text-sm text-text-secondary">
                  {discount.approvedBy}
                </td>
                <td className="p-4 text-sm font-bold text-success text-right">
                  - {formatCurrency(discount.amount)}
                </td>
              </tr>
            ))}
            {(!MOCK_DISCOUNTS || MOCK_DISCOUNTS.length === 0) && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary text-sm">
                  No discounts or concessions applied.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
