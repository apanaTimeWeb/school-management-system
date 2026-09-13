"use client";
import React, { useState } from 'react';
import { X, Award, CheckCircle } from 'lucide-react';
import { usePrincipalAcademicsStore } from '../academics_store/usePrincipalAcademicsStore';

export default function PrincipalAcademicsHODModal() {
  const { isHODModalOpen, setHODModalOpen } = usePrincipalAcademicsStore();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!isHODModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setHODModalOpen(false);
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <Award className="text-primary" size={18} />
            Assign Head of Department
          </h2>
          <button 
            onClick={() => setHODModalOpen(false)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          {saved ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <CheckCircle size={48} className="text-success mb-4" />
              <h3 className="text-[18px] font-bold text-text-primary">HOD Assigned!</h3>
              <p className="text-[13px] text-text-secondary mt-1">The Head of Department has been updated successfully.</p>
            </div>
          ) : (
            <>
              <p className="text-[13px] text-text-secondary mb-4">
                Select a senior teacher from the dropdown to assign them as the Head of Department (HOD).
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Select Senior Teacher *</label>
                  <select
                    required
                    className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    <option value="">Select HOD</option>
                    <option value="h1">Dr. R. Sharma</option>
                    <option value="h2">Mr. V. Raman</option>
                    <option value="h3">Ms. Anita Desai</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setHODModalOpen(false)}
                  className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-md bg-primary text-black text-[13px] font-bold hover:bg-primary-hover transition-colors flex items-center gap-2 disabled:opacity-70"
                >
                  {loading && <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
                  Save HOD
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
