"use client";
import React from "react";
import { Receipt, FilePlus } from "lucide-react";
import { MOCK_FEE_STRUCTURE, formatCurrency } from "../accountant_student_fees_utils/AccountantStudentFeesConstants";
import clsx from "clsx";

// RESPONSIBILITY: Renders the fee structure assigned to the student.

export default function AccountantStudentFeeStructure() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-success bg-success/10';
      case 'Pending': return 'text-warning bg-warning/10';
      case 'Overdue': return 'text-danger bg-danger/10';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-border flex justify-between items-center">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Assigned Fee Structure</h3>
        <button className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-black px-3 py-1.5 rounded-md text-xs font-bold transition-colors">
          <FilePlus size={14} /> Add Extra Fee
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-12">#</th>
              <th className="p-4">Fee Head</th>
              <th className="p-4 w-32">Due Date</th>
              <th className="p-4 w-28 text-center">Status</th>
              <th className="p-4 w-32 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_FEE_STRUCTURE.map((fee, index) => (
              <tr 
                key={fee.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
              >
                <td className="p-4 text-sm font-medium text-text-secondary">{index + 1}</td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary flex items-center gap-2">
                    <Receipt size={14} className="text-text-secondary" />
                    {fee.name}
                    {fee.isInstallment && (
                      <span className="text-[10px] bg-secondary text-primary px-2 py-0.5 rounded ml-2 font-bold">Inst</span>
                    )}
                  </div>
                </td>
                <td className="p-4 text-sm text-text-secondary">{fee.dueDate}</td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-transparent", getStatusBadge(fee.status))}>
                    {fee.status}
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-text-primary text-right">
                  {formatCurrency(fee.amount)}
                </td>
              </tr>
            ))}
            {(!MOCK_FEE_STRUCTURE || MOCK_FEE_STRUCTURE.length === 0) && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary text-sm">
                  No fee structure assigned.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
