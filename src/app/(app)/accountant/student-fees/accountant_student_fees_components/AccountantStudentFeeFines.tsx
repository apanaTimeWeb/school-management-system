"use client";
import React from "react";
import { AlertCircle, Plus } from "lucide-react";
import { MOCK_FINES, formatCurrency } from "../accountant_student_fees_utils/AccountantStudentFeesConstants";
import { useAccountantStudentFeesStore } from "../accountant_student_fees_store/useAccountantStudentFeesStore";
import clsx from "clsx";

// RESPONSIBILITY: Renders applied fines and late fees for the student.

export default function AccountantStudentFeeFines() {
  const { setAddFineModalOpen } = useAccountantStudentFeesStore();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-success bg-success/10 border-success/20';
      case 'Pending': return 'text-danger bg-danger/10 border-danger/20';
      case 'Waived': return 'text-text-secondary bg-bg-page border-border';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-border flex justify-between items-center bg-danger/5">
        <h3 className="text-sm font-bold text-danger uppercase tracking-wider flex items-center gap-2">
          <AlertCircle size={16} /> Fines & Late Fees
        </h3>
        <button 
          onClick={() => setAddFineModalOpen(true)}
          className="flex items-center gap-2 bg-danger/10 text-danger hover:bg-danger hover:text-white px-3 py-1.5 rounded-md text-xs font-bold transition-colors"
        >
          <Plus size={14} /> Add Fine
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-12">#</th>
              <th className="p-4">Reason</th>
              <th className="p-4 w-32">Date Applied</th>
              <th className="p-4 w-28 text-center">Status</th>
              <th className="p-4 w-32 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_FINES.map((fine, index) => (
              <tr 
                key={fine.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30",
                  fine.status === 'Waived' && "opacity-60"
                )}
              >
                <td className="p-4 text-sm font-medium text-text-secondary">{index + 1}</td>
                <td className="p-4">
                  <div className={clsx("text-sm font-semibold", fine.status === 'Waived' ? "line-through text-text-secondary" : "text-text-primary")}>
                    {fine.reason}
                  </div>
                </td>
                <td className="p-4 text-sm text-text-secondary">{fine.dateApplied}</td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border", getStatusBadge(fine.status))}>
                    {fine.status}
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-right text-danger">
                  {formatCurrency(fine.amount)}
                </td>
              </tr>
            ))}
            {(!MOCK_FINES || MOCK_FINES.length === 0) && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary text-sm">
                  No fines applied to this student.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
