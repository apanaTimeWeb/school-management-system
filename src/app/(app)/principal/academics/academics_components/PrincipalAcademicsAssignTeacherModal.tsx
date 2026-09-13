"use client";
import React, { useState } from 'react';
import { X, UserPlus, CheckCircle } from 'lucide-react';
import { usePrincipalAcademicsStore } from '../academics_store/usePrincipalAcademicsStore';

export default function PrincipalAcademicsAssignTeacherModal() {
  const { isAssignTeacherModalOpen, setAssignTeacherModalOpen } = usePrincipalAcademicsStore();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!isAssignTeacherModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setAssignTeacherModalOpen(false);
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <UserPlus className="text-info" size={18} />
            Assign Class Teacher
          </h2>
          <button 
            onClick={() => setAssignTeacherModalOpen(false)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          {saved ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <CheckCircle size={48} className="text-success mb-4" />
              <h3 className="text-[18px] font-bold text-text-primary">Teacher Assigned!</h3>
              <p className="text-[13px] text-text-secondary mt-1">The class teacher has been successfully updated.</p>
            </div>
          ) : (
            <>
              <p className="text-[13px] text-text-secondary mb-4">
                Select a teacher from the dropdown to assign them as the primary class teacher for this section.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Select Teacher *</label>
                  <select
                    required
                    className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    <option value="">Select a Teacher</option>
                    <option value="t1">Mr. Arvind Kumar</option>
                    <option value="t2">Ms. Sunita Rao</option>
                    <option value="t3">Mr. John Doe</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setAssignTeacherModalOpen(false)}
                  className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-md bg-info text-white text-[13px] font-bold hover:bg-info-hover transition-colors flex items-center gap-2 disabled:opacity-70"
                >
                  {loading && <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  Save Assignment
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
