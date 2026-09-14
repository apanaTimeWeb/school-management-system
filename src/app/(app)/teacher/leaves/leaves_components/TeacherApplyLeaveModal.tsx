"use client";
import React, { useState } from 'react';
import { X, Send, UploadCloud, CalendarOff } from 'lucide-react';
import { useTeacherLeavesStore, LeaveType } from '../leaves_store/useTeacherLeavesStore';

export default function TeacherApplyLeaveModal() {
  const { isApplyLeaveModalOpen, closeApplyLeaveModal, addLeave } = useTeacherLeavesStore();
  
  const [formData, setFormData] = useState({
    type: 'Casual Leave' as LeaveType,
    fromDate: '',
    toDate: '',
    reason: '',
    reason: '',
    file: null as File | null
  });
  const [successMessage, setSuccessMessage] = useState('');

  if (!isApplyLeaveModalOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const newLeave = {
      id: `LEAVE-${Date.now()}`,
      type: formData.type,
      fromDate: formData.fromDate,
      toDate: formData.toDate,
      reason: formData.reason,
      status: 'Pending' as const,
      appliedOn: new Date().toLocaleDateString('en-GB'),
      attachment: formData.file ? formData.file.name : undefined
    };
    addLeave(newLeave);
    setSuccessMessage('Leave application submitted successfully.');
    setTimeout(() => {
      setSuccessMessage('');
      closeApplyLeaveModal();
      setFormData({ type: 'Casual Leave' as LeaveType, fromDate: '', toDate: '', reason: '', file: null });
    }, 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({...formData, file: e.target.files[0]});
    }
  };

  const LEAVE_TYPES: LeaveType[] = ['Casual Leave', 'Sick Leave', 'Earned Leave', 'Maternity Leave', 'Other'];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-lg bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <CalendarOff size={20} className="text-primary"/> Apply For Leave
          </h2>
          <button onClick={closeApplyLeaveModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSend} className="p-6 space-y-5">
           
           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Leave Type</label>
             <select 
               value={formData.type}
               onChange={e => setFormData({...formData, type: e.target.value as LeaveType})}
               className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required
             >
               {LEAVE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
             </select>
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">From Date</label>
               <input 
                 type="date" 
                 value={formData.fromDate}
                 onChange={e => setFormData({...formData, fromDate: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required 
               />
             </div>
             <div>
               <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">To Date</label>
               <input 
                 type="date" 
                 value={formData.toDate}
                 onChange={e => setFormData({...formData, toDate: e.target.value})}
                 className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required 
               />
             </div>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Reason</label>
             <textarea 
               value={formData.reason}
               onChange={e => setFormData({...formData, reason: e.target.value})}
               placeholder="Please specify the reason for taking leave..."
               className="w-full h-28 bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar"
               required
             ></textarea>
           </div>

           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Medical Certificate / Attachment (Optional)</label>
             <div className="relative w-full h-12 bg-input border border-border border-dashed rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer overflow-hidden">
               <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
               <div className="flex items-center gap-2 text-[13px] font-bold text-text-secondary">
                 <UploadCloud size={18} />
                 {formData.file ? <span className="text-primary">{formData.file.name}</span> : <span>Click to upload file</span>}
               </div>
             </div>
           </div>

           <div className="pt-2 flex justify-end gap-3 border-t border-border mt-4 items-center">
             {successMessage ? (
               <div className="flex-1 text-success text-[13px] font-bold animate-in fade-in">
                 {successMessage}
               </div>
             ) : null}
             <button type="button" onClick={closeApplyLeaveModal} className="px-5 py-2.5 bg-transparent border border-border text-text-primary font-bold text-[13px] rounded-lg hover:bg-white/5 transition-colors mr-auto">
               Cancel
             </button>
             <button type="submit" disabled={!!successMessage} className="px-5 py-2.5 bg-primary text-white font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
               <Send size={16} /> Submit Application
             </button>
           </div>
        </form>

      </div>
    </div>
  );
}
