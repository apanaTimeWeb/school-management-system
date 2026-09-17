"use client";

import React, { useEffect } from 'react';
import { X, User, MapPin, Receipt, Calendar, CreditCard, AlertTriangle, ShieldCheck, Download, History } from 'lucide-react';
import type { TransportFeeRecord } from '../transport_fee_types/transport_fee.types';
import { FEE_STATUS_COLORS } from '../transport_fee_constants/transport_fee.constants';

// RESPONSIBILITY: Renders the detailed read-only profile modal for a student's transport fee ledger

interface TransportFeeProfileModalProps {
  record: TransportFeeRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TransportFeeProfileModal({ record, isOpen, onClose }: TransportFeeProfileModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !record) return null;

  const statusConfig = FEE_STATUS_COLORS[record.status] || FEE_STATUS_COLORS.OVERDUE;
  const isOverdue = record.status === 'OVERDUE';
  const isFullyPaid = record.status === 'PAID';

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-3xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-5 border-b border-[var(--border)] ${isOverdue ? 'bg-[rgba(239,68,68,0.05)] border-b-red-500/20' : 'bg-[var(--bg-card)]'}`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isOverdue ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-[rgba(250,204,21,0.1)] border-[rgba(250,204,21,0.2)] text-[var(--primary)]'}`}>
              <Receipt size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{record.studentName}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-[var(--primary)] tracking-wide">
                  {record.studentId}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  {record.classSection}
                </span>
                <span className="text-[var(--text-secondary)]">•</span>
                <span 
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: statusConfig.bg, color: statusConfig.text }}
                >
                  {statusConfig.label}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors self-start"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* Top Warning/Success Banner */}
          {isOverdue && record.dueDate && (
             <div className="bg-[rgba(239,68,68,0.1)] border border-red-500/30 rounded-lg p-4 flex gap-3 animate-in fade-in slide-in-from-top-2">
                <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-0.5">Payment Overdue</h4>
                  <p className="text-xs text-[var(--text-primary)] font-medium">This student has an outstanding balance of {formatCurrency(record.outstandingAmount)} that was due on {record.dueDate}.</p>
                </div>
             </div>
          )}
          {isFullyPaid && (
             <div className="bg-[rgba(16,185,129,0.1)] border border-emerald-500/30 rounded-lg p-3 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                <ShieldCheck size={20} className="text-emerald-500 flex-shrink-0" />
                <p className="text-sm text-emerald-600 font-bold">Transport fees paid in full. No outstanding balance.</p>
             </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Context & Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <MapPin size={16} className="text-[var(--primary)]" /> Route & Assignment
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Assigned Route</span>
                  <span className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                     <span className="px-1.5 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-input)] text-[10px]">{record.routeId}</span> 
                     {record.routeName}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-xs mb-0.5 block">Designated Pickup Point</span>
                  <span className="font-medium text-[var(--text-primary)]">{record.pickupPoint}</span>
                </div>
                
                {record.dueDate && !isFullyPaid && (
                  <div className="bg-[var(--bg-input)] border border-[var(--border)] p-3 rounded flex flex-col w-max pr-8 mt-2">
                    <span className="text-[10px] text-[var(--text-secondary)] mb-1 flex items-center gap-1 uppercase font-semibold">
                      <Calendar size={10} className="text-[var(--primary)]"/> Next Due Date
                    </span>
                    <span className={`font-bold text-lg ${isOverdue ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>{record.dueDate}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Financial Summary */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <CreditCard size={16} className="text-[var(--primary)]" /> Financial Ledger
              </h3>
              
              <div className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg overflow-hidden">
                 <div className="p-3 border-b border-[var(--border)] flex justify-between items-center text-sm">
                   <span className="text-[var(--text-secondary)]">Base Route Fee</span>
                   <span className="font-medium text-[var(--text-primary)]">{formatCurrency(record.totalFee)}</span>
                 </div>
                 {record.concession > 0 && (
                   <div className="p-3 border-b border-[var(--border)] flex justify-between items-center text-sm bg-[rgba(16,185,129,0.02)] text-emerald-500">
                     <span>Concession / Discount</span>
                     <span className="font-bold">- {formatCurrency(record.concession)}</span>
                   </div>
                 )}
                 {record.fine > 0 && (
                   <div className="p-3 border-b border-[var(--border)] flex justify-between items-center text-sm bg-[rgba(239,68,68,0.02)] text-red-500">
                     <span>Late Fine</span>
                     <span className="font-bold">+ {formatCurrency(record.fine)}</span>
                   </div>
                 )}
                 <div className="p-3 bg-[var(--bg-card)] flex justify-between items-center border-b border-[var(--border)]">
                   <span className="text-xs uppercase font-bold text-[var(--text-primary)]">Net Payable</span>
                   <span className="text-sm font-bold text-[var(--text-primary)]">{formatCurrency(record.netPayable)}</span>
                 </div>
                 <div className="p-3 bg-[rgba(59,130,246,0.05)] flex justify-between items-center border-b border-[var(--border)]">
                   <span className="text-xs uppercase font-bold text-[var(--text-secondary)]">Total Paid</span>
                   <span className="text-sm font-bold text-blue-500">{formatCurrency(record.paidAmount)}</span>
                 </div>
                 <div className={`p-3 flex justify-between items-center ${record.outstandingAmount > 0 ? 'bg-[rgba(245,158,11,0.05)]' : 'bg-[rgba(16,185,129,0.05)]'}`}>
                   <span className={`text-xs uppercase font-bold ${record.outstandingAmount > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>Balance Outstanding</span>
                   <span className={`text-lg font-bold ${record.outstandingAmount > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>{formatCurrency(record.outstandingAmount)}</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Payment History Log */}
          <div className="space-y-4 pt-4 border-t border-[var(--border)]">
             <div className="flex items-center justify-between">
               <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <History size={16} className="text-[var(--primary)]" /> Payment History & Receipts
               </h3>
               <span className="text-[10px] bg-[var(--bg-input)] px-2 py-1 rounded text-[var(--text-secondary)] italic">
                 Managed by Accountant
               </span>
             </div>
             
             {record.paymentHistory && record.paymentHistory.length > 0 ? (
               <div className="space-y-3">
                 {record.paymentHistory.map((log, idx) => (
                   <div key={idx} className="bg-[var(--bg-card)] border border-[var(--border)] p-3 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:border-[var(--primary)] transition-colors">
                     
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[var(--text-primary)]">{log.receiptNo}</span>
                          <span className="text-[9px] uppercase font-bold bg-[var(--bg-input)] border border-[var(--border)] px-1.5 py-0.5 rounded text-[var(--text-secondary)]">
                            {log.paymentMethod}
                          </span>
                        </div>
                        <span className="text-xs text-[var(--text-secondary)]">{log.date} • {log.remarks || 'No remarks'}</span>
                     </div>
                     
                     <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                        <span className="text-base font-bold text-emerald-500">+{formatCurrency(log.amountPaid)}</span>
                        <button className="p-1.5 bg-[var(--bg-input)] hover:bg-[var(--primary)] hover:text-white text-[var(--text-secondary)] rounded transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide">
                          <Download size={12} /> Receipt
                        </button>
                     </div>
                   </div>
                 ))}
               </div>
             ) : (
               <div className="bg-[var(--bg-input)] border border-[var(--border)] p-6 rounded-lg text-center flex flex-col items-center justify-center">
                 <Receipt size={24} className="text-[var(--text-secondary)] opacity-30 mb-2" />
                 <span className="text-[var(--text-secondary)] text-sm">No payment history found for this student.</span>
               </div>
             )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-md bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors shadow-[var(--primary-subtle)] shadow-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
