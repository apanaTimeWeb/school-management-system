"use client";
import React, { useState } from 'react';
import { X, Check, FileText, AlertTriangle } from 'lucide-react';
import { useTeacherSubstitutesStore } from '../substitutes_store/useTeacherSubstitutesStore';

export default function TeacherSubstituteActionModal() {
  const { isActionModalOpen, closeActionModal, selectedSubstitute, updateSubstituteStatus } = useTeacherSubstitutesStore();
  const [rejectReason, setRejectReason] = useState('');
  const [showRejectForm, setShowRejectForm] = useState(false);

  if (!isActionModalOpen || !selectedSubstitute) return null;

  const handleAcknowledge = () => {
    updateSubstituteStatus(selectedSubstitute.id, 'Accepted');
    closeActionModal();
  };

  const handleRejectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSubstituteStatus(selectedSubstitute.id, 'Rejected', rejectReason);
    closeActionModal();
    setShowRejectForm(false);
  };

  const handleClose = () => {
    setShowRejectForm(false);
    closeActionModal();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-lg bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary">
            Substitute Instructions
          </h2>
          <button onClick={handleClose} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
           
           <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 justify-between">
              <div>
                <p className="text-[12px] text-text-secondary uppercase font-bold tracking-wider mb-1">Class & Subject</p>
                <p className="text-[16px] font-bold text-primary">{selectedSubstitute.class} - {selectedSubstitute.subject}</p>
              </div>
              <div className="md:text-right">
                <p className="text-[12px] text-text-secondary uppercase font-bold tracking-wider mb-1">Period</p>
                <p className="text-[14px] font-bold text-text-primary">{selectedSubstitute.period}</p>
              </div>
           </div>

           <div className="bg-card border border-border rounded-xl p-5">
             <h3 className="text-[13px] font-bold text-text-primary mb-3 flex items-center gap-2"><FileText size={16} className="text-warning"/> Instructions from Original Teacher</h3>
             <p className="text-[14px] text-text-primary leading-relaxed bg-input p-3 rounded-lg border border-border/50">
               "{selectedSubstitute.instructions}"
             </p>
             <p className="text-[11px] text-text-secondary mt-3">Replacing: <span className="font-bold text-text-primary">{selectedSubstitute.originalTeacher}</span></p>
           </div>

           {selectedSubstitute.status === 'Pending Acknowledgment' && !showRejectForm && (
             <div className="flex gap-3 pt-4 border-t border-border">
               <button 
                 onClick={() => setShowRejectForm(true)}
                 className="flex-1 py-2.5 bg-page border border-border text-text-primary font-bold text-[13px] rounded-lg hover:border-danger hover:text-danger transition-colors flex items-center justify-center gap-2"
               >
                 <X size={16}/> Request Reassignment
               </button>
               <button 
                 onClick={handleAcknowledge}
                 className="flex-1 py-2.5 bg-primary text-black font-bold text-[13px] rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
               >
                 <Check size={16}/> Acknowledge
               </button>
             </div>
           )}

           {showRejectForm && (
             <form onSubmit={handleRejectSubmit} className="pt-4 border-t border-border animate-in fade-in duration-300">
               <label className="block text-[12px] font-bold text-danger uppercase mb-2 flex items-center gap-1.5">
                 <AlertTriangle size={14}/> Reason for Reassignment
               </label>
               <textarea 
                 value={rejectReason}
                 onChange={e => setRejectReason(e.target.value)}
                 placeholder="Please explain why you cannot take this class (e.g. Clash with existing schedule)..."
                 className="w-full h-24 bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary focus:outline-none focus:border-danger resize-none custom-scrollbar mb-3"
                 required
               ></textarea>
               <div className="flex gap-3">
                 <button type="button" onClick={() => setShowRejectForm(false)} className="flex-1 py-2 bg-page border border-border text-text-primary font-bold text-[13px] rounded hover:bg-white/5 transition-colors">
                   Cancel
                 </button>
                 <button type="submit" className="flex-1 py-2 bg-danger text-white font-bold text-[13px] rounded hover:bg-danger/90 transition-colors">
                   Submit Request
                 </button>
               </div>
             </form>
           )}

        </div>

      </div>
    </div>
  );
}
