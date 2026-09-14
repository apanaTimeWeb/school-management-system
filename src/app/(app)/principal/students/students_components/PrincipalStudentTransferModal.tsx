"use client";
import React, { useState } from 'react';
import { X, Share } from 'lucide-react';
import { usePrincipalStudentsStore } from '../students_store/usePrincipalStudentsStore';

export default function PrincipalStudentTransferModal() {
  const { isTransferModalOpen, setTransferModalOpen, selectedStudentId, updateLifecycleStatus } = usePrincipalStudentsStore();
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState('');

  if (!isTransferModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      updateLifecycleStatus(selectedStudentId!, { transferStatus: 'Requested' });
      setLoading(false);
      setTransferModalOpen(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <Share className="text-primary" size={18} />
            Initiate Transfer
          </h2>
          <button 
            onClick={() => setTransferModalOpen(false)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <p className="text-[13px] text-text-secondary mb-4">
            Are you sure you want to initiate a Transfer Certificate (TC) request for this student? This action will notify the administration and parents.
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Transfer Reason *</label>
              <textarea
                required
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="e.g. Relocating to another city..."
                className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary min-h-[80px]"
              />
            </div>
            
            <div>
              <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Expected Last Date</label>
              <input
                type="date"
                required
                className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setTransferModalOpen(false)}
              className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-md bg-primary text-white text-[13px] font-bold hover:bg-primary-hover transition-colors flex items-center gap-2 disabled:opacity-70"
            >
              {loading && <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
