"use client";
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { useTeacherAttendanceStore } from '../attendance_store/useTeacherAttendanceStore';
import { TEACHER_ATTENDANCE_HISTORY } from '../attendance_constants/TeacherAttendanceMockData';

export default function TeacherAttendanceCorrectionModal() {
  const { isCorrectionModalOpen, closeCorrectionModal, correctionRecordId } = useTeacherAttendanceStore();
  const [reason, setReason] = useState('');

  if (!isCorrectionModalOpen || !correctionRecordId) return null;

  const record = TEACHER_ATTENDANCE_HISTORY.find(h => h.id === correctionRecordId);
  if (!record) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Correction request submitted for Principal approval.' }));
    closeCorrectionModal();
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

          <div className="pt-2 flex justify-end gap-3">
            <button 
              type="button" 
              onClick={closeCorrectionModal}
              className="px-4 py-2 bg-page border border-border text-text-primary font-bold text-[13px] rounded hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-primary text-black font-bold text-[13px] rounded hover:bg-primary/90 flex items-center gap-2 transition-colors"
            >
              <Send size={16} /> Submit Request
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
