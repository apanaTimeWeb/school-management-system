"use client";
import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';
import { usePrincipalTimetableStore } from '../timetable_store/usePrincipalTimetableStore';

export default function PrincipalTimetableConflictModal() {
  const { isConflictModalOpen, setConflictModalOpen } = usePrincipalTimetableStore();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!isConflictModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setConflictModalOpen(false);
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-5 py-4 bg-danger/10 border-b border-danger/20 flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-danger flex items-center gap-2">
            <AlertTriangle className="text-danger" size={18} />
            Resolve Timetable Conflict
          </h2>
          <button 
            onClick={() => setConflictModalOpen(false)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          {saved ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <CheckCircle size={48} className="text-success mb-4" />
              <h3 className="text-[18px] font-bold text-text-primary">Conflict Resolved!</h3>
              <p className="text-[13px] text-text-secondary mt-1">The timetable has been updated successfully.</p>
            </div>
          ) : (
            <>
              <div className="bg-page border border-border/50 rounded-lg p-4 mb-4">
                <p className="text-[12px] text-text-secondary mb-1">Conflict Details</p>
                <p className="text-[14px] font-bold text-text-primary">Double Booking</p>
                <p className="text-[13px] text-text-primary mt-1">
                  Mr. Arvind Kumar is assigned to Class 10-A and 9-B at 08:00 AM on Monday.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[12px] font-semibold text-text-primary mb-1.5 block">Resolution Action *</label>
                  <select
                    required
                    className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    <option value="">Select Action</option>
                    <option value="a1">Unassign Mr. Arvind from Class 9-B</option>
                    <option value="a2">Move Class 9-B period to 09:45 AM</option>
                    <option value="a3">Assign substitute for Class 9-B</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setConflictModalOpen(false)}
                  className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-md bg-danger text-white text-[13px] font-bold hover:bg-danger-hover transition-colors flex items-center gap-2 disabled:opacity-70"
                >
                  {loading && <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  Apply Resolution
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
