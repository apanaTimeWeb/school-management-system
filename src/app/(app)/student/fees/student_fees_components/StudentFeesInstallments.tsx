"use client";

import React from 'react';
import type { FeeInstallment } from '../student_fees_types/student_fees_types';
import { formatINR } from '../student_fees_utils/student_fees_utils';
import { Calendar, AlertCircle, CheckCircle2, Receipt, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  installments: FeeInstallment[];
  onPay: (inst: FeeInstallment) => void;
}

export default function StudentFeesInstallments({ installments, onPay }: Props) {
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-success bg-success/10 border-success/20';
      case 'Unpaid': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      case 'Overdue': return 'text-danger bg-danger/10 border-danger/20';
      default: return 'text-text-secondary bg-page border-border';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <Receipt size={20} className="text-primary" /> Fee Structure & Installments
      </h3>

      <div className="space-y-4">
        {installments.map((inst) => {
          const isPaid = inst.status === 'Paid';
          
          return (
            <div 
              key={inst.id}
              className={clsx(
                "p-4 rounded-xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4",
                isPaid ? "bg-page border-border" : "bg-card border-primary/20 hover:border-primary/50 shadow-sm"
              )}
            >
              
              {/* Left: Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-base font-bold text-text-primary">{inst.title}</h4>
                  <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider", getStatusColor(inst.status))}>
                    {inst.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-semibold text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> Due: {inst.dueDate}
                  </span>
                  {isPaid && inst.paidOn && (
                    <span className="flex items-center gap-1 text-success">
                      <CheckCircle2 size={14} /> Paid On: {inst.paidOn}
                    </span>
                  )}
                </div>
              </div>

              {/* Middle: Breakup */}
              <div className="flex gap-4 p-3 bg-page border border-border rounded-lg text-xs font-semibold">
                <div className="flex flex-col text-text-secondary">
                  <span>Base Fee:</span>
                  <span>Fine:</span>
                  {(inst.concession > 0 || inst.scholarship > 0) && <span>Discount:</span>}
                </div>
                <div className="flex flex-col text-right text-text-primary">
                  <span>{formatINR(inst.amount)}</span>
                  <span className="text-danger">{formatINR(inst.fine)}</span>
                  {(inst.concession > 0 || inst.scholarship > 0) && (
                    <span className="text-success">-{formatINR(inst.concession + inst.scholarship)}</span>
                  )}
                </div>
              </div>

              {/* Right: Net Amount & Action */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 shrink-0 md:w-32 border-t md:border-t-0 border-border pt-4 md:pt-0 mt-2 md:mt-0">
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Net Amount</span>
                  <span className="text-lg font-bold text-text-primary">{formatINR(inst.netAmount)}</span>
                </div>
                
                {!isPaid && (
                  <button 
                    onClick={() => onPay(inst)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white rounded-md text-xs font-bold shadow-sm hover:bg-primary-hover transition-colors"
                  >
                    Pay Now <ArrowRight size={14} />
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
