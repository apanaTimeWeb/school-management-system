"use client";

import React, { useEffect, useState } from 'react';
import type { FeeInstallment } from '../student_fees_types/student_fees_types';
import { formatINR } from '../student_fees_utils/student_fees_utils';
import { X, CreditCard, Lock, ShieldCheck, Loader2 } from 'lucide-react';

interface Props {
  installment: FeeInstallment;
  onClose: () => void;
  onSuccess: () => void;
}

/**
 * RESPONSIBILITY: Simulates a secure payment gateway popup.
 */
export default function StudentFeesPaymentModal({ installment, onClose, onSuccess }: Props) {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape' && !isProcessing) onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, isProcessing]);

  const handlePay = () => {
    setIsProcessing(true);
    // Mock network delay for payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-overlay/80 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-popover border border-border rounded-xl w-full max-w-md flex flex-col shadow-2xl relative motion-safe:animate-[slideIn_0.3s_ease-out] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border bg-page rounded-t-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
            <ShieldCheck size={100} className="text-success" />
          </div>
          <div className="flex items-center gap-3 z-10">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <CreditCard size={20} className="text-primary" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-success uppercase tracking-wider flex items-center gap-1">
                <Lock size={10} /> Secure Checkout
              </span>
              <h2 className="text-lg font-bold text-text-primary leading-tight">
                Online Payment
              </h2>
            </div>
          </div>
          {!isProcessing && (
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:bg-danger/10 hover:text-danger hover:border-danger/30 transition-colors z-10"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-sm font-bold text-text-primary mb-4 border-b border-border pb-2">Payment Details</h3>
          
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-text-secondary">Fee Installment</span>
            <span className="text-sm font-bold text-text-primary">{installment.title}</span>
          </div>
          
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-text-secondary">Base Amount</span>
            <span className="text-sm font-bold text-text-primary">{formatINR(installment.amount)}</span>
          </div>

          {installment.fine > 0 && (
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-text-secondary">Late Fine</span>
              <span className="text-sm font-bold text-danger">{formatINR(installment.fine)}</span>
            </div>
          )}

          {(installment.concession > 0 || installment.scholarship > 0) && (
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-text-secondary">Discount</span>
              <span className="text-sm font-bold text-success">-{formatINR(installment.concession + installment.scholarship)}</span>
            </div>
          )}

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
            <span className="text-base font-bold text-text-primary">Total to Pay</span>
            <span className="text-2xl font-bold text-primary">{formatINR(installment.netAmount)}</span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-page border-t border-border rounded-b-xl">
          <button 
            onClick={handlePay}
            disabled={isProcessing}
            className="w-full py-3.5 rounded-lg bg-primary text-white font-bold text-base shadow-sm hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isProcessing ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Processing Payment...
              </>
            ) : (
              <>
                Pay {formatINR(installment.netAmount)} Securely
              </>
            )}
          </button>
          <p className="text-[10px] text-text-secondary text-center mt-3 flex items-center justify-center gap-1">
            <ShieldCheck size={12} className="text-success" /> Payments are 100% encrypted and secure.
          </p>
        </div>

      </div>
    </div>
  );
}
