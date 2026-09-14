"use client";
import React from "react";
import { X, CheckCircle2, Download, Printer } from "lucide-react";
import { useAccountantCollectFeeStore } from "../accountant_collect_fee_store/useAccountantCollectFeeStore";
import { formatCurrency } from "../accountant_collect_fee_utils/AccountantCollectFeeConstants";

// RESPONSIBILITY: Renders the Review popup and the Final Success popup with receipt options.

export default function AccountantCollectFeeSummaryModal() {
  const { 
    selectedStudent, amountToCollect, paymentType, paymentCategory, onlineMethod, offlineMethod,
    isReviewModalOpen, setReviewModalOpen,
    isSuccessModalOpen, setSuccessModalOpen,
    setSelectedStudent
  } = useAccountantCollectFeeStore();

  const activeMethod = paymentCategory === 'Online' ? onlineMethod : offlineMethod;

  const handleConfirm = () => {
    setReviewModalOpen(false);
    // Simulate API call delay
    setTimeout(() => {
      setSuccessModalOpen(true);
    }, 500);
  };

  const handleFinish = () => {
    setSuccessModalOpen(false);
    setSelectedStudent(null);
  };

  if (!isReviewModalOpen && !isSuccessModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
      
      {isReviewModalOpen && selectedStudent && (
        <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden fade-in">
          <div className="flex justify-between items-center p-5 border-b border-border bg-bg-page">
            <h3 className="text-lg font-bold text-text-primary">Review Payment Details</h3>
            <button onClick={() => setReviewModalOpen(false)} className="text-text-secondary hover:text-danger"><X size={20} /></button>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h4 className="text-sm font-bold text-text-primary mb-1">{selectedStudent.studentName}</h4>
              <p className="text-xs text-text-secondary">{selectedStudent.className} | {selectedStudent.admissionNo}</p>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <span className="block text-xs font-semibold text-text-secondary mb-1">Payment Type</span>
                <span className="font-bold text-text-primary">{paymentType} Payment</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-text-secondary mb-1">Method</span>
                <span className="font-bold text-text-primary">{activeMethod} ({paymentCategory})</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-text-secondary mb-1">Total Pending Before</span>
                <span className="font-bold text-danger">{formatCurrency(selectedStudent.totalPending)}</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-text-secondary mb-1">New Pending Balance</span>
                <span className="font-bold text-warning">{formatCurrency(selectedStudent.totalPending - Number(amountToCollect))}</span>
              </div>
            </div>

            <div className="border-t border-border border-dashed pt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-text-primary">Amount to Collect:</span>
              <span className="text-2xl font-black text-success">{formatCurrency(Number(amountToCollect))}</span>
            </div>
          </div>
          
          <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
            <button onClick={() => setReviewModalOpen(false)} className="px-5 py-2.5 text-sm font-semibold text-text-secondary hover:text-text-primary">Edit Details</button>
            <button onClick={handleConfirm} className="px-8 py-2.5 text-sm font-bold bg-success text-white rounded-lg hover:bg-success/80 shadow-lg">Confirm & Collect</button>
          </div>
        </div>
      )}

      {isSuccessModalOpen && selectedStudent && (
        <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-sm overflow-hidden text-center fade-in scale-in">
          <div className="p-8 pb-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center text-success mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Payment Successful!</h3>
            <p className="text-sm text-text-secondary">
              Successfully collected <span className="font-bold text-success">{formatCurrency(Number(amountToCollect))}</span> from {selectedStudent.studentName}.
            </p>
            <p className="text-xs text-text-secondary mt-3">Receipt No: <span className="font-bold text-text-primary">REC-2324-9988</span></p>
          </div>
          
          <div className="p-6 pt-0 flex flex-col gap-3">
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
                <Printer size={16} /> Print
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
                <Download size={16} /> Save PDF
              </button>
            </div>
            <button onClick={handleFinish} className="w-full py-3 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-lg mt-2">
              Collect Another Fee
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
