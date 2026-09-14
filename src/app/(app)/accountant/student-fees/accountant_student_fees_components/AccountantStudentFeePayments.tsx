"use client";
import React from "react";
import { Wallet, AlertTriangle, CreditCard, ChevronRight } from "lucide-react";
import { formatCurrency, MOCK_FEE_STRUCTURE } from "../accountant_student_fees_utils/AccountantStudentFeesConstants";
import { useAccountantStudentFeesStore } from "../accountant_student_fees_store/useAccountantStudentFeesStore";
import clsx from "clsx";

// RESPONSIBILITY: Renders the paid, pending, and overdue fees (with installments).

export default function AccountantStudentFeePayments() {
  const { setCollectFeeModalOpen } = useAccountantStudentFeesStore();

  const pendingFees = MOCK_FEE_STRUCTURE.filter(f => f.status === 'Pending' || f.status === 'Overdue');
  const paidFees = MOCK_FEE_STRUCTURE.filter(f => f.status === 'Paid');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* PENDING & OVERDUE */}
      <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col h-full">
        <div className="p-4 border-b border-border flex justify-between items-center bg-danger/5 rounded-t-xl">
          <div className="flex items-center gap-2">
            <AlertTriangle size={18} className="text-warning" />
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Pending Dues</h3>
          </div>
          <button 
            onClick={() => setCollectFeeModalOpen(true)}
            className="flex items-center gap-2 bg-success text-white hover:bg-success/80 px-3 py-1.5 rounded-md text-xs font-bold transition-colors shadow-sm"
          >
            <Wallet size={14} /> Collect Now
          </button>
        </div>
        
        <div className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto">
          {pendingFees.map((fee) => (
            <div key={fee.id} className="p-3 border border-border rounded-lg bg-bg-page hover:border-primary/50 transition-colors flex justify-between items-center group">
              <div>
                <h4 className="text-sm font-semibold text-text-primary">{fee.name}</h4>
                <p className="text-xs text-text-secondary mt-1">Due: {fee.dueDate}</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-danger block mb-1">{formatCurrency(fee.amount)}</span>
                <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", fee.status === 'Overdue' ? 'bg-danger/20 text-danger' : 'bg-warning/20 text-warning')}>
                  {fee.status}
                </span>
              </div>
            </div>
          ))}
          {pendingFees.length === 0 && (
            <div className="text-center text-sm text-text-secondary py-8">
              No pending dues. Student is fully cleared!
            </div>
          )}
        </div>
      </div>

      {/* PAID FEES */}
      <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col h-full">
        <div className="p-4 border-b border-border flex items-center gap-2 bg-success/5 rounded-t-xl">
          <CreditCard size={18} className="text-success" />
          <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Paid Installments</h3>
        </div>
        
        <div className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto">
          {paidFees.map((fee) => (
            <div key={fee.id} className="p-3 border border-success/20 rounded-lg bg-bg-page flex justify-between items-center group cursor-pointer hover:bg-success/5 transition-colors">
              <div>
                <h4 className="text-sm font-semibold text-text-primary">{fee.name}</h4>
                <p className="text-xs text-text-secondary mt-1">Cleared on or before: {fee.dueDate}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-success">{formatCurrency(fee.amount)}</span>
                <ChevronRight size={16} className="text-text-secondary group-hover:text-success" />
              </div>
            </div>
          ))}
          {paidFees.length === 0 && (
            <div className="text-center text-sm text-text-secondary py-8">
              No paid fees found.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
