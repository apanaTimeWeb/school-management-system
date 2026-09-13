"use client";
import React, { useState } from 'react';
import { X, TrendingUp } from 'lucide-react';
import { usePrincipalStudentsStore } from '../students_store/usePrincipalStudentsStore';

export default function PrincipalStudentPromotionModal() {
  const { isPromotionModalOpen, setPromotionModalOpen, selectedStudentId, updateLifecycleStatus } = usePrincipalStudentsStore();
  const [loading, setLoading] = useState(false);
  const [nextClass, setNextClass] = useState('');

  if (!isPromotionModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      updateLifecycleStatus(selectedStudentId!, { promotionStatus: 'Promoted' });
      setLoading(false);
      setPromotionModalOpen(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <TrendingUp className="text-success" size={18} />
            Request Promotion
          </h2>
          <button 
            onClick={() => setPromotionModalOpen(false)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <p className="text-[13px] text-text-secondary mb-4">
            This student is eligible for academic promotion based on their final term results. Please select the next class and section.
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Promote To Class *</label>
              <select
                required
                value={nextClass}
                onChange={(e) => setNextClass(e.target.value)}
                className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                <option value="">Select Class</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>
            
            <div>
              <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Promote To Section *</label>
              <select
                required
                className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                <option value="">Select Section</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
              </select>
            </div>
            
            <div>
              <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Remarks (Optional)</label>
              <textarea
                placeholder="Any special notes for the next class teacher..."
                className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary min-h-[60px]"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setPromotionModalOpen(false)}
              className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-md bg-success text-white text-[13px] font-bold hover:bg-success/90 transition-colors flex items-center gap-2 disabled:opacity-70"
            >
              {loading && <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              Confirm Promotion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
