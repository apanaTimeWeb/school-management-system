"use client";
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { useTeacherAttendanceStore } from '../attendance_store/useTeacherAttendanceStore';
import { TEACHER_ATTENDANCE_HISTORY } from '../attendance_constants/TeacherAttendanceMockData';

export default function TeacherAttendanceCorrectionModal() {
  const { isCorrectionModalOpen, closeCorrectionModal, correctionRecordId } = useTeacherAttendanceStore();
  const [reason, setReason] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  if (!isCorrectionModalOpen || !correctionRecordId) return null;

  const record = TEACHER_ATTENDANCE_HISTORY.find(h => h.id === correctionRecordId);
  if (!record) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Correction request submitted for Principal approval.');
    setTimeout(() => {
      setSuccessMessage('');
      closeCorrectionModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-md bg-bg-main shadow-2xl rounded-xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[16px] font-bold text-text-primary">
            Request Attendance Correction
          </h2>
          <button 
            onClick={closeCorrectionModal}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-[13px] text-text-secondary">Class: <span className="font-bold text-primary">{record.class}</span></p>
            <p className="text-[13px] text-text-secondary mt-1">Date: <span className="font-bold text-primary">{record.date}</span></p>
          </div>

          <div>
            <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Correction Details & Reason</label>
            <textarea 
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g. Roll No 12 was marked absent but came in late during 2nd period."
              className="w-full h-32 bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary focus:outline-none focus:border-primary resize-none"
              required
            ></textarea>
            <p className="text-[11px] text-warning mt-2">Note: Corrections require approval from the Principal.</p>
          </div>

          <div className="pt-4 border-t border-border flex justify-end gap-3 items-center">
            {successMessage ? (
              <div className="flex-1 text-success text-[13px] font-bold animate-in fade-in">
                {successMessage}
              </div>
            ) : null}
            <button 
              type="button" 
              onClick={closeCorrectionModal}
              className="px-5 py-2.5 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={!!successMessage}
              className="px-5 py-2.5 bg-warning text-white font-bold text-[14px] rounded-lg hover:bg-warning/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} /> Submit Request
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
