"use client";
import React, { useState } from 'react';
import { X, UserMinus } from 'lucide-react';
import { usePrincipalStudentsStore } from '../../students_store/usePrincipalStudentsStore';

export default function PrincipalStudentWithdrawalModal() {
  const { isWithdrawalModalOpen, setWithdrawalModalOpen, selectedStudentId, updateLifecycleStatus } = usePrincipalStudentsStore();
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState('');

  if (!isWithdrawalModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      updateLifecycleStatus(selectedStudentId!, { withdrawalStatus: 'Requested' });
      setLoading(false);
      setWithdrawalModalOpen(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-5 py-4 bg-danger/10 border-b border-border flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-danger flex items-center gap-2">
            <UserMinus className="text-danger" size={18} />
            Withdraw Student
          </h2>
          <button 
            onClick={() => setWithdrawalModalOpen(false)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <p className="text-[13px] text-text-secondary mb-4">
            You are about to initiate a withdrawal process for this student. This will temporarily suspend their active status pending final approval.
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Reason for Withdrawal *</label>
              <select
                required
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                <option value="">Select Reason</option>
                <option value="parent_request">Parent Request</option>
                <option value="disciplinary">Disciplinary Action</option>
                <option value="financial">Financial Dues</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            {reason === 'other' && (
              <div>
                <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Please specify</label>
                <textarea
                  required
                  className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary min-h-[60px]"
                />
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setWithdrawalModalOpen(false)}
              className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-md bg-danger text-white text-[13px] font-bold hover:bg-danger/90 transition-colors flex items-center gap-2 disabled:opacity-70"
            >
              {loading && <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              Submit Withdrawal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
