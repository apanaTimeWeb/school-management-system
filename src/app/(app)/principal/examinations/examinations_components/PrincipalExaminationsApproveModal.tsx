"use client";
import React, { useState } from 'react';
import { X, CheckCircle, FileCheck, XCircle } from 'lucide-react';
import { usePrincipalExaminationsStore } from '../examinations_store/usePrincipalExaminationsStore';

export default function PrincipalExaminationsApproveModal() {
  const { isApproveModalOpen, setApproveModalOpen } = usePrincipalExaminationsStore();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [action, setAction] = useState<'approve' | 'reject' | null>(null);

  if (!isApproveModalOpen) return null;

  const handleAction = (type: 'approve' | 'reject') => {
    setAction(type);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setApproveModalOpen(false);
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <FileCheck className="text-primary" size={18} />
            Verify Marks Submission
          </h2>
          <button 
            onClick={() => setApproveModalOpen(false)}
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
                Marks {action === 'approve' ? 'Approved & Published' : 'Rejected'}!
              </h3>
              <p className="text-[13px] text-text-secondary mt-1">Action has been recorded successfully.</p>
            </div>
          ) : (
            <>
              <div className="bg-page border border-border/50 rounded-lg p-4 mb-6">
                <h4 className="text-[14px] font-bold text-text-primary mb-3">Submission Details</h4>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Exam</p>
                    <p className="text-[14px] font-bold text-text-primary">Unit Test 2</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Class & Subject</p>
                    <p className="text-[14px] font-bold text-text-primary">Class 10-A • Mathematics</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Teacher</p>
                    <p className="text-[13px] text-text-primary">Mr. Arvind Kumar</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Performance</p>
                    <p className="text-[13px] font-bold text-info">Avg: 78.5% • High: 99%</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleAction('reject')}
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 rounded-md bg-danger/10 border border-danger/30 text-danger text-[13px] font-bold hover:bg-danger hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-sm"
                >
                  {loading && action === 'reject' ? <div className="w-3.5 h-3.5 border-2 border-danger/30 border-t-danger rounded-full animate-spin" /> : <XCircle size={16} />}
                  Reject & Reassign
                </button>
                <button
                  onClick={() => handleAction('approve')}
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 rounded-md bg-success/10 border border-success/30 text-success text-[13px] font-bold hover:bg-success hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-sm"
                >
                  {loading && action === 'approve' ? <div className="w-3.5 h-3.5 border-2 border-success/30 border-t-success rounded-full animate-spin" /> : <CheckCircle size={16} />}
                  Approve & Publish
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
