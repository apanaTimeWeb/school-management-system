"use client";
import React, { useState } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';
import { usePrincipalAttendanceStore } from '../attendance_store/usePrincipalAttendanceStore';

export default function PrincipalAttendanceCorrectionModal() {
  const { isCorrectionModalOpen, setCorrectionModalOpen } = usePrincipalAttendanceStore();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [action, setAction] = useState<'approve' | 'reject' | null>(null);

  if (!isCorrectionModalOpen) return null;

  const handleAction = (type: 'approve' | 'reject') => {
    setAction(type);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setCorrectionModalOpen(false);
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            Review Correction Request
          </h2>
          <button 
            onClick={() => setCorrectionModalOpen(false)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5">
          {saved ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              {action === 'approve' ? (
                <CheckCircle size={48} className="text-success mb-4" />
              ) : (
                <XCircle size={48} className="text-danger mb-4" />
              )}
              <h3 className="text-[18px] font-bold text-text-primary">
                Request {action === 'approve' ? 'Approved' : 'Rejected'}!
              </h3>
              <p className="text-[13px] text-text-secondary mt-1">The attendance log has been updated accordingly.</p>
            </div>
          ) : (
            <>
              <div className="bg-card border border-border rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Student</p>
                    <p className="text-[14px] font-bold text-text-primary">Rahul Verma</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Class</p>
                    <p className="text-[14px] font-bold text-text-primary">Class 10-A</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Requested By</p>
                    <p className="text-[14px] font-bold text-text-primary">Mr. Arvind Kumar</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Date</p>
                    <p className="text-[14px] font-bold text-text-primary">2024-10-14</p>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-4">
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-2">Teacher's Reason</p>
                  <p className="text-[13px] text-text-primary bg-page p-3 rounded border border-border/50 italic">
                    "Student arrived late after attendance was taken due to heavy traffic. Need to mark him Present."
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleAction('reject')}
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 rounded-md bg-danger/10 border border-danger/30 text-danger text-[13px] font-bold hover:bg-danger hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-sm"
                >
                  {loading && action === 'reject' ? <div className="w-3.5 h-3.5 border-2 border-danger/30 border-t-danger rounded-full animate-spin" /> : <XCircle size={16} />}
                  Reject Request
                </button>
                <button
                  onClick={() => handleAction('approve')}
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 rounded-md bg-success/10 border border-success/30 text-success text-[13px] font-bold hover:bg-success hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-sm"
                >
                  {loading && action === 'approve' ? <div className="w-3.5 h-3.5 border-2 border-success/30 border-t-success rounded-full animate-spin" /> : <CheckCircle size={16} />}
                  Approve Correction
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
