"use client";

import React from 'react';
import type { FeeTransaction } from '../student_fees_types/student_fees_types';
import { formatINR } from '../student_fees_utils/student_fees_utils';
import { History, Download, CreditCard, Banknote, Building, HelpCircle } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  history: FeeTransaction[];
}

export default function StudentFeesHistory({ history }: Props) {
  
  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'Online': return <CreditCard size={14} className="text-info" />;
      case 'Cash': return <Banknote size={14} className="text-success" />;
      case 'Cheque': 
      case 'Bank Transfer': return <Building size={14} className="text-primary" />;
      default: return <HelpCircle size={14} className="text-text-secondary" />;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5 sticky top-6 shadow-sm">
      <h3 className="text-base font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <History size={18} className="text-text-secondary" /> Payment History
      </h3>

      {history.length === 0 ? (
        <p className="text-sm text-text-secondary text-center py-4">No past transactions found.</p>
      ) : (
        <div className="space-y-4">
          {history.map((txn) => (
            <div key={txn.id} className="p-4 bg-page border border-border rounded-xl hover:border-primary/30 transition-colors group">
              
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-text-secondary uppercase">{txn.date}</span>
                <span className={clsx(
                  "text-[10px] font-bold px-1.5 py-0.5 rounded",
                  txn.status === 'Success' ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                )}>
                  {txn.status}
                </span>
              </div>
              
              <h5 className="text-sm font-bold text-text-primary mb-1 line-clamp-1">{txn.installmentTitle}</h5>
              
              <div className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary mb-3">
                {getMethodIcon(txn.paymentMethod)} {txn.paymentMethod} • Txn: {txn.transactionId}
              </div>

              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-base font-bold text-text-primary">{formatINR(txn.amountPaid)}</span>
                
                {txn.status === 'Success' && (
                  <button className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-md transition-colors">
                    <Download size={14} /> Receipt
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
